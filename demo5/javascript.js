document.addEventListener('DOMContentLoaded', () => {
//code here
var titles = document.querySelectorAll('.title');

var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');

button1.addEventListener('click', () => {
    titles[0].innerHTML = 'Hellooooooooooooo' ;
},false)
button2.addEventListener('click', () => {
    var p = document.createElement('p');
    p.textContent = 'ạkshfukjashfk';
    titles[1].appendChild(p);
},false)
button3.addEventListener('click', () => {
    var p = document.createElement('p');
    p.textContent = 'ạkshfukjashfk';
    titles[1].replaceChild(p);
},false)

},false)