/*
Fábio Aurélio Rodrigues tem 21 anos, pesa 76 kg 
tem 1.76 de altura e seu IMC é de 
Fábio nasceu em 2002 
*/
const nome = "Fábio";
const sobrenome = "Rodrigues";
const idade = 22;
const peso = 76
const alturaEmM = 1.76;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`)