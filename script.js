let paleta = document.createElement('ul');
document.body.appendChild(paleta);
paleta.id = 'color-palette';

let cores = ['cor1', 'cor2', 'cor3', 'cor4']
let resultado = [0]
for (let i = 0; i < cores.length; i += 1) {
    resultado = cores[i]
    let liS = document.createElement('li')
    liS.innerText = resultado;
    paleta.appendChild(liS);
}
let cor1 = document.getElementsByTagName('li')[0].className = 'color blackSquared';
let cor2 = document.getElementsByTagName('li')[1].className = 'color redSquared'
let cor3 = document.getElementsByTagName('li')[2].className = 'color purpleSquared'
let cor4 = document.getElementsByTagName('li')[3].className = 'color blueSquared'
