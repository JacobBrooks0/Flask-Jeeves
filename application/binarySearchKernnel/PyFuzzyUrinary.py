import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl
from def_enums import *

##############################################################################################
############################  Enumeration and Definition Section  ############################
##############################################################################################
specialty = 'Urinary'

# TODO 1: Fazer um for em AllSymptoms e preencher UrinarySymptoms com os que são do Urinary
UrinarySymptoms = [
                    {'name':'Frequent Urination', 'type':'Discrete'},
                    {'name':'Blood in Urine', 'type':'Discrete'},
                    {'name':'Painful Urination', 'type':'Discrete'},
                    {'name':'Licking Genital Area', 'type':'Discrete'},
                    {'name':'Lethargy and Weakness', 'type':'Discrete'},
                    {'name':'Straining to Urinate', 'type':'Continuous'},
                    {'name':'Abdominal Pain', 'type':'Continuous'},
                    {'name':'Vomiting and Nausea', 'type':'Discrete'},
                  ]

# TODO 2: mesmo para o diseases name
UrinaryDiseases = ['Urethal Obstruction',
                 'Feline Lower Urinary Tract Disease',
                 'Renal Disease', ]

# TODO 3: Salvar as regras em um arquivo separado (UrinaryDiseaseRules.pui), Criar um novo script para sortear opções de sintomas para te ajudar a preencher esse arquivo.
# Regra: Não pode ter dois inputs iguais nesse arquivo
UrinaryRules =  [
    { 'Disease':'Urethal Obstruction',
                                       'rulelist':[{'property':'Frequent Urination',    'value':'Yes'   },
                                                   {'property':'Blood in Urine',        'value':'Yes'   },
                                                   {'property':'Painful Urination',     'value':'Yes'   },
                                                   {'property':'Licking Genital Area',  'value':'Yes'   },
                                                   {'property':'Lethargy and Weakness', 'value':'Yes'   },
                                                   {'property':'Straining to Urinate',  'value':'Medium'},
                                                   {'property':'Abdominal Pain',        'value':'Medium'},
                                                   {'property':'Overweight',            'value':'Medium'},
                                                   {'property':'Vomiting and Nausea',   'value':'Yes'   },
                                                  ]
    },
    { 'Disease':'Feline Lower Urinary Tract Disease',
                                       'rulelist':[{'property':'Frequent Urination',    'value':'Yes'   },
                                                   {'property':'Blood in Urine',        'value':'Yes'   },
                                                   {'property':'Painful Urination',     'value':'Yes'   },
                                                   {'property':'Licking Genital Area',  'value':'Yes'   },
                                                   {'property':'Lethargy and Weakness', 'value':'Yes'   },
                                                   {'property':'Straining to Urinate',  'value':'Low'},
                                                   {'property':'Abdominal Pain',        'value':'Medium'},
                                                   {'property':'Overweight',            'value':'Medium'},
                                                   {'property':'Vomiting and Nausea',   'value':'Yes'   },
                                                  ]
    },
    { 'Disease':'Renal Disease',
                                       'rulelist':[{'property':'Frequent Urination',    'value':'Yes'   },
                                                   {'property':'Blood in Urine',        'value':'Yes'   },
                                                   {'property':'Painful Urination',     'value':'No'    },
                                                   {'property':'Licking Genital Area',  'value':'No'    },
                                                   {'property':'Lethargy and Weakness', 'value':'Yes'   },
                                                   {'property':'Straining to Urinate',  'value':'Low' },
                                                   {'property':'Abdominal Pain',        'value':'Low' },
                                                   {'property':'Overweight',            'value':'Medium'},
                                                   {'property':'Vomiting and Nausea',   'value':'Yes'   },
                                                  ]
    },

    { 'Disease':'Renal Disease',
                                       'rulelist':[{'property':'Frequent Urination',    'value':'Yes'   },
                                                   {'property':'Blood in Urine',        'value':'Yes'   },
                                                   {'property':'Painful Urination',     'value':'No'    },
                                                   {'property':'Licking Genital Area',  'value':'No'    },
                                                   {'property':'Lethargy and Weakness', 'value':'Yes'   },
                                                   {'property':'Straining to Urinate',  'value':'Low' },
                                                   {'property':'Abdominal Pain',        'value':'Low' },
                                                   {'property':'Overweight',            'value':'Medium'},
                                                   {'property':'Vomiting and Nausea',   'value':'No'    },
                                                  ]
    },
    ]

##############################################################################################
############################        Input Fuzzification             ##########################
##############################################################################################

# Creating Symptoms List
SymptomsFuzzyList = {}
for sym in UrinarySymptoms + AllCharacteristics:
    AuxFuzzy = None
    if (sym['type'] == 'Discrete'):
        AuxFuzzy = ctrl.Antecedent(np.arange(0, 2, 1), sym['name'])
        AuxFuzzy[DiscreteEnum[0]] = fuzz.trimf( AuxFuzzy.universe, [0, 0, 1] )
        AuxFuzzy[DiscreteEnum[1]] = fuzz.trimf( AuxFuzzy.universe, [0, 1, 1] )

    elif (sym['type'] == 'Continuous'):
        AuxFuzzy = ctrl.Antecedent(np.arange(0, 5, 1), sym['name'])
        AuxFuzzy[ContinuousEnum[0]] = fuzz.trimf( AuxFuzzy.universe, [0, 0, 2] )
        AuxFuzzy[ContinuousEnum[1]] = fuzz.trimf( AuxFuzzy.universe, [1, 2, 3] )
        AuxFuzzy[ContinuousEnum[2]] = fuzz.trimf( AuxFuzzy.universe, [2, 4, 4] )

    SymptomsFuzzyList[sym['name']] = AuxFuzzy
    # AuxFuzzy.view()

# Creating Disease List
topval = len(UrinaryDiseases)+2
DiseasesFuzzy = ctrl.Consequent(np.arange(0, topval, 1), specialty)
for i in range(1, len(UrinaryDiseases)+1):
    DiseasesFuzzy[UrinaryDiseases[i-1]] = fuzz.trimf( DiseasesFuzzy.universe, [i-1, i, i+1] )

##############################################################################################
############################           Fuzzy Rules                  ##########################
##############################################################################################
# Define Rules
DiseasesRules_List = []
for dis in UrinaryRules:

    firstInsert = True
    rule = ctrl.Rule()
    for sym in dis['rulelist']:
        if firstInsert:
            rule.antecedent = SymptomsFuzzyList[sym['property']][sym['value']]
            firstInsert = False
        else:
            rule.antecedent &= SymptomsFuzzyList[sym['property']][sym['value']]

    # Include the Consequence Disease
    rule.consequent = DiseasesFuzzy[dis['Disease']]
    DiseasesRules_List.append(rule)

UrinaryDiseases_ctrl = ctrl.ControlSystem(DiseasesRules_List)
UrinaryDiseases_sim = ctrl.ControlSystemSimulation(UrinaryDiseases_ctrl)

##############################################################################################
############################           Application                  ##########################
##############################################################################################

UrinaryDiseases_sim.input['Frequent Urination'] = DiscreteVals['Yes']
UrinaryDiseases_sim.input['Blood in Urine'] = DiscreteVals['Yes']
UrinaryDiseases_sim.input['Painful Urination'] = DiscreteVals['Yes']
UrinaryDiseases_sim.input['Licking Genital Area'] = DiscreteVals['Yes']
UrinaryDiseases_sim.input['Lethargy and Weakness'] = DiscreteVals['Yes']

UrinaryDiseases_sim.input['Straining to Urinate'] = 0.5
UrinaryDiseases_sim.input['Abdominal Pain'] = 2.3
UrinaryDiseases_sim.input['Overweight'] = 1.5

UrinaryDiseases_sim.input['Vomiting and Nausea'] = DiscreteVals['Yes']

# try:
#     UrinaryDiseases_sim.input['Dummy Continuous Symptom'] = -1.0
# except:
#     None

UrinaryDiseases_sim.compute()

# TODO 4: Pegar o número que sai de resposta nesse output e converter em uma das doenças da lista.
#print( UrinaryDiseases_sim.output['Urinary'] )

DiseasesFuzzy.view(sim=UrinaryDiseases_sim)
#input()
