let string = ("Um texto");

console.log(string.concat(" em um lindo dia."));
console.log(string + " em um lindo dia");
console.log(`${string} em um lindo dia`);
console.log(string.indexOf("texto"));
console.log(string.lastIndexOf("texto")); // semelhante ao indexOf, mas começa a busca de trás pra frente 
console.log(string.search(/x/));
console.log(string.replace("Um", "Outro"));
console.log(string.replace("Um texto", "O rato roeu a roupa do Rei de Roma"));
console.log(string.length);
console.log(string.slice(2, 8));
console.log(string.split(" "));
console.log(string.toUpperCase());
console.log(string.toLowerCase());