const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid or not
function isValidEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}



// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Checck for Empty Username
    if (username.value === '') {
        showError(username, 'Username is required !')
    }
    else{
        showSuccess(username);
    }

    // Check for Empty Email
    if (email.value === '') {
        showError(email, 'Email is required !')
    }else if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid !');
    }
    else{
        showSuccess(email);
    }

    // Check for Empty Password
    if (password.value === '') {
        showError(password, 'Password is required !')
    }
    else{
        showSuccess(password);
    }

    // Check for Empty Password
    if (password2.value === '') {
        showError(password2, 'Please re-enter the password !')
    }
    else{
        showSuccess(password2);
    }

});

