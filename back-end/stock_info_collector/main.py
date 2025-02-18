import requests
import pandas as pd
from sqlalchemy import create_engine
from datetime import datetime
import re

# 設定資料庫連接（以 MySQL 為例）
db_user = 'root'
db_password = '123456'
db_host = 'localhost:3306'
db_name = 'mydb'
db_table = 'stock_prices'

# 建立資料庫引擎
engine = create_engine(f'mariadb+mariadbconnector://{db_user}:{db_password}@{db_host}/{db_name}')

# 目標 URL
url = 'https://www.twse.com.tw/rwd/zh/afterTrading/STOCK_DAY_ALL?date=20250101&response=json'

# 發送 GET 請求
response = requests.get(url, verify=False)
data = response.json()

# 檢查回應狀態
if data['stat'] != 'OK':
    print("資料獲取失敗")
else:
    # 解析資料
    records = []
    print()
    trade_date = datetime.strptime(data['date'], '%Y%m%d').date()

    for item in data['data']:
        try:
          stock_code = item[0].strip()
          stock_name = item[1].strip()
          trade_date = trade_date
          volume = int(item[2].replace(',', ''))
          turnover = int(item[3].replace(',', ''))
          opening_price = float(item[4].replace(',', ''))
          highest_price = float(item[5].replace(',', ''))
          lowest_price = float(item[6].replace(',', ''))
          closing_price = float(item[7].replace(',', ''))

          raw_price_change = item[8].replace(',', '')
          if re.match(r'^[+-]?\d+(\.\d+)?$', raw_price_change):
              price_change = float(raw_price_change)
          else:
              price_change = 0.0
          price_change = price_change
          
          transaction_count = int(item[9].replace(',', ''))
        except ValueError:
          print(item)


        # 計算漲跌幅度
        price_change_percent = (price_change / (closing_price - price_change)) * 100 if (closing_price - price_change) else 0

        records.append({
            'trade_date': trade_date,
            'stock_code': stock_code,
            'stock_name': stock_name,
            'opening_price': opening_price,
            'highest_price': highest_price,
            'lowest_price': lowest_price,
            'closing_price': closing_price,
            'price_change': price_change,
            'price_change_percent': price_change_percent,
            'volume': volume,
            'turnover': turnover,
            'transaction_count': transaction_count
        })

    # 將資料轉換為 DataFrame
    df = pd.DataFrame(records)

    # 將資料寫入資料庫
    try:
        df.to_sql(db_table, con=engine, if_exists='append', index=False)
        print("資料寫入成功")
    except Exception as e:
        print(f"資料寫入失敗: {e}")
