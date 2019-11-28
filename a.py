from bs4 import BeautifulSoup
import requests

symbol = "M"

def get_data(symbol):
    keyurl = 'https://finance.yahoo.com/quote/'+symbol
    r = requests.get(keyurl)
    soup = BeautifulSoup(r.text, features="lxml")
    table = soup.find(id="quote-summary")
    tr=table.find_all("td")
    td = [t.text for t in tr]
    print(td)
    print(td[1])
    stockdict={td[i]:td[i+1] for i in range(0,len(td),2)}
    print(stockdict)

def static_data(symbol):
    keyurl = 'https://finance.yahoo.com/quote/'+symbol+"/key-statistics"
    r = requests.get(keyurl)
    soup = BeautifulSoup(r.text, features="lxml")
    tables=soup.find_all("td")
    td=[t.text.replace(" ","_") for t in tables]
    stockdict = {td[i]: td[i+1] for i in range(0, len(td), 2)}
    print(stockdict)

def div_his(symbol):
    keyurl = 'https://stocks.finance.yahoo.co.jp/us/profile/'+symbol
    r = requests.get(keyurl)
    soup = BeautifulSoup(r.text, features="lxml")
    tables = soup.find_all("tr")
    td = [t.text for t in tables]
    print(td[1].split("\n")[2])

if __name__ == '__main__':
    div_his(symbol)
