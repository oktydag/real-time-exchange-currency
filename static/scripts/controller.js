$(document).ready(function(){
   InputValidator.HideDangerAlert();
});


$('#amount').on('input', function() {

         var amountValue = this.value;

         var isAmountValid = InputValidator.IsAmountNumber(amountValue);

         if (isAmountValid) ApiHelper.CalculateExchange(amountValue);

});
