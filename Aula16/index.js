const alunos = ['Luiza', 'Maria', 'João']


/*
Const em Arrays e Objetos são mutaveis

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable. */
// console.log(alunos instanceof Array); - Responde se é um Array
// delete alunos[1]; - Remove sem mudar o Indice
// alunosshift(); - Remove do Começo.
// const removidos = alunos.pop/shift(); - Mostra quem foi removido
// alunos.pop(); - Remove o Último
// alunos.unshift('Luiz'); - Adiciona no Começo
// alunos.push('Otávio'); - Adiciona no Final
// alunos.push('Fábio');
// alunos[alunos.length] - Adiciona no Final
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Marcos';
// alunos[0] = 'Eduardo'; - Altera
// alunos[3] = 'Fábio'; - Adiciona
// console.log(alunos[2]); Acessa o Indice 