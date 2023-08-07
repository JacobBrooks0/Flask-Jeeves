def CalculateProbabilites(Diseases, DiseaseRules, QuestionsSoFar, AnswersSoFar):

    # Calculating the Disease Likelihood for all Diseases
    DisLikelihood = {}
    for dis in range(len(Diseases)):
        DisLikelihood[Diseases[dis]['name']] =  1.0
        for ans in range(len(AnswersSoFar)):
            # print("Disease:", Diseases[dis]['name'], ", Question:", QuestionsSoFar[ans]['name'])
            LikeCalc = 0.0
            try:
                LikeCalc = CalculateAnswer(DiseaseRules[Diseases[dis]['name']][QuestionsSoFar[ans]['name']])
            except:
                LikeCalc = 0.5
            DisLikelihood[Diseases[dis]['name']] *= max( 0.01, 1.0 - abs( LikeCalc - AnswersSoFar[ans] ) )
            # print("P_Likelihood", DisLikelihood[Diseases[dis]['name']], ",", Diseases[dis]['name'], ",", QuestionsSoFar[ans]['name'], "Correct Answer: ", DiseaseRules[Diseases[dis]['name']][QuestionsSoFar[ans]['name']], "AnswersSoFar", AnswersSoFar[ans])

    ProbabilitiesList = []
    for dis in Diseases:
        ProbabilitiesList.append({
            'name': dis['name'],
            'probability': CalculateDiseaseProbability(dis, Diseases, DisLikelihood, DiseaseRules, QuestionsSoFar, AnswersSoFar)
        })

    return ProbabilitiesList

def CalculateAnswer(AnswerCounts):
    if sum(AnswerCounts) == 0.0:
        # Disease nor cataloged yet.
        return 0.5

    AvgAnswer = AnswerCounts[0]*0.00 + AnswerCounts[1]*0.25 + AnswerCounts[2]*0.50 + AnswerCounts[3]*0.75 + AnswerCounts[4]*1.0
    AvgAnswer /= sum(AnswerCounts)
    return AvgAnswer

def CalculateDiseaseProbability(GivenDisease, Diseases, DisLikelihood, DiseaseRules, QuestionsSoFar, AnswersSoFar):
    # Bayesian Classifier Algorithm (http://cs.wellesley.edu/~anderson/writing/naive-bayes.pdf)
    # We want to calculate the probability of the GivenDisease be the correct, given the
    # likelihood between the answers and the the expected answers for that disease.
    # Using the Bayes Theorem:
    # P(GivenDisease|AnswersSoFar) = P_GivenDisease*Prod( P_Likelihood )
    #                                ----------------------------------
    #              P_GivenDisease*Prod( P_Likelihood ) + (1 - P_GivenDisease)*Prod( P_NonLikelihood )
    # Where Prod is the productory function

    # Probability of a random disease being the correct one
    P_Disease = 1 / len(Diseases)

    P_Likelihood = DisLikelihood[GivenDisease['name']]

    P_AvgNonLikelihood = 0.0
    for ans in range(len(Diseases)):
        if Diseases[ans]['name'] != GivenDisease['name']:
            P_AvgNonLikelihood += DisLikelihood[Diseases[ans]['name']]
    P_AvgNonLikelihood /= ( len(Diseases) - 1.0 )
    P_AvgNonLikelihood = max(P_AvgNonLikelihood, 0.01)

    # Bayes Theorem
    P_Bayes = P_Disease*P_Likelihood / ( P_Disease*P_Likelihood + (1.0 - P_Disease)*P_AvgNonLikelihood )
    return P_Bayes
