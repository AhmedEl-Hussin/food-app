
let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let phoneInput = document.getElementById('phoneInput');
let ageInput = document.getElementById('ageInput');
let passwordInput = document.getElementById('passwordInput');
let rePasswordInput = document.getElementById('rePasswordInput');

let nameAlert = document.getElementById('nameAlert');
let emailAlert = document.getElementById('emailAlert');
let phoneAlert = document.getElementById('phoneAlert');
let ageAlert = document.getElementById('ageAlert');
let passwordAlert = document.getElementById('passwordAlert');
let rePasswordAlert = document.getElementById('rePasswordAlert');

let btnSubmit = document.getElementById('btnSubmit');


main()
async function main() {
   await getApi()
   await displayApi()
}

//shadow

//validition for name input
nameInput.onkeyup=function()
{
    var nameRejex=/[a-z A-Z][^#&<>"~;$^%{}?]{1,20}$/
    if(nameRejex.test(nameInput.value))
    {
        nameInput.classList.add('is-valid');
        nameInput.classList.remove('is-invalid');
        nameAlert.classList.add('d-none')

    }
    else{
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        nameAlert.classList.remove('d-none')
    }
}






//validition for email input
emailInput.onkeyup=function()
{
    var nameRejex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(nameRejex.test(emailInput.value))
    {
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        emailAlert.classList.add('d-none')

    }
    else{
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        emailAlert.classList.remove('d-none')
    }
}






//validition for phone number input
phoneInput.onkeyup=function()
{
    var nameRejex=/^01[0125][0-9]{8}$/
    if(nameRejex.test(phoneInput.value))
    {
        phoneInput.classList.add('is-valid');
        phoneInput.classList.remove('is-invalid');
        phoneAlert.classList.add('d-none')

    }
    else{
        phoneInput.classList.add('is-invalid');
        phoneInput.classList.remove('is-valid');
        phoneAlert.classList.remove('d-none')
    }
}




//validition for Age input
ageInput.onkeyup=function()
{
    var nameRejex=/^[1-9]?[0-9]{1}$|^100$/
    if(nameRejex.test(ageInput.value))
    {
        ageInput.classList.add('is-valid');
        ageInput.classList.remove('is-invalid');
        ageAlert.classList.add('d-none')

    }
    else{
        ageInput.classList.add('is-invalid');
        ageInput.classList.remove('is-valid');
        ageAlert.classList.remove('d-none')
    }
}





//validition for password input
passwordInput.onkeyup=function()
{
    var nameRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(nameRejex.test(passwordInput.value))
    {
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        passwordAlert.classList.add('d-none')

    }
    else{
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        passwordAlert.classList.remove('d-none')
    }
}



//validition for password input
rePasswordInput.onkeyup=function()
{
    var nameRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(nameRejex.test(rePasswordInput.value))
    {
        rePasswordInput.classList.add('is-valid');
        rePasswordInput.classList.remove('is-invalid');
        rePasswordAlert.classList.add('d-none')
        btnSubmit.removeAttribute('disabled')

    }
    else{
        rePasswordInput.classList.add('is-invalid');
        rePasswordInput.classList.remove('is-valid');
        rePasswordAlert.classList.remove('d-none')
    }
}

btnSubmit.onclick = function(){
    alert('hello')
}
