const viadoSOuN = {
    nome1: 'Predenrique',
    viado1: 'ss viado',

    nome2: 'Aleco',
    viado2: 'nn viado',

    fala() {
        console.log(`O ${this.nome2} é viado? ${this.viado2}`);
        console.log(`O ${this.nome1} é viado? ${this.viado1}`);
    }
}

viadoSOuN.fala();