
var con = document.getElementById('container');
var out = document.getElementById('output');

con.addEventListener('mousemove', runEvent);
con.addEventListener('mouseleave', runEvent2);

function runEvent(e){
    var x = e.offsetX;
    var y = e.offsetY;
    out.innerHTML = `<h3>MouseX : ${x} </h3><h3>MouseY : ${y} </h3>`;
    document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 100)";
}

function runEvent2(e){
    out.innerHTML ='';
    document.body.style.backgroundColor = "steelblue";
    con.style.backgroundColor = "white";
}