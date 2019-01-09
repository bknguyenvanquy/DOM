document.addEventListener('DOMContentLoaded', () => {

    let title = document.querySelector('.title');
    let input = document.querySelector('.input');
    let button = document.querySelector('.button');

    input.addEventListener('input', (e) => {
        title.innerHTML = e.target.value;
    })

    button.addEventListener('click', () => {
        window.location.href = ('https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes');
    })

},false)