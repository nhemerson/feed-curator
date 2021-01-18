# -*- coding: utf-8 -*-
"""
Created on Mon Jan 18 09:36:29 2021

@author: KXE2732
"""


import pandas as pd
from pandas_gbq import gbq
import gensim
from gensim.models.doc2vec import Doc2Vec, TaggedDocument
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
import datetime

#############################
### Read the model ##########
modelname = 'D2V_Model04'
modelD = Doc2Vec.load('./' + modelname)


############################
## Read new quotes #########
############################



############### extract and tokenize text #####################
f = query_df.replace("\n", " ")
#f = f.sample(n=zamplezize)
f = pd.DataFrame(f['QuoteFullProductTextString'])
#f = pd.DataFrame(f['QuoteFullProductTextString'])
f = f['QuoteFullProductTextString'].apply(word_tokenize)
print('finished preprocessing text: ' + str(datetime.datetime.now()) )
########################################################


test = pd.DataFrame(f)
test2 = pd.DataFrame(query_df)
test2 = test2.drop('QuoteFullProductTextString',axis = 1)  # removes dupelicate column name

df_new = pd.concat([test,test2],axis=1, join = 'inner') #works and creates a simple table we'll use later


######### sampling for speed, comment out when done ###############
#df_new = df_new.sample(5)


my_dict2 = dict({})
z = 0
#my_dict2[1]= modelD.infer_vector(df_new.iloc[1,0])
for i in enumerate(df_new['QuoteFullProductTextString']):
  #Do something with vocab_obj.count
  #my_dict2[item]= modelD.infer_vector(df_new['QuoteFullProductTextString'])
  #print(df_new['QuoteFullProductTextString'].values)
  #print(item)
  my_dict2[z] = modelD.infer_vector( df_new['QuoteFullProductTextString'].iloc[z] )
  z= z+1
  if z % 10000 == 0: print(z)
  #print(z)

####### export to a dataframe
randoCnt1 = pd.DataFrame.from_dict([my_dict2])
randoCnt1 = randoCnt1.transpose()
#randoCnt2 = randoCnt1.sample(5)
#df_new = df_new.reset_index()
df_new_final = pd.concat([df_new,randoCnt1],axis=1, join = 'inner') #testing


################################
# squshing the data together
################################
final0 = df_new_final
final0 = final0.rename(columns ={0:'DocVector'})
#final1 = final0[['ProductId','tsne0','tsne1','tsne2']]
final0 = final0.drop('QuoteFullProductTextString', axis = 1)

print(final0.loc[final0['QuoteId'] == 9058711] )

final0test = final0.sample(5)
#####################################################
## Uploading to BQ with facts
#####################################################
# Re-Define Project ID
project_id = 'np-quotecenter'

# To load Data from CSV file (example)
#dataframe= pd.read_csv("./P2V_Model0_200000.csv")

#dataframe = dataframe[dataframe.SampleSize == zamplezize]

#Load dataframe to Big Query (example : load top10_github_query_df to BQ)
gbq.to_gbq(final0, 'temp_kxe.tbl_doc2vec_'+modelname, project_id, if_exists='append')
print(project_id + '.' + 'temp_kxe.tbl_doc2vec_'+modelname)






