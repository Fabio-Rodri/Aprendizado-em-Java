// For In 

const pessoa = {
    nome: "Fábio",
    sobrenome: "Aurélio",
    idade: 22
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

// For Of

const nome = "Fábio Aurélio";

for (let valor of nome){
    console.log(valor);
}

// For Clássico 

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

// Para Arrays[]: Qualquer um funciona 
// Para Objetos: For Of não da pra ser utilizado
// For Clássico:(Array ou Strings)
// For In: (Strings, Arrays ou Objetos) 
// For Of: (iteraveis, Arrays ou Strings)