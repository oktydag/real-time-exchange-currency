from flask import *
import requests

app = Flask(__name__)

@app.route("/",methods = ["GET","POST"])
def index():
    if request.method == "POST":
         pass 
    else:
        return render_template("index.html" )

if __name__ == "__main__":
    app.run(debug=True)
