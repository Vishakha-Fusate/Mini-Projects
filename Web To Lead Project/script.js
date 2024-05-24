
function beforesubmit(){
    let outputDate =  document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputdate");
    //console.log(inputDate.value);
    
    //formatting type string date to date (en_IN) locale
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
    
}