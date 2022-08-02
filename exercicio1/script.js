//Crie um array vazio chamado `sacolao`
const sacolao = [];

//Crie três objetos que vão representar frutas
const fruta = {
    nome: "Banana",
    preco: 5,
    disponibilidade: true
};
const fruta0 = {
    nome: "Laranja",
    preco: 2,
    disponibilidade: true
};
const fruta1 = {
    nome: "Uva",
    preco: 3,
    disponibilidade: false
};

//Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta, fruta0,fruta1);

//Imprima a o array `sacolao`
console.log(sacolao);