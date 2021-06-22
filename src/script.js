function xadrez(){

var img = window.document.getElementById('imagem')
img.scr = 'src/imgs/puzzle.jpg'

var chute = window.document.getElementById('lance')
var resposta = document.getElementById('resposta')


if (chute == "Dd1"){
    resposta.innerHTML = 'Acertou!'
} else {
    resposta.innerHTML = 'Errou!'
}

}
