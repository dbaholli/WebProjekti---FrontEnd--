// JavaScript source code
function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Sheno Emrin!";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Sheno temen qe deshiron me diskutu";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Jep nje numer valid";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Shkruaj e-mail adresen";
        error_message.innerHTML = text;
        return false;
    }
    alert("Mesazhi eshte derguar!");
    return true;
}