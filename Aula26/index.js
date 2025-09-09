// const data = new Date('2024-09-01 15:13:30'); Formato String mais Comum

const data = new Date (); // Ano, Mês, Dia, Horas, Minutos, Segundos e Milésimos 
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1); // Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 é domingo, 6 é sabado
console.log(data.toString());
console.log(Date.now());
