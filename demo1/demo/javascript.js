
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.querySelector  --- lay ve phan tu dau tien co gia tri truyen vao (IT KHI SU DUNG)
// document.querySelectorAll ---- lay tat cac cac phan tu giong gia tri truyen va0



window.addEventListener("load", () => {
var titles = document.getElementsByClassName('card-title');
console.log(titles.length);

titles[0].innerHTML = 'QuyNV14';
var text = document.querySelector('.card-text');

text.innerHTML = 'Xin chao cac ban';


var text1 = document.querySelectorAll('.card-text');

text1[2].innerHTML = 'Xin chao cac ban 12kslaikajhfg';

})