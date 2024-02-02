let searchInput = document.querySelector('#searchInput');
let items = document.querySelectorAll('.item');

let chunk = 'н';

// строка.indexOf(подстрока)

for (let item of items) {
    let str = item.textContent;
    if (str.indexOf(chunk) != -1) {
        console.log(str);
    }
}

searchInput.addEventListener('keyup', () => {

})