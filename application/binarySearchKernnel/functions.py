
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
    answers = []

    def ageConversion(age):
        if age < 1:
            answers.append(0.00)
        elif age >= 1 and age < 2:
            answers.append(0.25)
        elif age >= 2 and age < 5:
            answers.append(0.50)
        elif age >= 5 and age < 7:
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
        if neutered == 'Yes':
            answers.append(1.00)
        else:
            answers.append(0.00)

    def outdoorConversion(outdoor):
        if outdoor == 'Yes':
            answers.append(1.00)
        else:
            answers.append(0.00)

    ageConversion(age)
    sexConversion(sex)
    contactWithOtherPetsConversion(contactWithOtherPets)
    dietConversion(diet)
    neuteredConversion(neutered)
    outdoorConversion(outdoor)
    return answers

