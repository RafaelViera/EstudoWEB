let quantNuvem = prompt();
let quantNevoa = prompt();
let quantPedra = prompt();
let quantAreia = prompt();
let quantInimigos = prompt();

quantNuvem = parseInt(quantNuvem);
quantNevoa = parseInt(quantNevoa);
quantPedra = parseInt(quantPedra);
quantAreia = parseInt(quantAreia);
quantInimigos = parseInt(quantInimigos);

console.log(quantInimigos - (quantNuvem+quantNevoa+quantPedra+quantAreia))