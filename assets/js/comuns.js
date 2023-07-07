/* Script Feito Para Avisar Para Os Úsuarios Que Mexer No Console Para Modificar o Site é Contra Os Termos De Serviço Do Google */

console.warn('Favor Não Mexer Em Nenhum Dado Do DevTools, Isso é Contra Os Termos De Serviço Do Google Além De Estar Violando Os Direitos Desse Site!');
console.warn('Ao Mexer No DevTools, Você Podera Sofrer Algumas Consequencias Dependendo Do Que Fazer No DevTools Desse Site!');
console.warn('O DevTools é Usado Para Ajudar No Desenvolvimento!');

/* Script Feito Para Buttons Mandar Os Úsuarios Para Os Links */

let btnlogin = document.querySelector('.login');
let btnparticiparposp = document.querySelector('.participarposp');

function telalogin() {
    //open(URL = './páginas/login.html')
    alert('Recurso Indisponível! Esse Recurso Só Está Disponível Em Breve!!')
    console.error('Recurso Indisponível')
}

function serverdc() {
    open(URL = 'https://discord.gg/JsW4TUaG39', target = "_blank");
}

btnlogin.addEventListener('click', telalogin);
btnparticiparposp.addEventListener('click', serverdc);

/* Script Do Header */

let buttonopen = document.querySelector('#menu-buttonclose');
let buttonclose = document.querySelector('#menu-buttonopen')
let headerpc = document.querySelector('.header');
let headermob = document.querySelector('.navmob');
let main = document.querySelector('.main');

function openmenu() {
    headermob.style.display = 'flex';
    headerpc.style.boxShadow = 'none';
    headerpc.style.borderRadius = '0';
    headerpc.style.marginBottom = '0px';
    headermob.style.opacity = '0.5';
    setTimeout(() => {
        headermob.style.opacity = '1';
    }, 100);
    buttonopen.style.display = 'none';
    buttonclose.style.display = 'block';
}

function closemenu() {
    headermob.style.opacity = '0';
    buttonopen.style.display = 'block';
    buttonclose.style.display = 'none';
    setTimeout(() => {
        headerpc.style.boxShadow = '1px 1px 10px rgba(255, 255, 255, 0.556)';
        headerpc.style.borderRadius = '0 0 10px 10px';
        headerpc.style.marginBottom = '25px';
        headermob.style.display = 'none';
    }, 400);
}

