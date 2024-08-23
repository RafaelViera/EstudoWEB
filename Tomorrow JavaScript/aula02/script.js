function adicionar() {
    const rep = document.getElementById("quantidade").value
    console.log(rep)
    for (let i=0 ; i < rep; i++) {
        let lista = document.getElementById("lista")
        let descricao = document.getElementById("descricao").value

        let elemento = document.createElement("li")

        console.log(elemento)
        elemento.textContent = descricao
    
        lista.appendChild(elemento)
    }  
}

function limpar() {
    let ul = document.getElementById("lista")
    let pai = ul.parentNode
    
    ul.remove()
    
    novaLista = document.createElement("ul")
    novaLista.id = "lista"

    pai.appendChild(novaLista)
}

function removerPrimeiro() {
    let ul = document.getElementById("lista")
    let primeiroFilho = ul.firstChild
    primeiroFilho.remove()
}