async function geraPersonagem(id){
    let dataFetched;

    dataFetched = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => console.error('Erro:', error));
    return dataFetched
}

function renderizaPersonagem(resposta, nomeID){
    let prim = document.getElementById("prim")

    let image = document.createElement("img")
    image.src = resposta.image
    image.setAttribute("id", nomeID)

    prim.appendChild(image)
}

async function randomizar(nomeID) {
    let random3 = Math.ceil(Math.random() * (200 - 1) + 1)
    const personagem = await geraPersonagem(random3)

    let image = document.getElementById(nomeID)
    image.src = personagem.image
}

function favoritar(id) {
    console.log(id)
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        fetch("https://localhost:3000/create", {""
        method: "POST",                      
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => result.json())
      .then((data) => console.log(data)) 
    })
}

let random = Math.ceil(Math.random() * (200 - 1) + 1)
let random2 = Math.ceil(Math.random() * (200 - 1) + 1)

geraPersonagem(random).then((resposta) => {
    renderizaPersonagem(resposta,"personagem02")
})

geraPersonagem(random2).then((resposta) => {
    renderizaPersonagem(resposta,"personagem01")
})