---
title: 配当利回り{{a.Forward_Annual_Dividend_Yield_4}}!{{a.company}}の銘柄分析
date: {{date}}
type: blog
market: {{a.market}}
rakuten: true
sbi: true
manex: true
image: /img/{{date}}.png
---
この記事は、{{date}}現在の情報を元に記事を作成しています。

今回は、配当利回り{{a.Forward_Annual_Dividend_Yield_4}}%の{{a.company}}について個別銘柄分析を行っていきたいと思います。

## {{a.company}}とは？
{{a.company}}は、{{a.disc}}

## {{a.company}}の投資基本情報

{{date}}の時点の{{a.company}}の投資情報は以下になります。

| | | | |
|-|-|-|-|
|Previous Close|{{a.Previous_Close}}|Market Cap|{{a.Market_Cap}}|
|Open |{{a.Open}}|Beta (3Y Monthly)|{{a["Beta_(3Y_Monthly)"]}}|
|Bid|{{a.Bid}}|PE Ratio|{{a['PE_Ratio_(TTM)']}}|
|Ask|{{a.Ask}}|EPS|{{a["EPS_(TTM)"]}}|
|Day's Range|{{a["Day's_Range"]}}| Earnings Date |{{a["Earnings_Date"]}}|
|52 Week Range|{{a['52_Week_Range']}}|Forward Dividend & Yield|{{a["Forward_Dividend_&_Yield"]}}|
|Volume|{{a.Volume}}|Ex-Dividend Date|{{a["Ex-Dividend_Date"]}}|
|Avg. Volume|{{a['Avg._Volume']}}|1y Target Est|{{a["1y_Target_Est"]}}|


株価の方は、52週のデータでみると、{{a.company}}の株価は、{% if a['52_Week_High_3'] |int -a['Previous_Close']|int >  a['Previous_Close']|int-a['52_Week_Low_3']|int %}現在は{{a['Previous_Close']}}ですので52週で見ても高値圏で推移しています。
{% else %}
現在は{{a['Previous_Close']}}ですので52週で見ても安値圏で推移しています。
{% endif %}
値動きの激しさを示すベータ値は、{{a["Beta_(3Y_Monthly)"]}}と{% if a["Beta_(3Y_Monthly)"]|int > 1 %}激しく{%else%}ゆるやかに{%endif%}なっています。
株価と企業の収益力を比較するPE Ratioは、{{a['PE_Ratio_(TTM)']}}となっています。
一株あたりの利益は、{{a["EPS_(TTM)"]}}となっています。
{{a.company}}の現在の次回配当利回りは、{{a["Forward_Annual_Dividend_Yield_4"]}}で、{% if a["Forward_Annual_Dividend_Yield_4"][:-2]|int > 7 %}と日本株の最高利回り銘柄JTと比べても高配当でかなり気になる銘柄です。{% elif a["Forward_Annual_Dividend_Yield_4"][:-2]|int > 5 %}日本株でもなかなか少ない高配当です。{%  elif a["Forward_Annual_Dividend_Yield_4"][:-2]|int > 4 %}日本株でも高配当に分類される部類の配当率です。{% else %}配当については、あまり惹かれるポイントはありません。
{% endif %}
次回、配当の確定日は、{{a["Ex-Dividend_Date"]}}となっています。


## {{a.company}}の評価尺度

dateの時点の{{a.company}}の評価尺度は以下になります。

||Current|
|--|--|
|時価総額|{{a['Market_Cap_(intraday)_5']}}|
|企業価値|{{a['Enterprise_Value_3']}}|
|実績PER|{{a['Trailing_P/E_']}}|
|予想PER |{{a['Forward_P/E_1']}}|
|PEG Ratio |{{a['PEG_Ratio_(5_yr_expected)_1']}}|
|Price/Sales (ttm)|{{a['Price/Sales_(ttm)']}}|
|Price/Book (mrq)|{{a["Price/Book_(mrq)"]}}|
|Enterprise Value/Revenue|{{a['Enterprise_Value/Revenue_3']}}|
|Enterprise Value/EBITDA|{{a["Enterprise_Value/EBITDA_6"]}}|

株価に発行済株式数を掛けた時価総額は、{{a['Market_Cap_(intraday)_5']}}です。
株主及び債権者に帰属する金銭的価値の指標であるエンタープライズバリューは、{{a['Enterprise_Value_3']}}でした。
{% if a['Forward_P/E_1']|int - a['Trailing_P/E_'] |int >0 %}予想PERの方が、実績PERより高く、業績の上昇が市場では期待されています。{% else %}業績は、やや下がると市場は予想しています。{% endif %}

## {{a.company}}の決算情報

{{a.company}}の決算情報は以下の様になっています。

|||
|--|--|
|年度末|{{a['Fiscal_Year_Ends_']}}|
|最新の四半期|{{a['Most_Recent_Quarter_(mrq)']}}|

## {{a.company}}の収益性

{{a.company}}の収益情報は以下の様になっています。

|||
|--|--|
|利益率|{{a['Profit_Margin_']}}|
|営業 利益率|{{a['Operating_Margin_(ttm)']}}|
{{a.company}}の利益率は{{a['Profit_Margin_']}}、営業利益率は{{a['Operating_Margin_(ttm)']}}でした。

## {{a.company}}の運用

{{a.company}}の運用は以下の様になっています。

| ||
|-|-|
|資産 収益率|{{a["Return_on_Assets_(ttm)"]}}|
|株主資本利益率（ttm）|{{a['Return_on_Equity_(ttm)']}}|
{{a.company}}の資産 収益率は、{{a['Return_on_Assets_(ttm)']}}、株主資本利益率は{{a['Return_on_Equity_(ttm)']}}でした。


## {{a.company}}の損益計算書

{{a.company}}の損益計算書は以下の様になっています。

|||
|-|-|
|収益|{{a["Revenue_(ttm)"]}}|
|1株当たり収益|{{a["Revenue_Per_Share_(ttm)"]}}|
|四半期ごとの収益成長率|{{a["Quarterly_Revenue_Growth_(yoy)"]}}|
|総利益|{{a["Gross_Profit_(ttm)"]}}|
|利払い前税引き前償却前利益|{{a["EBITDA_"]}}|
|普通株式の定義に利用可能な純利益|{{a["Net_Income_Avi_to_Common_(ttm)"]}}|
|希釈EPS|{{a["Diluted_EPS_(ttm)"]}}|
|四半期利益成長率|{{a["Quarterly_Earnings_Growth_(yoy)"]}}|

## {{a.company}}のバランスシート

{{a.company}}のバランスシートは以下の様になっています。

|||
|-|-|
|現金合計|{{a['Total_Cash_(mrq)']}}|
|1株当たりの総現金|{{a['Total_Cash_Per_Share_(mrq)']}}|
|総負債|{{a['Total_Debt_(mrq)']}}|
|総負債/資本|{{a["Total_Debt/Equity_(mrq)"]}}|
|Current Ratio (mrq)|{{a["Current_Ratio_(mrq)"]}}|
|一株当たり簿価|{{a["Book_Value_Per_Share_(mrq)"]}}|

## {{a.company}}のキャッシュフロー

{{a.company}}のキャッシュフローは以下の様になっています。

|||
|-|-|
|営業キャッシュフロー |{{a["Operating_Cash_Flow_(ttm)"]}}|
|レバレッジフリーキャッシュフロー|{{a["Levered_Free_Cash_Flow_(ttm)"]}}|

## {{a.company}}の株価履歴

{{a.company}}の株価履歴は以下の様になっています。

|||
|-|-|
|ベータ（3Y月次）|a['Beta_(3Y_Monthly)_']|
|52週間|a['52-Week_Change_3']|
|S＆P500 52週間|{{a["S&P500_52-Week_Change_3"]}}|
|52週間最高|{{a['52_Week_High_3']}}|
|52週安|{{a['52_Week_Low_3']}}|
|50日間の移動平均|{{a["50-Day_Moving_Average_3"]}}|
|200日間の移動平均|{{a["200-Day_Moving_Average_3"]}}|

一般的な米国株の動きと比べると{{a.company}}の動きは、{% if a['52-Week_Change_3']|int-a["S&P500_52-Week_Change_3"]|int>0 %}S＆P500を上回っています。{%else%}S＆P500を下回っています。{%endif%}

## {{a.company}}の統計情報

{{a.company}}の統計情報は以下の様になっています。

|||
|-|-|
|平均ボリューム（3か月）|{{a["Avg_Vol_(3_month)_3"]}}|
|平均ボリューム（10日）|{{a["Avg_Vol_(10_day)_3"]}}|
|発行済み株式数|{{a["Shares_Outstanding_5"]}}|
|浮動株|{{a['Float_']}}|
|インサイダーが保有する割合|{{a['%_Held_by_Insiders_1']}}|
|機関が保有する割合|{{a['%_Held_by_Institutions_1']}}|
|空売り|{{a["Shares_Short_(Nov_15,_2019)_4"]}}|
|空売り比率|{{a['Short_Ratio_(Nov_15,_2019)_4']}}|
|浮動株の空売りの比率|{{a["Short_%_of_Float_(Nov_15,_2019)_4"]}}|
|発行済み株式の空売り率（|{{a["Short_%_of_Shares_Outstanding_(Nov_15,_2019)_4"]}}|
|先月の空売り株式|{{a["Shares_Short_(prior_month_Oct_15,_2019)_4"]}}|

{{a.company}}の空売りは先月と比べて、{a["Shares_Short_(Nov_15,_2019)_4"]|int-a["Shares_Short_(prior_month_Oct_15,_2019)_4"]|int}と{%if a["Shares_Short_(Nov_15,_2019)_4"]|int-a["Shares_Short_(prior_month_Oct_15,_2019)_4"]|int>0 %}と増加しています。これは、買戻しなどがあれば上昇しますが、当面は厳しい状況かもしれません。{%else%}減少しています。{%endif%}

## {{a.company}}の配当情報

{{a.company}}の配当情報は以下の様になっています。

|配当金と分割||
|-|-|
|配当率|{{a['Forward_Annual_Dividend_Rate_4']}}|
|年間配当利回り|{{a['Forward_Annual_Dividend_Yield_4']}}|
|次回年間配当率|{{a['Trailing_Annual_Dividend_Rate_3']}}|
|次回年間配当利回り|{{a['Trailing_Annual_Dividend_Yield_3']}}|
|5年間の平均配当利回り|{{a["5_Year_Average_Dividend_Yield_4"]}}|
|配当性向|{{a["Payout_Ratio_4"]}}|
|配当日|{{a["Dividend_Date_3"]}}|
|配当落ち日|{{a["Ex-Dividend_Date_4"]}}|
|最終分割係数|{{a['Last_Split_Factor_(new_per_old)_2']}}|
|最終分割日|{{a["Last_Split_Date_3"]}}|
