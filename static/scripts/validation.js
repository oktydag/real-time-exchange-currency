var InputValidator = (function() {

  function IsAmountNumber(amount){
    var regex=/^[0-9]+$/;
    if (!amount.match(regex)) { ShowDangerAlert(); ClearAmountText(); return false; }

    HideDangerAlert();
    return true;
  }

function ShowDangerAlert(){
  $('#alert-danger').show();
}

function HideDangerAlert(){
  $('#alert-danger').hide();
}

function ClearAmountText(){
  $('#amount').val('');
}

  return {
            IsAmountNumber : IsAmountNumber,
            HideDangerAlert : HideDangerAlert,
         };
}());

