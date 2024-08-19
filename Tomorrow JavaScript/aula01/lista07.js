let velocidadeAmarelo = prompt();
let velocidadeVermelho = prompt();
let distancia = prompt();

velocidadeAmarelo = parseInt(velocidadeAmarelo);
velocidadeVermelho = parseInt(velocidadeVermelho);
distancia = parseInt(distancia);

let resultado = (distancia)/(velocidadeAmarelo+velocidadeVermelho);

resultado = parseInt(resultado)

console.log(resultado)