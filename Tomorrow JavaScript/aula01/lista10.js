let nome = prompt();
let idade = prompt();
let bussola = prompt();
let mapa = prompt();
let po = prompt();
let espada = prompt();

idade = parseInt(idade);
let condicao = true

if (idade <= 12) {
    console.log("Não possui idade minima;")
    condicao = false
}

if (bussola != "1") {
    console.log("Não possui bussola;")
    condicao = false
}

if (mapa != "1") {
    console.log("Não possui mapa do tesouro;")
    condicao = false
}

if (po != "1") {
    console.log("Não possui po magico;")
    condicao = false
}

if (espada != "1") {
    console.log("Não possui espada magica;")
    condicao = false
}

if (condicao) {
    console.log("Condicoes, ok!")
} else {
    console.log("Nao cumpre as condicoes!")
}