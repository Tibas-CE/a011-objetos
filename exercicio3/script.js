const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log("Original", pokemon1);

// Questão a
copiaPokemon = {...pokemon1};
copiaPokemon.nome = "Squirtle";
copiaPokemon.tipo = "Água";
console.log("Cópia", copiaPokemon);

// Questão b
pokemon1.ataques = [];
const poder = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
};
pokemon1.ataques.push(poder);

//Questão c
copiaPokemon = {...pokemon1.ataques};
console.log(copiaPokemon);

//Questão d
const poder0 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
};
pokemon1.ataques.push(poder0);

//Questão e
const poder1 = {
    nome: "Jato de àgua",
    dano: 40,
    tipo: "Água",
    precisao: 100
};
copiaPokemon.ataques.push(poder1);
console.log("copia", copiaPokemon);