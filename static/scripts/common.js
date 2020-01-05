var Common = (function() {

var firstCurrency = 'firstCurrency';
var apiUrlBase = 'http://data.fixer.io/api/latest?access_key=';
var apiKey = 'your api key via fixer.io';

var TRY_OPTION_CONST = "TRY";
var USD_OPTION_CONST = "USD";
var EUR_OPTION_CONST = "EUR";
var GBP_OPTION_CONST = "GBP";

var urlForCallingApi = apiUrlBase + apiKey;

var warningMessageForAmount = 'Please write only number !';

  return {
    FirstCurrency : firstCurrency,
    UrlForCallingApi : urlForCallingApi,
    TRY : TRY_OPTION_CONST,
    USD : USD_OPTION_CONST,
    EUR : EUR_OPTION_CONST,
    GBP : GBP_OPTION_CONST,
    WarningMessageForAmount : warningMessageForAmount,
  };
}());

