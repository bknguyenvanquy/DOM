

window.addEventListener("load", () => {
    var titles = document.getElementsByTagName('h4');
for(let i = 0; i<titles.length; i++){
    if(i%2 === 0){
        titles[i].innerHTML = 'QuyNV14';
    }
}
})