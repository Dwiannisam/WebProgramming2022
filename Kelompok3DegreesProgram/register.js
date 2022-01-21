function masuk() {
    var carialumni = document.form.carialumni.value;
    var namalengkap = document.form.namalengkap.value;
    var prodi = document.form.prodi.value;
    var user = document.form.user.value;
    var password = document.form.password.value;
    var cekpassword = document.form.cekpassword.value;
    if (carialumni == "admin" && namalengkap == "amin" && prodi == "Teknik Informatika" && user == "admin" && password == "admin" && cekpassword == "admin") {
    alert("Login Sukses");
    window.open("home.html")
    return false;
    }
    else {
    alert("Login Gagal");
    }
    }

form
    carialumni
    namalengkap
    prodi
    user
    password
    cekpassword