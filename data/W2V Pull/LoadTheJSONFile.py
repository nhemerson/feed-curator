# -*- coding: utf-8 -*-
"""
Created on Mon Jan 18 09:42:00 2021

@author: KXE2732


Read the CSV file and load it.
"""

import json

from pandas import DataFrame
#C:\Users\kxe2732\Documents\GitHub\feed-curator\data

# read file
with open('C:\\Users\\kxe2732\\Documents\\GitHub\\feed-curator\\data\\data_model_MVP.json', 'r') as myfile:
    data=myfile.read()

# parse file
obj = json.loads(data)

df = DataFrame(obj)

sample = df['url'][1]
url = sample
print(url)

from requests import get
from csv import DictReader
from bs4 import BeautifulSoup as Soup
from datetime import date
from io import StringIO


def getbody(url):
    hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
         'Referer': 'https://cssspritegenerator.com',
         'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
         'Accept-Encoding': 'none',
         'Accept-Language': 'en-US,en;q=0.8',
         'Connection': 'keep-alive'}

    #url = BASE_URL.format(security=symbol, start_date=start, end_date=end)
    d = get(url, headers=hdr)
    soup = Soup(d.content, 'html.parser')
    #partsoup = soup.find('<body>')
    pretty = soup.prettify()

    start = pretty.index('<body>')
    end = pretty.index('</body>')

    #slice out only the important parts
    trimpretty = pretty[start:end]

    #payload = soup.find('div', {'id': 'csvContentDiv'}).text.replace(':', '\n')
    #csv = DictReader(StringIO(payload))
    return trimpretty
#    for row in csv:
#        print({k:v.strip() for k, v in row.items()})


#get a trimmed example
test = getbody(sample)
#fullbody = getbody(url)






























import urllib.request, urllib.error, urllib.parse

url = sample
'''
hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}
'''
#url = 'test'

import urllib.request

user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'

url = sample#"http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers"
headers={'User-Agent':user_agent,}

request=urllib.request.Request(url,None,headers) #The assembled request
response = urllib.request.urlopen(request)
data = response.read() # The data u need




#req = urllib.request.urlopen(url,headers=hdr)
#try:
    #page = urllib2.urlopen(req)
#except urllib2.HTTPError, e:
    #print e.fp.read()

content = page.read()
print content

webContent = response.read()

f = open('obo-t17800628-33.html', 'wb')
f.write(webContent)
f.close