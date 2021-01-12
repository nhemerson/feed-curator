import pandas as pd
import numpy as np
import json 

# import csv log into data frame
data = pd.read_csv('~/Documents/side_hustle/data/data_model_MVP.csv')
print(data)
data_json = data.to_json('~/Documents/GitHub/feed-curator/data_model_MVP.json', orient='records')