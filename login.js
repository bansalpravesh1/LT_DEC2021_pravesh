
// email vaildation
function validateMail() {
  var mName= document.getElementById("mails").value;
var rel4 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(rel4.test(mName)){
    document.getElementById("mailsPrompt").style.color="green";
    document.getElementById("mailsPrompt").innerHTML="<strong>valid</strong>";
    return true;
  }
  else {
    document.getElementById("mailsPrompt").style.color="Red";
    document.getElementById("mailsPrompt").innerHTML="<strong>Use correct format</strong>";
    return false;
  }
}
// password formpage validation
var rel;
function validatePasswor() {
  var pasName= document.getElementById("pwd1").value;
  var rel5 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  rel=pasName;
  if(rel5.test(pasName)){
    document.getElementById("passPromp").style.color="green";
    document.getElementById("passPromp").innerHTML="<strong>valid</strong>";
    return true;
  }
  else {
    document.getElementById("passPromp").style.color="Red";
    document.getElementById("passPromp").innerHTML="<strong>Use atlest one uppercase letter,special character and numbers</strong>";
    return false;
  }
}
