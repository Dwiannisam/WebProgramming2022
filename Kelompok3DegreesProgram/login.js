//validation input

function masuk() {
    var username = document.form.username.value;
    var password = document.form.password.value;
    if (username == "nufian21@gmail.com" && password == "TI10") {
    alert("Login Sukses");
    window.open("home.html")
    return false;
    }
    else {
    alert("Login Gagal");
    }
    }