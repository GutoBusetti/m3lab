/* Links */

let youtube = document.getElementById('youtube');
let m3doc = document.getElementById('m3docs');
let insta = document.getElementById('insta');
let face = document.getElementById('facebook');

function youtubel() {
    open(URL = 'https://youtube.com/mand3loriano', target = '_blank');
}

function m3docl() {
    open(URL = 'https://github.com/m3docs', target = '_blank');
}

function instal() {
    open(URL = 'https://instagram.com/guto.busetti', target = '_blank');
}

function facel() {
    open(URL = 'https://facebook.com', target = '_blank');
}

youtube.addEventListener('click', youtubel);
m3doc.addEventListener('click',  m3docl);
insta.addEventListener('click', instal);
face.addEventListener('click', facel);

/* Animação "CSS" */

let iframedc = document.querySelector('.iframediscord')

function apareceriframe() {
    iframedc.style.height = '420px';
    iframedc.style.borderRadius = '15px';
}

function sumiriframe() {
    iframedc.style.height = '70px';
    iframedc.style.borderRadius = '5px'
}