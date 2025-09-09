// ...rest pega o restante dos números ! ...spread espalha

const numeros = [ [1, 2, 3], [4, 5, 6,], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros; 

console.log(lista3[2]);

// Atribuição via desestruturação (Arrays)

// Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: "Fábio",
    sobrenome: "Aurélio",
    idade: "22", 
    endereco: {
        rua: "Rua Inconfidência",
        numero: "270",
        bairro: "Vila Rica"
    }
};

const {nome, ...resto} = pessoa; 
console.log(nome, resto);