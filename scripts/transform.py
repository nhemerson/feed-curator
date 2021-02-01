import pandas as pd
import numpy as np
import json 

# import csv log into data frame
data = pd.read_csv('~/Documents/GitHub/feed-curator/data/data_model_MVP.csv')
data_json = data.to_json('~/Documents/GitHub/feed-curator/data/data_model_MVP.json', orient='records')
print(data)

dataIndustry = data[data['domain'] == 'Industry']
dataIndustry = dataIndustry.sort_values(by=['levelNum'])
dataIndustry_json = dataIndustry.to_json('~/Documents/GitHub/feed-curator/data/dataIndustry_model_MVP.json', orient='records')

### Domain JSON Objects

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


### Media JSON Objects

dataArticle = data[data['media'] == 'Article']
dataArticle = dataArticle.sort_values(by=['levelNum'])
dataArticle_json = dataArticle.to_json('~/Documents/GitHub/feed-curator/data/dataArticle_model_MVP.json', orient='records')

dataVideo = data[data['media'] == 'Video']
dataVideo = dataVideo.sort_values(by=['levelNum'])
dataVideo_json = dataVideo.to_json('~/Documents/GitHub/feed-curator/data/dataVideo_model_MVP.json', orient='records')


### Level JSON Objects

dataBeginner = data[data['level'] == 'Beginner']
dataBeginner = dataBeginner.sort_values(by=['domainNum'])
dataBeginnere_json = dataBeginner.to_json('~/Documents/GitHub/feed-curator/data/dataBeginner_model_MVP.json', orient='records')

dataIntermediate = data[data['level'] == 'Intermediate']
dataIntermediate = dataIntermediate.sort_values(by=['domainNum'])
dataIntermediate_json = dataIntermediate.to_json('~/Documents/GitHub/feed-curator/data/dataIntermediate_model_MVP.json', orient='records')

dataAdvanced = data[data['level'] == 'Advanced']
dataAdvanced = dataAdvanced.sort_values(by=['domainNum'])
dataAdvanced_json = dataAdvanced.to_json('~/Documents/GitHub/feed-curator/data/dataAdvanced_model_MVP.json', orient='records')


