function calcular() {
    let prim = document.getElementById("primeiro-valor").value
    let seg = document.getElementById("segundo-valor").value

    prim = parseFloat(prim)
    seg = parseFloat(seg)

    let escolha = document.getElementById("opcoes-calculo")
    
    if (escolha.value == "somar") { // SOMA
        let result = prim + seg

        let elemento = document.getElementById("saida-resposta")
        elemento.textContent = result 
        
    } else if (escolha.value == "subtrair") { // SUBTRAIR
        let result = prim - seg

        let elemento = document.getElementById("saida-resposta")
        elemento.textContent = result 

    } else if (escolha.value == "multiplicar") { // MULTIPLICAR
        let result = prim * seg

        let elemento = document.getElementById("saida-resposta")
        elemento.textContent = result 

    } else { // DIVIDIR
        let result = prim / seg

        let elemento = document.getElementById("saida-resposta")
        elemento.textContent = result 
    }
}

function limpar() {
    let prim = document.getElementById("primeiro-valor")
    let seg = document.getElementById("segundo-valor")
    let resposta = document.getElementById("saida-resposta")

    prim.value = ""
    seg.value = ""
    resposta.textContent = "ex: 01"
}