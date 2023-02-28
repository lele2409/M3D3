window.onload = function contaImmagini(){
    let immagini = document.getElementsByTagName('img');
    let numImmagini = immagini.length;
    let contaImmagini = document.getElementById('contatore')
    contaImmagini.innerHTML = numImmagini;
}