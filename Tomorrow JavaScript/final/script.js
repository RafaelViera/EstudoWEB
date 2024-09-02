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

    let image = document.getElementById(nomeID)
    image.src = resposta.image

    let favoritaButton;
    if(nomeID == "personagem01"){
        favoritaButton = document.getElementById("favorita-personagem01")
        
    }else{
        favoritaButton = document.getElementById("favorita-personagem02")
    }
    favoritaButton.onclick = () => favoritar(resposta.name, resposta.image)


    prim.appendChild(image)
}

async function randomizar(nomeID) {
    let random3 = Math.ceil(Math.random() * (200 - 1) + 1)
    let personagem;
    
    let image = document.getElementById(nomeID)
    if(nomeID == "personagem01"){
        personagem = await geraPersonagem(random3).then((resposta) => {
            renderizaPersonagem(resposta,"personagem01")
            image.src = resposta.image
        })
        
    }else{
        personagem = await geraPersonagem(random3).then((resposta) => {
            renderizaPersonagem(resposta,"personagem02")
            image.src = resposta.image
        })
    }
}

async function favoritar(nome, imagem) {
    console.log(nome, imagem)

    const objetoP = {
        nome: nome,
        imagem: imagem,
    }

    console.log(objetoP)

    fetch(`http://localhost:3000/create`, {
        method: "POST",                      
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objetoP),
    });      
}

// function favoritar(id) {
//     fetch(`https://rickandmortyapi.com/api/character/${id}`, {
//         method: "POST",                      
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data_to_add),
//       });      
//}

let random = Math.ceil(Math.random() * (200 - 1) + 1)
let random2 = Math.ceil(Math.random() * (200 - 1) + 1)

geraPersonagem(random).then((resposta) => {
    renderizaPersonagem(resposta,"personagem02")
})

geraPersonagem(random2).then((resposta) => {
    renderizaPersonagem(resposta,"personagem01")
})