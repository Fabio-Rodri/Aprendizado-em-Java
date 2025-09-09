const elementos = [
    {tag: 'p', texto: 2394134},
    {tag: 'div', texto: 'Teste 2'},
    {tag: 'section', texto: 'Teste 3'},
    {tag: 'footer', texto: 'Teste 4'},
]; 

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let CriarTag = document.createElement(tag);
    CriarTag.innerHTML = texto;
    div.appendChild(CriarTag);
}

container.appendChild(div);