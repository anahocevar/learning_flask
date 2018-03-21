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
        return render_template('index.html')
    else:
        #request was a POST
        this_ticker = request.form['this_ticker']
        
        now = datetime.today()
        today = now.strftime("%Y-%m-%d")
        then = now - timedelta(days=31)
        first_day = then.strftime("%Y-%m-%d")
        
        my_Quandl_key = os.environ.get('QuandlKey', None)

        #Get Data from www.quandl.com
        r = requests.get('https://www.quandl.com/api/v3/datasets/WIKI/{0}.json?column_index=4&start_date={1}&end_date={2}&api_key=my_Quandl_key'.format(this_ticker,first_day,today))
        
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
        p.circle(x = 'Date', y = 'Close', source = source, legend = this_ticker, color="maroon",size=5)

#        output_file("templates/graph.html")
#        save(p)
                
        script, div = components(p)

        return render_template("graph.html", the_div=div, the_script=script)        
#        return redirect(url_for('graph', the_div=div, the_script=script))


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/graph')
def graph():
    return render_template('graph.html', the_script=request.args.get('the_script'), the_div=request.args.get('the_div'))

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
