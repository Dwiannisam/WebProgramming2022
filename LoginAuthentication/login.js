var attempt =3;
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Nisalamin" && password == "12345678") {
        alert ("login successfully");
        window.location = "succes.html";
        return false;
    }
else{
    attempt --;
    alert("User name dan password anda salah, Silahkan dicoba lagi :)");
    if( attempt == 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
}
}
}