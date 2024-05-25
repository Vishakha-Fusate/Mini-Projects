let captchachecked = false;
function beforesubmit(event) {
    if (captchachecked) {
        let outputDate = document.querySelector(".outputDate");
        let inputDate = document.querySelector(".inputdate");
        //console.log(inputDate.value);

        //formatting type string date to date (en_IN) locale
        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        outputDate.value = formattedDate;
    } else {
        alert("Please check reCAPTCHA box to submit lead");
        event.preventDefault();   // sttp submission
    }
  
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function recaptchasuccess() {
    captchachecked = true;
}