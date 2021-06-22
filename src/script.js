function puzzle1(){

var img = window.document.getElementById('imagem')
var chute = window.document.getElementById('lance').value
var resposta = document.getElementById('resposta')


if (chute == "Dd1"){
    resposta.innerHTML = 'Acertou!'
    img.src = "src/imgs/puzzle2.jpg"
    document.getElementById('guess').setAttribute("onclick", "javascript: puzzle2();")
} else if(chute == ""){
    resposta.innerHTML = 'Não dá pra passar a vez!'
} else {
    resposta.innerHTML = 'Errou!'
} 

}

function puzzle2(){

    var img = window.document.getElementById('imagem')
    var chute = window.document.getElementById('lance').value
    var resposta = document.getElementById('resposta')


    if (chute == "Dc1"){
        resposta.innerHTML = 'Acertou!'
        img.src = "src/imgs/puzzle3.jpg"
        document.getElementById('guess').setAttribute("onclick", "javascript: puzzle3();")
    } else if (chute == ""){
        resposta.innerHTML = 'Não dá pra passar a vez!'
    } else {
        resposta.innerHTML = 'Errou!'
    } 
}

function puzzle3(){

    var img = window.document.getElementById('imagem')
    var chute = window.document.getElementById('lance').value
    var resposta = document.getElementById('resposta')


    if (chute == "Db2"){
        resposta.innerHTML = 'Xeque-mate! Parabéns, você solucionou o puzzle!'
        img.src = "src/imgs/puzzle4.jpg"
    } else if(chute == ""){
        resposta.innerHTML = 'Não dá pra passar a vez!'
    } else {
        resposta.innerHTML = 'Errou!'
    } 
}
