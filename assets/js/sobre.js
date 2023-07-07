const btnlermais = document.querySelector('.lermais');
const btnlermenos = document.querySelector('.lermenos');
const p2 = document.querySelector('.p2');

function sumirp2() {
    btnlermais.style.opacity = '1';
    p2.style.opacity = '0';
    p2.style.rotate = '6deg';
    p2.style.scale = '50%';
    p2.style.translate = '3% 25%';
}

function aparecerp2() {
    btnlermais.style.opacity = '0';
    p2.style.opacity = '1';
    p2.style.rotate = '0deg';
    p2.style.scale = '100%';
    p2.style.translate = '0% 0%';
}

btnlermais.addEventListener('click', aparecerp2);
btnlermenos.addEventListener('click', sumirp2);
