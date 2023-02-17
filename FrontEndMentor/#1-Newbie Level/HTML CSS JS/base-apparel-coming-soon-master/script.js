const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

    //check if email is valid
    if(!validateEmail(emailVal)) {
        form.classList.add('error');
    }
    else{
        form.classList.remove('error');
    }
});

function validateEmail(email){
    var re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}