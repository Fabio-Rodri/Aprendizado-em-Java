const pessoa1 = {
    nome: 'Fábio',
    sobrenome: 'Rodrigues',
    idade: 21,

    fala() {
        console.log(`A minha idade é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();

/* function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Fábio', 'Rodrigues', 21);
const pessoa2 = criaPessoa('Julia', 'Miranda', 19);
console.log(pessoa1.nome, pessoa2.nome)

/* const pessoa1 = {
    nome: 'Fábio',
    sobrenome: 'Aurélio',
    idade: 21
}; Objeto */