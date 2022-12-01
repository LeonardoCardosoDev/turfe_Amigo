var qtdCavalos = 0
caixaNomeCavalos.style.display = "none"
caixaVoltas.style.display = "none"
largada.style.display = "none"

function CadastrarQuantidade() {

    if (ipt_qtdCavalos.value == " " || ipt_qtdCavalos.value == 0 || Number.isNaN(Number(ipt_qtdCavalos.value)) ) {
        alert('Informe corretamente a QUANTIDADE DE CAVALOS!!!')
    }else if(ipt_qtdCavalos.value == 1){
        alert('Infelizmente não existe corrida de apenas um cavalo')
    }else{
    qtdCavalos = Number(ipt_qtdCavalos.value)
    caixaNomeCavalos.style.display = "block"
    caixaQuantidade.style.display = "none"
    }
    

}

var vetorNomes = []
var cavalos = []
var contadorCavalos = 1
var bloqueioCadastro = false

function CadastrarCavalo() {
    bloqueioCadastro = false
    if (nomeCavalo.value.length == 0) {
        alert('Informe o nome do cavalo')
    }
    else {
        for (var x = 0; x < vetorNomes.length; x++) {
            if (nomeCavalo.value == vetorNomes[x]) {
                alert("Este Cavalo ja foi cadastrado")
                bloqueioCadastro = true
            }
        }
        if (bloqueioCadastro == false) {
            var cavalo = {
                velocidadeTotal: 0,
                posicao: 0,
                nome: "",
            }
            cavalo.nome = nomeCavalo.value
            nomeCavalo.value = ""
            if (contadorCavalos == qtdCavalos) {
                caixaNomeCavalos.style.display = "none"
                caixaVoltas.style.display = "block"

            }

            cavalos.push(cavalo)
            contadorCavalos++
            vetorNomes.push(cavalo.nome)
        }

    }

}
var voltas = 0

function Funcaovoltas() {
    

    if (ipt_qtdVoltas.value == " " || ipt_qtdVoltas.value == 0 || Number.isNaN(Number(ipt_qtdVoltas.value)) ) {
        alert('Informe corretamente a QUANTIDADE DE VOLTAS!!!')
    }else{

        voltas = Number(ipt_qtdVoltas.value)
    contVolta.style.display = "none"
    largada.style.display = "block"
    }

}

function DarLargada() {
    largabutton.style.display = "none"
    buttonranking.style.display = "flex"
    for (var x = 0; x < voltas; x++) {
        resultado.innerHTML += `<br>`
        resultado.innerHTML += `Voltas ${x + 1}<br>`

        for (var y = 0; y < cavalos.length; y++) {
            var numeroAleatorio = ((Math.random() * 2) + 7).toFixed(1)
            cavalos[y].velocidadeTotal += Number(numeroAleatorio)
            numeroAleatorio = Number(numeroAleatorio)
            resultado.innerHTML += `${cavalos[y].nome} – ${numeroAleatorio.toFixed(1)} – ${cavalos[y].velocidadeTotal.toFixed(2)}<br>`


        }
    }




    var velocidadeCavalos = []


    var stringCavalosVolta = ""


    for (var x = 0; x < cavalos.length; x++) {
        var numeroAleatorio = ((Math.random() * 2) + 7).toFixed(1)
        stringCavalosVolta += `${cavalos[x].nome} – ${numeroAleatorio} – ${Number(cavalos[x].velocidadeTotal).toFixed(2)}<br>`
        velocidadeCavalos.push(cavalos[x].velocidadeTotal)
    }


    var menor = 1000
    for (var x = 0; x < velocidadeCavalos.length; x++) {
        if (velocidadeCavalos[x] < menor) {
            menor = velocidadeCavalos[x]
        }
    }
    var segundoMenor = 1000
    for (var x = 0; x < velocidadeCavalos.length; x++) {
        if (velocidadeCavalos[x] < segundoMenor && velocidadeCavalos[x] != menor) {
            segundoMenor = velocidadeCavalos[x]
        }
    }
    var terceiroMenor = 1000
    for (var x = 0; x < velocidadeCavalos.length; x++) {
        if (velocidadeCavalos[x] < terceiroMenor && velocidadeCavalos[x] != menor && velocidadeCavalos[x] != segundoMenor) {
            terceiroMenor = velocidadeCavalos[x]
        }
    }


    console.log(menor)
    console.log(segundoMenor)
    console.log(terceiroMenor)

    var novoVetor = []

    novoVetor.push(menor)
    novoVetor.push(segundoMenor)
    novoVetor.push(terceiroMenor)

    var contadorColocados = 1

    for (var x = 0; x < novoVetor.length; x++) {
        for (var y = 0; y < cavalos.length; y++) {
            if (cavalos[y].velocidadeTotal == novoVetor[x]) {
                cavalos[y].posicao = contadorColocados
                contadorColocados++
            }


        }
    }


    var string1 = ""
    var string2 = ""
    var string3 = ""
    for (var x = 0; x < cavalos.length; x++) {
        if (cavalos[x].posicao == 2) {
            string2 = `Em 2º Lugar – ${cavalos[x].nome}. Velocidade:${cavalos[x].velocidadeTotal.toFixed(2)}<br>`
        }
        if (cavalos[x].posicao == 1) {
            string1 = `Em 1º Lugar – ${cavalos[x].nome}. Velocidade:${cavalos[x].velocidadeTotal.toFixed(2)}<br>`
        }
        if (cavalos[x].posicao == 3) {
            string3 = `Em 3º Lugar – ${cavalos[x].nome}. Velocidade:${cavalos[x].velocidadeTotal.toFixed(2)}<br>`
        }
    }
    resultado2.innerHTML = `${string1} ${string2} ${string3}`


}

function ranking(params) {
    buttonranking.style.display = "none"
    resultado2.style.display = "flex"  
    resultado.style.display = "none" 
}