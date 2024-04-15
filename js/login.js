console.log('login')

const userName = document.getElementById('userName')
const mobNo = document.getElementById('mobNo')
const pswd = document.getElementById('pswd')
const cpswd = document.getElementById('cpswd')

const loginName = document.getElementById('loginName')
const loginPswd = document.getElementById('loginPswd')


function register() {
    if (userName.value == "" || mobNo.value == "" || pswd.value == "" || cpswd.value == ""
        || mobNo.value <= 10) {
        alert("Incorrect Entry")
    }
    else {
        localStorage.setItem('name', userName.value)
        localStorage.setItem('mobNo', mobNo.value)
        localStorage.setItem('password', pswd.value)
        userName.value = ""
        mobNo.value = ""
        pswd.value = ""
        cpswd.value = ""
        alert('Registered Successfully')
    }
}

function login() {
    if (loginName.value == localStorage.getItem('mobNo') && loginPswd.value == localStorage.getItem('password')) {
        console.log("success")
        window.location = "profile.html"
    } else {
        alert('Invalid Credential, Register Now To Login')
    }
    loginName.value = ""
    loginPswd.value = ""
}

function logout() {
    localStorage.removeItem('name')
    localStorage.removeItem('mobNo')
    localStorage.removeItem('password')
    window.location="index.html"
}