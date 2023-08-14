import sys
sys.path.append('../../')
from datetime import date

DiseaseRules =  {
    'Urethal Obstruction': {
    			# No, prob not, dont know, prob, yes
    		   'Frequent Urination' : [0, 0, 0, 0, 1],
               'Blood in Urine' : [0, 0, 0, 0, 1],
               'Painful Urination' : [0, 0, 0, 0, 1],
               'Licking Genital Area' : [0, 0, 0, 0, 1],
               'Lethargy and Weakness' : [0, 0, 0, 0, 1],
               'Straining to Urinate' : [0, 0, 0, 0, 1],
               'Abdominal Pain' : [0, 0, 0, 0, 1],
               'Vomiting and Nausea' : [0, 0, 0, 0, 1],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [1, 0, 0, 0, 0],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 0, 0, 1],
               'Weight loss' : [0, 0, 1, 0, 0],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 1, 0, 0],
               'Intense itching and scratching' : [0, 0, 1, 0, 0],
               'Hair loss or thinning of fur' : [0, 0, 1, 0, 0],
               'Formation of small raised bumps or pustules' : [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 1, 0, 0],
               'Restlessness and Agitation' : [0, 0, 0, 0, 1],
               'Over-Grooming' : [0, 0, 1, 0, 0],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 1, 0, 0],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [0, 1, 1, 1, 1],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 0, 0, 1],
               'Outdoor': [0, 0, 1, 0, 0],
               'Contact with other pets': [0, 0, 1, 0, 0],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [1, 1, 0, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Feline Lower Urinary Tract Disease': {
    		   'Frequent Urination' : [0, 0, 0, 0, 1],
               'Blood in Urine' : [0, 0, 0, 0, 1],
               'Painful Urination' : [0, 0, 0, 0, 1],
               'Licking Genital Area' : [0, 0, 0, 0, 1],
               'Lethargy and Weakness' : [0, 0, 0, 0, 1],
               'Straining to Urinate' : [0, 0, 0, 0, 1],
               'Abdominal Pain' : [0, 0, 1, 0, 0],
               'Vomiting and Nausea' : [0, 0, 1, 0, 0],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 1, 0, 0],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 1, 0, 0],
               'Weight loss' : [0, 0, 1, 0, 0],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 1, 0, 0],
               'Intense itching and scratching' : [0, 0, 1, 0, 0],
               'Hair loss or thinning of fur' : [0, 0, 1, 0, 0],
               'Formation of small raised bumps or pustules' : [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 1, 0, 0],
               'Restlessness and Agitation' : [0, 0, 0, 0, 1],
               'Over-Grooming' : [0, 0, 1, 0, 0],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 1, 0, 0],
               'Overweight': [0, 0, 0, 0, 1],
               'Age': [0, 1, 1, 1, 1],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [0, 0, 1, 0, 0],
               'Contact with other pets': [0, 0, 1, 0, 0],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [0, 0, 1, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Renal Disease': {
    		   'Frequent Urination' : [0, 0, 0, 0, 1],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 0, 0, 1],
               'Straining to Urinate' : [1, 0, 0, 0, 0],
               'Abdominal Pain' : [1, 0, 0, 0, 0],
               'Vomiting and Nausea' : [0, 0, 0, 0, 1],
               'Polydipsia' : [0, 0, 0, 0, 1],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 0, 0, 1],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 0, 0, 1],
               'Weight loss' : [0, 0, 0, 0, 1],
               'PotBellied Appearance' : [0, 0, 0, 0, 1],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 1, 0, 0],
               'Intense itching and scratching' : [0, 0, 1, 0, 0],
               'Hair loss or thinning of fur' : [0, 0, 1, 0, 0],
               'Formation of small raised bumps or pustules': [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 1, 0, 0],
               'Restlessness and Agitation' : [0, 0, 1, 0, 0],
               'Over-Grooming' : [0, 0, 1, 0, 0],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 1, 0, 0],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [0, 0, 0, 1, 1],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [0, 0, 1, 0, 0],
               'Contact with other pets': [0, 0, 1, 0, 0],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [1, 0, 0, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Luxation': {
    		   'Frequent Urination' : [0, 0, 1, 0, 0],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 1, 0, 0],
               'Straining to Urinate' : [0, 0, 1, 0, 0],
               'Abdominal Pain' : [0, 0, 1, 0, 0],
               'Vomiting and Nausea' : [0, 0, 1, 0, 0],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 0, 0, 1],
               'Swelling members' : [0, 0, 0, 0, 1],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 0, 0, 1],
               'Weight loss' : [0, 0, 1, 0, 0],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 1, 0, 0],
               'Intense itching and scratching' : [0, 0, 1, 0, 0],
               'Hair loss or thinning of fur' : [0, 0, 1, 0, 0],
               'Formation of small raised bumps or pustules' : [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 1, 0, 0],
               'Restlessness and Agitation' : [0, 0, 1, 0, 0],
               'Over-Grooming' : [0, 0, 1, 0, 0],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 0, 0, 0],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [0, 0, 0, 0, 0],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [1, 0, 0, 0, 0],
               'Contact with other pets': [0, 0, 0, 0, 1],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [0, 0, 0, 0, 1],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Panleukopenia': {
    		   'Frequent Urination' : [0, 0, 1, 0, 0],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 0, 0, 1],
               'Straining to Urinate' : [0, 0, 1, 0, 0],
               'Abdominal Pain' : [0, 0, 0, 0, 1],
               'Vomiting and Nausea' : [0, 0, 0, 0, 1],
               'Polydipsia' : [0, 0, 0, 0, 1],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 1, 0, 0],
               'Fever' : [0, 0, 0, 0, 1],
               'Loss Appetite' : [0, 0, 0, 0, 1],
               'Weight loss' : [0, 0, 0, 0, 1],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 0, 0, 1],
               'Constipation' : [1, 0, 0, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 1, 0, 0],
               'Intense itching and scratching' : [0, 0, 1, 0, 0],
               'Hair loss or thinning of fur' : [0, 0, 1, 0, 0],
               'Formation of small raised bumps or pustules' : [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 0, 0, 1],
               'Restlessness and Agitation' : [0, 0, 1, 0, 0],
               'Over-Grooming' : [0, 0, 1, 0, 0],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 1, 0, 0],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [1, 1, 0, 0, 0],
               'Vaccination updated': [1, 0, 0, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [1, 0, 0, 0, 0],
               'Contact with other pets': [0, 0, 0, 0, 1],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [0, 0, 0, 0, 1],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Intestinal Parasites': {
    		   'Frequent Urination' : [0, 0, 1, 0, 0],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 0, 0, 1],
               'Straining to Urinate' : [0, 0, 1, 0, 0],
               'Abdominal Pain' : [0, 0, 0, 0, 1],
               'Vomiting and Nausea' : [0, 0, 1, 0, 0],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 1, 0, 0],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 1, 0, 0],
               'Weight loss' : [0, 0, 0, 0, 1],
               'PotBellied Appearance' : [0, 0, 0, 0, 1],
               'Diarrhea' : [0, 0, 0, 0, 1],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 0, 0, 1],
               'Anal Itching or Scooting' : [0, 0, 0, 0, 1],
               'Intense itching and scratching' : [0, 0, 1, 0, 0],
               'Hair loss or thinning of fur' : [0, 0, 1, 0, 0],
               'Formation of small raised bumps or pustules' : [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 0, 0, 1],
               'Restlessness and Agitation' : [0, 0, 1, 0, 0],
               'Over-Grooming' : [0, 0, 1, 0, 0],
               'Presence of fleas' : [0, 0, 0, 0, 1],
               'Ear Infection' : [0, 0, 1, 0, 0],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [1, 1, 0, 0, 0],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [1, 0, 0, 0, 0],
               'Contact with other pets': [0, 0, 1, 0, 0],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [0, 0, 1, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Hairball Obstruction': {
    		   'Frequent Urination' : [0, 0, 1, 0, 0],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 0, 0, 1],
               'Straining to Urinate' : [0, 0, 1, 0, 0],
               'Abdominal Pain' : [0, 0, 0, 0, 1],
               'Vomiting and Nausea' : [0, 0, 0, 0, 1],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 1, 0, 0],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 0, 0, 1],
               'Weight loss' : [0, 0, 0, 0, 1],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 0, 0, 1],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 1, 0, 0],
               'Intense itching and scratching' : [0, 0, 1, 0, 0],
               'Hair loss or thinning of fur' : [0, 0, 1, 0, 0],
               'Formation of small raised bumps or pustules' : [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 0, 0, 1],
               'Restlessness and Agitation' : [0, 0, 1, 0, 0],
               'Over-Grooming' : [0, 0, 0, 0, 1],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 1, 0, 0],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [0, 0, 1, 1, 1],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [0, 0, 1, 0, 0],
               'Contact with other pets': [0, 0, 1, 0, 0],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [1, 0, 0, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Scabies': {
    		   'Frequent Urination' : [0, 0, 1, 0, 0],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 1, 0, 0],
               'Straining to Urinate' : [0, 0, 1, 0, 0],
               'Abdominal Pain' : [0, 0, 1, 0, 0],
               'Vomiting and Nausea' : [0, 0, 1, 0, 0],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 1, 0, 0],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 1, 0, 0],
               'Weight loss' : [0, 0, 1, 0, 0],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 1, 0, 0],
               'Intense itching and scratching' : [0, 0, 0, 0, 1],
               'Hair loss or thinning of fur' : [0, 0, 0, 0, 1],
               'Formation of small raised bumps or pustules' : [0, 0, 1, 0, 0],
               'Irritated or weepy eyes' : [0, 0, 0, 0, 1],
               'Restlessness and Agitation' : [0, 0, 0, 0, 1],
               'Over-Grooming' : [0, 0, 0, 0, 1],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 0, 0, 1],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [1, 1, 0, 0, 0],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [1, 0, 0, 0, 0],
               'Contact with other pets': [0, 0, 0, 0, 1],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [0, 0, 1, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Flea Allergy': {
    		   'Frequent Urination' : [0, 0, 1, 0, 0],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 1, 0, 0],
               'Straining to Urinate' : [0, 0, 1, 0, 0],
               'Abdominal Pain' : [0, 0, 1, 0, 0],
               'Vomiting and Nausea' : [0, 0, 1, 0, 0],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 1, 0, 0],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 1, 0, 0],
               'Weight loss' : [0, 0, 1, 0, 0],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 0, 0, 1],
               'Intense itching and scratching' : [0, 0, 0, 0, 1],
               'Hair loss or thinning of fur' : [0, 0, 0, 0, 1],
               'Formation of small raised bumps or pustules' : [0, 0, 0, 0, 1],
               'Irritated or weepy eyes' : [0, 0, 1, 0, 0],
               'Restlessness and Agitation' : [0, 0, 1, 0, 0],
               'Over-Grooming' : [0, 0, 0, 0, 1],
               'Presence of fleas' : [0, 0, 0, 0, 1],
               'Ear Infection' : [0, 0, 1, 0, 0],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [0, 0, 1, 1, 1],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [0, 0, 1, 0, 0],
               'Contact with other pets': [0, 0, 1, 0, 0],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [0, 0, 1, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
    'Atopic Dermatitis': {
    		   'Frequent Urination' : [0, 0, 1, 0, 0],
               'Blood in Urine' : [0, 0, 1, 0, 0],
               'Painful Urination' : [0, 0, 1, 0, 0],
               'Licking Genital Area' : [0, 0, 1, 0, 0],
               'Lethargy and Weakness' : [0, 0, 1, 0, 0],
               'Straining to Urinate' : [0, 0, 1, 0, 0],
               'Abdominal Pain' : [0, 0, 1, 0, 0],
               'Vomiting and Nausea' : [0, 0, 1, 0, 0],
               'Polydipsia' : [0, 0, 1, 0, 0],
               'Limping' : [0, 0, 1, 0, 0],
               'Swelling members' : [0, 0, 1, 0, 0],
               'Fever' : [0, 0, 1, 0, 0],
               'Loss Appetite' : [0, 0, 1, 0, 0],
               'Weight loss' : [0, 0, 1, 0, 0],
               'PotBellied Appearance' : [0, 0, 1, 0, 0],
               'Diarrhea' : [0, 0, 1, 0, 0],
               'Constipation' : [0, 0, 1, 0, 0],
               'Visible Worms' : [0, 0, 1, 0, 0],
               'Anal Itching or Scooting' : [0, 0, 0, 0, 1],
               'Intense itching and scratching' : [0, 0, 0, 0, 1],
               'Hair loss or thinning of fur' : [0, 0, 0, 0, 1],
               'Formation of small raised bumps or pustules' : [0, 0, 0, 0, 1],
               'Irritated or weepy eyes' : [0, 0, 0, 0, 1],
               'Restlessness and Agitation' : [0, 0, 1, 0, 0],
               'Over-Grooming' : [0, 0, 1, 0, 0],
               'Presence of fleas' : [0, 0, 1, 0, 0],
               'Ear Infection' : [0, 0, 0, 0, 1],
               'Overweight': [0, 0, 1, 0, 0],
               'Age': [0, 0, 1, 1, 0],
               'Vaccination updated': [0, 0, 1, 0, 0],
               'Male': [0, 0, 1, 0, 0],
               'Outdoor': [0, 0, 1, 0, 0],
               'Contact with other pets': [0, 0, 1, 0, 0],
               'Neutered': [0, 0, 1, 0, 0],
               'Start of the symptoms': [1, 0, 0, 0, 0],
               'Processed Diet': [0, 0, 1, 0, 0],

    },
}

DicSym = {
    'Frequent Urination' : 1,
    'Blood in Urine' : 2,
    'Painful Urination' : 3,
    'Licking Genital Area' : 4,
    'Lethargy and Weakness' : 5,
    'Straining to Urinate' : 6,
    'Abdominal Pain' : 7,
    'Vomiting and Nausea' : 8,
    'Polydipsia' : 9,
    'Limping' : 10,
    'Swelling members' : 11,
    'Fever' : 12,
    'Loss Appetite' : 13,
    'Weight loss' : 14,
    'PotBellied Appearance' : 15,
    'Diarrhea' : 16,
    'Constipation' : 17,
    'Visible Worms' : 18,
    'Anal Itching or Scooting' : 19,
    'Intense itching and scratching' : 20,
    'Hair loss or thinning of fur' : 21,
    'Formation of small raised bumps or pustules' : 22,
    'Irritated or weepy eyes' : 23,
    'Restlessness and Agitation' : 24,
    'Over-Grooming' : 25,
    'Ear Infection' : 26,
    'Presence of fleas' : 27,
    'Overweight' : 28,
    'Age' : 29,
    'Vaccination updated' : 30,
    'Male' : 31,
    'Outdoor' : 32,
    'Contact with other pets' : 33,
    'Neutered' : 34,
    'Start of the symptoms' : 35,
    'Processed Diet' : 36,
}

DicDis ={
'Urethal Obstruction': 1,
'Feline Lower Urinary Tract Disease': 2,
'Renal Disease': 3,
'Luxation': 4,
'Panleukopenia': 5,
'Intestinal Parasites': 6,
'Hairball Obstruction': 7,
'Scabies': 8,
'Flea Allergy': 9,
'Atopic Dermatitis': 10
}

variables_to_insert = [
                {'name':'Frequent Urination' ,  'question': 'Is your cat going to the litter more than usual?', 'specialty':['Urinary'], 'default': False},
                {'name':'Blood in Urine' ,  'question':'Have you noticed any blood in your cat\'s urine?', 'specialty':['Urinary'], 'default': False},
                {'name':'Painful Urination' ,  'question':'Does your cat seem to experience discomfort while urinating?', 'specialty':['Urinary'], 'default': False},
                {'name':'Licking Genital Area' ,  'question':'Is your cat excessively licking its genital area?', 'specialty':['Urinary', 'Gastrointestinal'], 'default': False},
                {'name':'Lethargy and Weakness' ,  'question':'Has your cat been less active or weaker than usual?', 'specialty':['Urinary'], 'default': False},
                {'name':'Straining to Urinate' ,  'question':'Does your cat struggle or show difficulty when trying to urinate?', 'specialty':['Urinary', 'Gastrointestinal'], 'default': False},
                {'name':'Abdominal Pain' ,  'question':'Has your cat displayed signs of abdominal pain?', 'specialty':['Urinary', 'Gastrointestinal'], 'default': False},
                {'name':'Vomiting and Nausea' ,  'question':'Is your cat vomiting or showing signs of nausea?', 'specialty':['Urinary', 'Gastrointestinal'], 'default': False},
                {'name':'Polydipsia' ,  'question':'Have you observed your cat drinking more water than usual?', 'specialty':['Urinary'], 'default': False},
                {'name':'Limping' ,  'question':'Is your cat limping or favoring any particular leg?', 'specialty':['Musculoskeletal'], 'default': False},
                {'name':'Swelling members' ,  'question':'Does your cat have swollen limbs?', 'specialty':['Urinary', 'Muskuloskeletal'], 'default': False},
                {'name':'Fever' , 'question':'Does your cat\'s body temperature seem elevated?', 'specialty':['Urinary' ,'Gastrointestinal'], 'default': False},
                {'name':'Loss Appetite' ,  'question':'Is your cat eating less food than usual?', 'specialty':['Urinary' ,'Gastrointestinal'], 'default': False},
                {'name':'Weight loss' ,  'question':'Have you noticed your cat losing weight?', 'specialty':['Urinary','Gastrointestinal'], 'default': False},
                {'name':'PotBellied Appearance' ,  'question':'Is your cat\'s belly visibly swollen or distended?', 'specialty':['Gastrointestinal'], 'default': False},
                {'name':'Diarrhea' , 'question':'Are your cat\'s stools softer or looser?', 'specialty':['Gastrointestinal'], 'default': False},
                {'name':'Constipation' ,  'question':'Is your cat having difficulty passing stools or seems constipated?', 'specialty':['Gastrointestinal', 'Urinary'], 'default': False},
                {'name':'Visible Worms' ,  'question':'Have you seen any visible worms in your cat\'s stools?' , 'specialty':['Gastrointestinal', 'Dermatology'], 'default': False},
                {'name':'Anal Itching or Scooting' , 'question':'Is your cat showing signs of anal itching or scooting?', 'specialty':['Dermatology', 'Gastrointestinal'], 'default': False},
                {'name':'Intense itching and scratching' ,  'question':'Is your cat excessively itching; scratching; or showing signs of irritation?', 'specialty':['Dermatology'], 'default': False},
                {'name':'Hair loss or thinning of fur' ,  'question': 'Is your cat experiencing hair loss or thinning fur?', 'specialty':['Dermatology'], 'default': False},
                {'name':'Formation of small raised bumps or pustules',  'question':'Have you noticed any wounds or pimples on your cat\'s skin?', 'specialty':['Dermatology'], 'default': False},
                {'name':'Irritated or weepy eyes' ,  'question': 'Are your cat\'s eyes irritated or producing excessive tears?', 'specialty':['Dermatology', 'Gastrointestinal'], 'default': False},
                {'name':'Restlessness and Agitation' ,  'question':'Is your cat unusually restless or agitated?', 'specialty':['Dermatology', 'Urinary'], 'default': False},
                {'name':'Over-Grooming' ,  'question':'Does your cat excessively groom or lick itself?', 'specialty':['Dermatology', 'Gastrointestinal'], 'default': False},
                {'name':'Ear Infection' ,  'question':'Is your cat\'s ear showing signs of infection?', 'specialty':['Dermatology'], 'default': False},
                {'name':'Presence of fleas' ,  'question':'Have you observed any fleas on your cat? Even if it was a while ago.', 'specialty':['Dermatology'], 'default': False},
                {'name':'Overweight' ,  'question':'Is your cat overweight?', 'specialty':['General'], 'default': False},
                {'name':'Age',  'question':'How old are your cat?', 'specialty':['General'], 'default': True},
                {'name':'Vaccination updated' ,  'question':'Are your cat\'s vaccinations up-to-date?', 'specialty':['General'], 'default': False},
                {'name':'Male' ,  'question':'Is your cat male?', 'specialty':['General'], 'default': True},
                {'name':'Outdoor' ,  'question':'Does your cat goes outside?', 'specialty':['General'], 'default': True},
                {'name':'Contact with other pets' ,  'question':'Does your cat have contact with other pets?', 'specialty':['General'], 'default': True},
                {'name':'Neutered' ,  'question':'Is your cat neutered?', 'specialty':['General'], 'default': True},
                {'name':'Start of the symptoms',  'question':'When did you first notice these symptoms in your cat?', 'specialty':['General'], 'default': False},
                {'name':'Processed Diet' ,  'question':'Does your cat eat processed food?', 'specialty':['General'], 'default': True},                
              ]


diseases_to_insert = [
                {'name': 'Urethal Obstruction', 'specialty': 'Urinary', 'description': 'A blockage in the urethra that can cause difficulty urinating and other urinary issues.'},
                {'name': 'Feline Lower Urinary Tract Disease', 'specialty': 'Urinary', 'description': 'A group of conditions affecting the lower urinary tract; often causing discomfort and frequent urination.'},
                {'name': 'Renal Disease', 'specialty': 'Urinary', 'description': 'Chronic kidney disease that impairs the kidney function and can lead to various symptoms and complications.'},
                {'name': 'Luxation', 'specialty': 'Musculoskeletal', 'description': 'Dislocation or displacement of a joint; causing pain and mobility issues.'},
                {'name': 'Panleukopenia', 'specialty': 'Gastrointestinal', 'description': 'A highly contagious viral disease that affects the gastrointestinal tract and immune system.'},
                {'name': 'Intestinal Parasites', 'specialty': 'Gastrointestinal', 'description': 'Infections caused by various parasites that affect the gastrointestinal system.'},
                {'name': 'Hairball Obstruction', 'specialty': 'Gastrointestinal', 'description': 'Accumulation of hair in the stomach or intestines; causing blockages and discomfort.'},
                {'name': 'Scabies', 'specialty': 'Dermatology', 'description': 'A skin infestation caused by mites; leading to intense itching and skin irritation.'},
                {'name': 'Flea Allergy', 'specialty': 'Dermatology', 'description': 'An allergic reaction to flea bites; causing skin inflammation and discomfort.'},
                {'name': 'Atopic Dermatitis', 'specialty': 'Dermatology', 'description': 'Chronic skin inflammation and itching caused by allergic reactions to environmental factors.'}
            ]

users_to_insert = [

    {'first_name':'John', 'last_name':'Doe', 'email':'john@example.com', 'password':'hashed_password_1', 'dob': date(1990, 5, 15), 'appointment_history' : '????'},
    {'first_name':'Jane', 'last_name':'Smith', 'email':'jane@example.com', 'password':'hashed_password_2', 'dob': date(1990, 5, 15), 'appointment_history' : '????'},
    {'first_name':'Alice','last_name':'Johnson', 'email':'alice@example.com', 'password':'hashed_password_3', 'dob': date(1990, 5, 15), 'appointment_history' : '????'}
]

pets_to_insert = [
    {'user_id':1, 'name':'Buddy', 'dob':date(2019, 5, 15), 'breed':'Labrador', 'outdoor':True, 'neutered':True, 'sex':'Male', 'diet':'Processed', 'contactWithOtherPets': True},
    {'user_id':2, 'name':'Luna', 'dob':date(2020, 2, 10), 'breed':'Siamese', 'outdoor':False, 'neutered':False, 'sex':'Female', 'diet':'Mixed', 'contactWithOtherPets': False},
    {'user_id':3, 'name':'Max', 'dob':date(2018, 9, 3), 'breed':'Golden Retriever', 'outdoor':True, 'neutered':False, 'sex':'Male', 'diet':'Natural', 'contactWithOtherPets': False}
    ]

file = open("DiseasesVariables.csv", 'w')
file.write('id,feature,question,specialty,defaultQuestion\n')
for idx, variables in enumerate(variables_to_insert, start=1):
    string = str(idx) + ","
    for key, value in variables.items():        
        if key == 'specialty':
            for i in range(len(value)):                
                if i == len(value) - 1:
                    string += str(value[i]) + ","
                else:
                    string += str(value[i]) + ";"
        else:
            string += str(value) + ","

    final_string = string[:-1]
    final_string += '\n'
    file.write(final_string)
file.close() 

file = open("DiseaseRules.csv", 'w')
file.write('id,disease_id,diseasesVariables_id,no,probablyNot,iDontKnow,probablyYes,yes\n')
idx = 1
for disease, symptoms in DiseaseRules.items():    
    for symptom, values in symptoms.items():            
        string = str(idx) + "," + str(DicDis[disease]) + "," + str(DicSym[symptom]) + "," + str(values[0]) + "," + str(values[1]) + "," + str(values[2]) + "," + str(values[3]) + "," + str(values[4]) + "\n"
        idx+=1        
        file.write(string)
file.close()

file = open("Diseases.csv", 'w')
file.write('id,name,specialty,description\n')
for idx, disease in enumerate(diseases_to_insert, start=1):
    string = str(idx) + "," + disease['name'] + "," + disease['specialty'] + "," + disease['description'] + "\n"         
    file.write(string)
file.close()

file = open("Pets.csv", 'w')
file.write('id,user_id,name,dob,breed,outdoor,neutered,sex,diet,contactWithOtherPets\n')
for idx, pet in enumerate(pets_to_insert, start=1):
    string = str(idx) + "," + str(pet['user_id']) + "," + pet['name'] + "," + str(pet['dob']) + "," + pet['breed'] + "," + str(pet['outdoor']) + "," + str(pet['neutered']) + "," + pet['sex'] + "," + pet['diet'] + "," + str(pet['contactWithOtherPets']) + "\n"         
    file.write(string)
file.close()

file = open("Users.csv", 'w')
file.write('id,first_name,last_name,email,password,dob,appointment_history\n')
for idx, user in enumerate(users_to_insert, start=1):
    string = str(idx) + "," + user['first_name'] + "," + user['last_name'] + "," + user['email']+ "," + user['password'] + "," + str(user['dob']) + "," + user['appointment_history'] + "\n"         
    file.write(string)
file.close()
