let tamanhoPista = prompt(); //200
let distanciaPercorrida = prompt(); //1100

tamanhoPista = Number(tamanhoPista);
distanciaPercorrida = Number(distanciaPercorrida)

if (tamanhoPista >= distanciaPercorrida){
    console.log(distanciaPercorrida);
} else {
    const result = (distanciaPercorrida % tamanhoPista) 
    console.log(result);
}