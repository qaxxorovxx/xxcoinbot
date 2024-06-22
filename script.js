let coinsize = document.querySelector('.coinsize');
let photocoin = document.querySelector('.photocoin');
let limit = document.querySelector('.limit');
let button_uprade = document.querySelector('.button_uprade');

let coinsize_number = 0;
coinsize.textContent = coinsize_number;

let i = 1;
let a = 1;
let limit_number = 1000;
limit.textContent = limit_number;

function update() {
    i = i + 1;
    a = a + 1;
}

function bosildi() {
    if (limit_number > 0) {
        a = 1
        coinsize_number = coinsize_number + i;
        coinsize.textContent = coinsize_number;

        console.log(coinsize_number);
        limit_number = limit_number - i;
        limit.textContent = limit_number;
    } else{
        a = 0
    }
}

function addseconds() {
    limit_number = limit_number + a;
}


function tekshiruv() {
    if (limit_number === 1000) {
        console.log("hech narsa qilmasin");
    } else {
        addseconds();
        limit.textContent = limit_number;
    }
}
setInterval(tekshiruv, 500);
photocoin.addEventListener('click', bosildi);
button_uprade.addEventListener('click', update);

