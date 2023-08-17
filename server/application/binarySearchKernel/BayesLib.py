import numpy as np
import random as rd


def CalculateAnswer(AnswerCounts):
    if sum(AnswerCounts) == 0.0:
        # Disease nor cataloged yet.
        return 0.5

    AvgAnswer = (
        AnswerCounts[0] * 0.00
        + AnswerCounts[1] * 0.25
        + AnswerCounts[2] * 0.50
        + AnswerCounts[3] * 0.75
        + AnswerCounts[4] * 1.0
    )
    AvgAnswer /= sum(AnswerCounts)
    return AvgAnswer


class BayesLib:
    def __init__(self, allDiseasesVariables, allDiseases, allRules, maxIter):
        self.allDiseasesVariables = np.copy(allDiseasesVariables)
        self.allDiseases = np.copy(allDiseases)
        self.allRules = np.copy(allRules)
        self.maxIter = maxIter
        self.diseasesVariables_so_far = []
        self.answers_so_far = []
        self.Iter = 0

    def as_dict(self):
        return {
            "diseasesVariables_so_far": self.diseasesVariables_so_far,
            "answers_so_far": self.answers_so_far,
        }

    def setQuestionAnswer(self, variableID, answer):
        if type(variableID) == type(list()) or type(answer) == type(list()):
            if len(variableID) != len(answer):
                print("Error: List with different sizes.")

            for var in variableID:
                self.diseasesVariables_so_far.append(var)
            for ans in answer:
                self.answers_so_far.append(ans)
        else:
            self.diseasesVariables_so_far.append(variableID)
            self.answers_so_far.append(answer)

    def getRandomQuestions(self, falseVariableQuestions):
        # Start with a random algorithm
        randomQuestions = []
        idx = []
        while len(randomQuestions) < self.maxIter:
            question_Idx = rd.randint(0, len(falseVariableQuestions) - 1)
            print(question_Idx)
            if question_Idx not in idx:
                idx.append(question_Idx)
                randomQuestions.append(falseVariableQuestions[question_Idx])
        return randomQuestions

    def Solve(self):
        # Calculating Probabilities based on Bayes theorem
        probabilities = self.CalculateProbabilites()
        probabilities = sorted(probabilities, key=lambda d: d["Likelihood"])
        probabilities.reverse()
        return probabilities[:3]

    def CalculateProbabilites(self):
        # Calculating the Disease Likelihood for all Diseases
        DisLikelihood = np.ones(len(self.allDiseases) + 1)
        for dis in range(len(self.allDiseases)):
            for ans in range(len(self.answers_so_far)):
                LikeCalc = 0.0
                try:
                    LikeCalc = self.allRules[self.allDiseases[dis]][
                        self.diseasesVariables_so_far[ans]
                    ]
                except:
                    LikeCalc = 0.5
                DisLikelihood[self.allDiseases[dis]] *= max(
                    0.01, 1.0 - abs(LikeCalc - self.answers_so_far[ans])
                )

        ProbabilitiesList = []
        for dis in self.allDiseases:
            ProbabilitiesList.append(
                {
                    "disease_id": dis,
                    "Likelihood": self.CalculateDiseaseProbability(dis, DisLikelihood),
                }
            )

        return ProbabilitiesList

    def CalculateDiseaseProbability(self, GivenDisease, DisLikelihood):
        # Bayesian Classifier Algorithm (http://cs.wellesley.edu/~anderson/writing/naive-bayes.pdf)
        # We want to calculate the probability of the GivenDisease be the correct, given the
        # likelihood between the answers and the the expected answers for that disease.
        # Using the Bayes Theorem:
        # P(GivenDisease|AnswersSoFar) = P_GivenDisease*Prod( P_Likelihood )
        #                                ----------------------------------
        #              P_GivenDisease*Prod( P_Likelihood ) + (1 - P_GivenDisease)*Prod( P_NonLikelihood )
        # Where Prod is the productory function

        # Probability of a random disease being the correct one
        P_Disease = 1 / len(self.allDiseases)

        P_Likelihood = DisLikelihood[GivenDisease]

        P_AvgNonLikelihood = 0.0
        for ans in range(len(self.allDiseases)):
            if self.allDiseases[ans] != GivenDisease:
                P_AvgNonLikelihood += DisLikelihood[self.allDiseases[ans]]
        P_AvgNonLikelihood /= len(self.allDiseases) - 1.0
        P_AvgNonLikelihood = max(P_AvgNonLikelihood, 0.01)

        # Bayes Theorem
        P_Bayes = (
            P_Disease
            * P_Likelihood
            / (P_Disease * P_Likelihood + (1.0 - P_Disease) * P_AvgNonLikelihood)
        )
        return P_Bayes
