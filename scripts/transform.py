import pandas as pd
import numpy as np
import json 

# import csv log into data frame
data = pd.read_csv('~/Documents/GitHub/feed-curator/data/data_model_MVP.csv')
data = data.dropna()
data = data.drop_duplicates()
data_json = data.to_json('~/Documents/GitHub/feed-curator/data/data_model_MVP.json', orient='records')

print(data)


# create conditions lists for media
conditions = [
  (data['level'] == 'Beginner'),
  (data['level'] == 'Intermediate'),
  (data['level'] == 'Advanced')
]

# create a list of the values we want to assign for each condition
values = [1,2,3]

# create a new column and use np.select to assign values to it using our lists as arguments
data['levelNum'] = np.select(conditions, values)
data['id'] = np.arange(data.shape[0])

### Domain JSON Objects

dataIndustry = data[data['domain'] == 'Industry']
dataIndustry = dataIndustry.sort_values(by=['levelNum'])
dataIndustry_json = dataIndustry.to_json('~/Documents/GitHub/feed-curator/data/dataIndustry_model_MVP.json', orient='records')

dataAnalyze = data[data['domain'] == 'Analyze']
dataAnalyze = dataAnalyze.sort_values(by=['levelNum'])
dataAnalyze_json = dataAnalyze.to_json('~/Documents/GitHub/feed-curator/data/dataAnalyze_model_MVP.json', orient='records')

dataVisualize = data[data['domain'] == 'Visualize']
dataVisualize = dataVisualize.sort_values(by=['levelNum'])
dataVisualize = dataVisualize.to_json('~/Documents/GitHub/feed-curator/data/dataVisualize_model_MVP.json', orient='records')

dataModel = data[data['domain'] == 'Model']
dataModel = dataModel.sort_values(by=['levelNum'])
dataModel = dataModel.to_json('~/Documents/GitHub/feed-curator/data/dataModel_model_MVP.json', orient='records')

dataDeploy = data[data['domain'] == 'Deploy']
dataDeploy = dataDeploy.sort_values(by=['levelNum'])
dataDeploy = dataDeploy.to_json('~/Documents/GitHub/feed-curator/data/dataDeploy_model_MVP.json', orient='records')
