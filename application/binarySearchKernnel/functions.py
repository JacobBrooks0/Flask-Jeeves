
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




