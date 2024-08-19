//rodada 1
l1 = prompt();
p1 = prompt();

//rodada 2
l2 = prompt();
p2 = prompt();

//rodada 3
l3 = prompt();
p3 = prompt();

l1 = parseInt(l1);
l2 = parseInt(l2);
l3 = parseInt(l3);
p1 = parseInt(p1);
p2 = parseInt(p2);
p3 = parseInt(p3);

pontLucas = l1 + l2 + l3
pontPedro = p1 + p2 + p3

if (pontLucas > pontPedro){
    console.log("Lucas")
} else if ( pontPedro > pontLucas) {
    console.log("Pedro")
} else {
    console.log("Empate")
}