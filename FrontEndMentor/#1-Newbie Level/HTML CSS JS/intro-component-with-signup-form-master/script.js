const btn = document.getElementById('btn');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

btn.addEventListener('click', e => {
    e.preventDefault();

    var firstName = firstname.value.trim();
    var lastName = lastname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // First Name
    if(firstName === ''){
        errorFunc(firstname, 'First Name cannot be empty')
    }
    else{
        successFunc(firstname)
    }

    // Last Name
    if(lastName === ''){
        errorFunc(lastname, 'Last Name cannot be empty')
    }
    else{
        successFunc(lastname)
    }

    // Email
    if(emailValue === ''){
        errorFunc(email, 'Email cannot be empty')
    }
    else if(!emailValue.match(pattern)){
        errorFunc(email, 'Looks like this is not an email')
    }
    else{
        successFunc(email)
    }

    // Password
    if(passwordValue === ''){
        errorFunc(password, 'Password cannot be empty')
    }
    else{
        successFunc(password)
    }

})

function errorFunc(req, message){
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.classList.add('error');
    span.classList.add('error-text');

    req.classList.remove('success');

    if(req !== email){
        req.placeholder = "";
        
    }
    else if((req == email) && (email.value === '')){
        req.placeholder = "";
    }
    else{
        // req.value = "example@website.com"
        // document.getElementById('email').value = "example@website.com";
        req.style.color="hsl(0, 100%, 74%)";
    }
    
}

function successFunc(req){
    req.classList.add('success');
    
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = '';
    req.classList.remove('error');
    span.classList.remove('error-text');

    if(req == email){
        req.style.color = "black";
    }

}