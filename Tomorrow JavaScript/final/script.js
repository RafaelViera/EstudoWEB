const seg = document.getElementById("seg")
async function geraPokemon(id){
    let dataFetched;

    let buttonFavorite = document.createElement("button")
    buttonFavorite.onclick = () => {favoritar(id)}
    buttonFavorite.textContent = "Favoritar Pokemon"

    seg.appendChild(buttonFavorite)

    dataFetched = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => console.error('Erro:', error));
    return dataFetched
}

function renderizaPokemon(resposta){
    let image = document.createElement("img")
    image.src = resposta.sprites.front_default

    prim.appendChild(image)
}

async function randomizar(nomeID) {
    let random3 = Math.ceil(Math.random() * (200 - 1) + 1)
    const poke = await geraPokemon(random3)

    let image = document.getElementById(nomeID)
    image.src = poke.sprites.front_default
}

function favoritar(id) {
    console.log(id)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
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

const prim = document.getElementById("prim")

let random = Math.ceil(Math.random() * (200 - 1) + 1)
let random2 = Math.ceil(Math.random() * (200 - 1) + 1)

geraPokemon(random).then((resposta) => {
    renderizaPokemon(resposta)
})

geraPokemon(random2).then((resposta) => {
    renderizaPokemon(resposta)
})