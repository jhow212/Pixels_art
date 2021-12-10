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
let cor2 = document.getElementsByTagName('li')[1].className = 'color redSquared';
let cor3 = document.getElementsByTagName('li')[2].className = 'color purpleSquared';
let cor4 = document.getElementsByTagName('li')[3].className = 'color blueSquared';

let board = document.createElement('main');
document.body.appendChild(board);
board.id = 'pixel-board';
let pixelsColum = ['pixel1colum', 'pixel2colum', 'pixel3colum', 'pixel4colum', 'pixel5colum', 'pixel6line', 'pixel7line', 'pixel8line', 'pixel9line', 'pixel10line', 'pixel11line', 'pixel12line', 'pixel13line', 'pixel14line', 'pixel15line', 'pixel16line', 'pixel17line', 'pixel18line', 'pixel19line', 'pixel20line', 'pixel21line', 'pixel22line', 'pixel23line', 'pixel24line', 'pixel25line']
let pixels = [0];
for (let i = 0; i < pixelsColum.length; i += 1) {
  pixels = pixelsColum[i];
  let colorir = document.createElement('div');
  colorir.innerText = pixels;
  board.appendChild(colorir)
}
let pixel1colum = document.getElementsByTagName('div')[0].className = 'pixel blackSquareColum';
let pixel2colum = document.getElementsByTagName('div')[1].className = 'pixel redSquareColum';
let pixel3colum = document.getElementsByTagName('div')[2].className = 'pixel purpleSquareColum';
let pixel4colum = document.getElementsByTagName('div')[3].className = 'pixel blueSquareColum';
let pixel5colum = document.getElementsByTagName('div')[4].className = 'pixel whiteSquareColum';
let pixel6colum = document.getElementsByTagName('div')[5].className = 'pixel blackSquareColum';
let pixel7Colum = document.getElementsByTagName('div')[6].className = 'pixel redSquareColum';
let pixel8Colum = document.getElementsByTagName('div')[7].className = 'pixel purpleSquareColum';
let pixel9Colum = document.getElementsByTagName('div')[8].className = 'pixel blueSquareColum';
let pixel10Colum = document.getElementsByTagName('div')[9].className = 'pixel whiteSquareColum';
let pixel11colum = document.getElementsByTagName('div')[10].className = 'pixel blackSquareColum';
let pixel12colum = document.getElementsByTagName('div')[11].className = 'pixel redSquareColum';
let pixel13colum = document.getElementsByTagName('div')[12].className = 'pixel purpleSquareColum';
let pixel14colum = document.getElementsByTagName('div')[13].className = 'pixel blueSquareColum';
let pixel15colum = document.getElementsByTagName('div')[14].className = 'pixel whiteSquareColum';
let pixel16Colum = document.getElementsByTagName('div')[15].className = 'pixel blackSquareColum';
let pixel17Colum = document.getElementsByTagName('div')[16].className = 'pixel redSquareColum';
let pixel18Colum = document.getElementsByTagName('div')[17].className = 'pixel purpleSquareColum';
let pixel19Colum = document.getElementsByTagName('div')[18].className = 'pixel blueSquareColum';
let pixel20Colum = document.getElementsByTagName('div')[19].className = 'pixel whiteSquareColum';
let pixel21colum = document.getElementsByTagName('div')[20].className = 'pixel blackSquareColum';
let pixel22colum = document.getElementsByTagName('div')[21].className = 'pixel redSquareColum';
let pixel23colum = document.getElementsByTagName('div')[22].className = 'pixel purpleSquareColum';
let pixel24colum = document.getElementsByTagName('div')[23].className = 'pixel blueSquareColum';
let pixel25colum = document.getElementsByTagName('div')[24].className = 'pixel whiteSquareColum';

let primeiraCor = document.querySelector('.blackSquared');
primeiraCor.classList.add('selected');

let paletaDeCores = document.querySelectorAll('.color');
for (let i = 0; i < paletaDeCores.length; i += 1) {
  paletaDeCores[i].addEventListener('click', clicar)
}


function clicar (event) {
  let achando = document.querySelector('.selected')
  achando.classList.remove('selected')
  event.target.classList.add('selected')
}
