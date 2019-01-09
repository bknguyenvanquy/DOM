document.addEventListener('DOMContentLoaded', () => { //doi khi load het html css roi moi load den javascript
    let con = document.querySelector(".container");
    con.addEventListener("click", () => {
        console.log("clicked");
    })
    var divShow = document.querySelectorAll('.card-columns');
    let btn = document.querySelector(".btn-click");

    btn.addEventListener("click", (e) => {
        console.log("sec");
        e.stopPropagation(); // chặn lan event ra các element khác
        divShow[0].classList.toggle("disable");
    })

    // btn.onclick = ()=>{
    //     console.log("sec")
    //     divShow[0].classList.toggle("disable");
    // }

})