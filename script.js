function mudarCor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    var corAleatoria = 'rgb(' + r + ',' + g + ',' + b + ')';
    
    var elemento = document.getElementById('meuElemento');
    elemento.style.backgroundColor = corAleatoria;
}
