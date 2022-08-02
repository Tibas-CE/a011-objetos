const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log("Original", pokemon1);

// Questão a
const copiaPokemon1 = {...pokemon1};
copiaPokemon1.nome = "Squirtle";
copiaPokemon1.tipo = "Água";
console.log("Cópia", copiaPokemon1);

// Questão b
pokemon1.ataques = [];
const poder = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
};
pokemon1.ataques.push(poder);
//console.log("Adicionando array com 1 objeto ao original", pokemon1);

//Questão c
copiaPokemon1.ataques = [...pokemon1.ataques];
//console.log("Adicionando array a cópia",copiaPokemon1);

//Questão d
const poder0 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
};
pokemon1.ataques.push(poder0);
//console.log("Adicionando objeto na array ataques (original)", pokemon1);

//Questão e
const poder1 = {
    nome: "Jato de àgua",
    dano: 40,
    tipo: "Água",
    precisao: 100
};
copiaPokemon1.ataques.push(poder1);
//console.log("Adicionando objeto na array ataques (cópia)", copiaPokemon1);

//Questão f
console.log("Alterações no original", pokemon1);
console.log("Alterações na cópia", copiaPokemon1);