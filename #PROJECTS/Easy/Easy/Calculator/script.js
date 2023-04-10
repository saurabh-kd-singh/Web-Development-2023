let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){

        /*
        When an event occurs, the browser creates an event object
        and passes it as an argument to the event listener function.
        The event object contains information about the event, such
        as the type of event, the target element that triggered the
        event, and any additional data related to the event.

        In this code, the event listener function is triggered by the
        "click" event on a button element, and when the function is 
        executed, the "this" keyword is used to refer to the button 
        element that triggered the event. This is because the "this" 
        keyword in JavaScript refers to the object that called the function, 
        which in this case is the button element that was clicked.
        */

        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        }else{
            if(this.innerHTML == "Clear"){
                value.innerHTML = "";
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    });
}

toggleBtn.onclick = function(){
    body.classList.toggle('dark');
};