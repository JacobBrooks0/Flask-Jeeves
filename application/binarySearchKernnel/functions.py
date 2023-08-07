
def filter_symptoms_specialty(symptoms, flag):
    local_symptoms = []
    for sym in symptoms:
        for specialty in sym['specialty']:
            if specialty == flag and sym['name'] not in local_symptoms:
                local_symptoms.append(sym)
    return local_symptoms


def filter_disease_name(diseases, flag):
    local_diseases = []
    for dis in diseases:
        if dis['specialty'] == flag and dis['name'] not in local_diseases:
            local_diseases.append(dis['name'])
    return local_diseases

def answerDefaultAnamnese(age, sex, contactWithOtherPets, diet, neutered, outdoor):
    ageAns = []
    sexAns = []
    contactWithOtherPetsAns = []
    dietAns = []
    neuteredAns = []
    outdoorAns = []
    def ageConversion(age):
        if age < 1:
            ageAns = [1, 0, 0, 0, 0]
        elif age > 1 and age < 2:
            ageAns = [0, 1, 0, 0, 0]
        elif age > 2 and age < 5:
            ageAns = [0, 0, 1, 0, 0]
        elif age > 5 and age < 7:
            ageAns = [0, 0, 0, 1, 0]
        else:
            ageAns = [0, 0, 0, 0, 1]

    def sexConversion(sex):
        if sex == 'Male'
            sexAns = [0, 0, 0, 0, 1]
        else:
            sexAns = [1, 0, 0, 0 , 0]

    def contactWithOtherPetsConversion(contactWithOtherPets):
        if contactWithOtherPets == 'Yes':
            contactWithOtherPets = [0, 0, 0, 0, 1]
        else:
            contactWithOtherPets = [1, 0, 0, 0, 0]

    def dietConversion(diet):
        if diet == 'Processed'
            dietAns = [0, 0, 0, 0, 1]
        elif diet == 'Mixed':
            dietAns = [0, 0, 1, 0, 0]
        elif diet == 'natural':
            dietAns = [1, 0, 0, 0, 0]

    def neuteredConversion(neutered)
        if neutered == 'Yes':
            neuteredAns = [0, 0, 0, 0, 1]
        else:
            neuteredAns = [1, 0, 0, 0, 0]

    def outdoorConversion(outdoor)
        if outdoor == 'Yes':
            outdoorAns = [0, 0, 0, 0, 1]
        else:
            outdoorAns = [1, 0, 0, 0, 0]






