/* Script Feito Para Acessar o GitHub Dos Fundadores */

let btnm1 = document.getElementById('gitm1');
let btnm2 = document.getElementById('gitm2');
let btnm3 = document.getElementById('gitm3');
let btnjun = document.getElementById('gitjun');
let btnheitor = document.getElementById('githeitor');
let btnfun = document.getElementById('gitfun');

function gitm1() {
    open(URL = 'https://github.com/Yurigabriel6', target = '_blank');
}

function gitm2() {
    open(URL = 'https://github.com/ymiguelo', target = '_blank');
}

function gitm3() {
    open(URL = 'https://github.com/gutobusetti', target = '_blank');    
}

function junin() {
    open(URL = 'https://github.com/stratznovich', target = '_blank');
}

function funtime() {
    open(URL = 'https://github.com/funtime-micael', target = '_blank');
}

function heitor() {
    open(URL = 'https://github.com/HeitorDJAk47Gamer', target = '_blank');
}

btnm1.addEventListener('click', gitm1);
btnm2.addEventListener('click', gitm2);
btnm3.addEventListener('click', gitm3);
btnjun.addEventListener('click', junin);
btnheitor.addEventListener('click', heitor);
btnfun.addEventListener('click', funtime)
