from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime, timedelta
import requests
import pandas as pd
from bokeh.plotting import figure, show, save
from bokeh.io import output_file
from bokeh.models import ColumnDataSource
from bokeh.embed import components
import os

app = Flask(__name__)

app.vars={}

@app.route('/')
def start():
    return redirect('/index')

@app.route('/index',methods=['GET','POST'])
def index():
    if request.method == 'GET':
        return render_template('myindex.html', title="Home")
    else:
        #request was a POST
        this_ticker = request.form['this_ticker'].upper()
        
        now = datetime.today()
        today = now.strftime("%Y-%m-%d")
        then = now - timedelta(days=31)
        first_day = then.strftime("%Y-%m-%d")
        
        my_Quandl_key = os.environ.get('QUANDL_KEY', None)

        #Get Data from www.quandl.com
        r = requests.get('https://www.quandl.com/api/v3/datasets/WIKI/{0}.json?column_index=4&start_date={1}&end_date={2}&api_key={3}'.format(this_ticker,first_day,today,my_Quandl_key))
        
        if r.status_code == 403:
            return ("You do not have permission to view this stock ticker. Please subscribe to this ticker to get access.")
        if r.status_code == 404:
            return ("You have submitted an incorrect Quandl stock ticker code. Please go back and try again.")
        
               
        data = r.json()
        df = pd.DataFrame(data[u'dataset'][u'data'])
        df.columns = data[u'dataset'][u'column_names']
        df['Date'] = pd.to_datetime(df['Date'], format='%Y/%m/%d')
        
        #Bokeh
        source = ColumnDataSource(data=df)
        p = figure(title= this_ticker + " closing price in the last month", x_axis_label='Date', y_axis_label='Closing Price', x_axis_type="datetime", plot_width=600, plot_height=400)
        p.line(x = 'Date', y = 'Close', source = source, legend = this_ticker, line_width = 2, color="maroon")
        p.circle(x = 'Date', y = 'Close', source = source, legend = this_ticker, color="maroon",size=8, alpha=0.5)
                
        script, div = components(p)

        stock_name = data[u'dataset'][u'name'][:-44]
        google_link = "[&nbsp;<a target=”_blank” href=”http://www.google.com/search?q="+ this_ticker +"”>Google Search"+ this_ticker +"</a>&nbsp;]"
        return render_template("mygraph.html", title="Stock Ticker Plot", the_div=div, the_script=script, stock_name = stock_name, google_link = google_link)        


@app.route('/about')
def about():
    return render_template('myabout.html', title="About")

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
