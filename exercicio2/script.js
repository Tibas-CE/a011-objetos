const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
console.log(filme);

// Questão a
console.log(filme.elenco[0]);

// Questão b
console.log(filme.elenco[3]);

// Questão c
console.log(filme.transmissoesHoje);

//Questão d
console.log(filme.transmissoesHoje[1]);