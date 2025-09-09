function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = data.getDate(); // const dia = zeroAEsquerda (data.getDate());
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();

    return `${dia}/${mes}/${ano}/${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
console.log(data.toString(formataData))