from datetime import datetime

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

def answerDefaultAnamnese(age, sex, diet, neutered, outdoor, contactWithOtherPets = 'No'):
    current_date = datetime.now().date()
    age_in_years = ((current_date - age).days)/360 
    answers = []

    def ageConversion(age_in_years):
        if age_in_years < 1:
            answers.append(0.00)
        elif age_in_years >= 1 and age_in_years < 2:
            answers.append(0.25)
        elif age_in_years >= 2 and age_in_years < 5:
            answers.append(0.50)
        elif age_in_years >= 5 and age_in_years < 7:
            answers.append(0.75)
        else:
            answers.append(1.00)

    def sexConversion(sex):
        if sex == 'Male':
            answers.append(1.00)
        else:
            answers.append(0.00)

    def contactWithOtherPetsConversion(contactWithOtherPets):
        if contactWithOtherPets == 'Yes':
            answers.append(1.00)
        else:
            answers.append(0.00)

    def dietConversion(diet):
        if diet == 'Processed':
            answers.append(1.00)
        elif diet == 'Mixed':
            answers.append(0.50)
        elif diet == 'natural':
            answers.append(0.00)

    def neuteredConversion(neutered):
        if neutered == True:
            answers.append(1.00)
        else:
            answers.append(0.00)

    def outdoorConversion(outdoor):
        if outdoor == True:
            answers.append(1.00)
        else:
            answers.append(0.00)

    ageConversion(age_in_years)
    sexConversion(sex)
    contactWithOtherPetsConversion(contactWithOtherPets)
    dietConversion(diet)
    neuteredConversion(neutered)
    outdoorConversion(outdoor)
    return answers

