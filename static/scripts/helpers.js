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

