const dir1 = prompt();
const dir2 = prompt();

if (dir1 == "direita" && dir2 == "esquerda"){
    console.log("Achou")
} else if (dir1 == "esquerda" && dir2 == "esquerda") {
    console.log("MOrreu")
} else {
    console.log("Tente novamente")
}