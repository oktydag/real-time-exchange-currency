# real-time-exchange-currency

- This application shows you the current exchange currency according to currency unit your choise with real time calculation.

 # Getting Started

## 1. Download or clone this repo with

```
git clone https://github.com/oktydag/real-time-exchange-currency.git

```


# Steps For Run
## 1.  virtualenv

Create a virtualenv and activate it.

```
$ pip install virtualenv
$ virtualenv venv
$ source venv/bin/activate
```

Activate venv for **Windows**

```
$ cd venv
$ source Scripts/activate
```

**virtualenv** is a tool to create isolated Python environments. virtualenv creates a folder which contains all the necessary executables to use the packages that a Python project would need.

## 2.  Install Flask

```
$ pip install flask
```

Flask is a web application framework written in Python. 


## 3. Module Design Pattern and Revealing 

Module Desing Pattern in Javascript that are familiar with object-oriented languages, modules are JavaScript "classes",  provides loose coupling to support well-structured code.

This pattern allows for public and private (plus the lesser-know protected and privileged) access levels like Common.js in this repository.

```javascript
(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();

```
The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal as **Revealing Module Pattern.**

You can see the my structure deal with it to **static file** due to Flask need for adding Scripts in HTML pages such as;

In helpers.js;

```javascript
var ApiHelper = (function() {

//private
  function CalculateExchangesByCountry(countryRate, amountValue, response){

       var firstCurrency = document.getElementById(Common.FirstCurrency).value;
       var exchangeOfFirstCurrentFromEuro = response.rates[firstCurrency];

       var rate = response.rates[countryRate];
       var exchangeResult = (rate / exchangeOfFirstCurrentFromEuro ) * amountValue;

       return exchangeResult;

  }

  function CalculateExchangeValues(amountValue){

      $.ajax({url: Common.UrlForCallingApi, success: function(response){

            var usdExchange = CalculateExchangesByCountry(Common.USD, amountValue,  response);
            $('#totalForUSD')[0].innerText = usdExchange

            var tryExchange = CalculateExchangesByCountry(Common.TRY, amountValue,  response);
            $('#totalForTry')[0].innerText = tryExchange

            var eurExchange = CalculateExchangesByCountry(Common.EUR, amountValue,  response);
            $('#totalForEuro')[0].innerText = eurExchange;

            var gbpExchange = CalculateExchangesByCountry(Common.GBP, amountValue,  response);
            $('#totalForGbp')[0].innerText = gbpExchange;
      }});
  }

 //public
  return {
    CalculateExchange : CalculateExchangeValues
  };

}());


```
You can see that only **CalculateExchangeValues** function is public owing to CalculateExchange that is returned.



## 4 fixer.io account for api key

In https://fixer.io/ , you need to get account for free api key and paste your key to **apikey** into common.js.

```JavaScript
var apiUrlBase = 'http://data.fixer.io/api/latest?access_key=';
var apiKey = 'your api key via fixer.io';
```

## 5. Run the main.py in virtualenv

```
$ (venv) python main.py
```
