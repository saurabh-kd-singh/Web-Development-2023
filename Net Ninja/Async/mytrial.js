// const request = new XMLHttpRequest();
// request.open('GET', 'todos.json');

// const data = JSON.parse(request.responseText);
// console.log(data);

// request.send();


const request = new XMLHttpRequest();
request.open('GET', 'todos.json');

request.addEventListener('load', function() {
  const data = JSON.parse(request.responseText);
  console.log(data);
});

request.send();