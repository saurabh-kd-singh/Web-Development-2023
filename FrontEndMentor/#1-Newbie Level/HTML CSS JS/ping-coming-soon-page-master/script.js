const btn = document.getElementById('button');


btn.addEventListener('click', e=>{
    e.preventDefault();

    var email = document.getElementById('email');
    var emailValue = email.value.trim();
    var errorText = document.getElementById('err-text')

    if(emailValue === ''){
        email.classList.remove('success');
        email.placeholder = "";
        email.classList.add('error');
        errorText.innerText = "Email cannot be empty";
        errorText.style.display = 'flex';
    }
    else if (!isValidEmail(emailValue)){
        email.classList.remove('success');
        email.classList.add('error');
        errorText.innerText = "Please provide a valid Email";
        errorText.style.display = 'flex';
    }
    else{
        email.style.color = 'green';
        email.classList.remove('error');
        errorText.style.display = 'none';
        email.classList.add('success');
    }
})

function isValidEmail(email){
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}