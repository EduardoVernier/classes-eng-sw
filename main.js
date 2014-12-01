LISTA_FORNECEDORES = [];
LISTA_ESTUDANTES = [];
LISTA_CATEGORIAS = ["Impressoras", "Cafeteiras", "Máquinas de Lavar Roupa", "Televisores", "Geladeiras", "Fogões", "Sofás"]; 
CARRINHO = [];

LISTA_FORNECEDORES.push (new Fornecedor({
	"nome":"Alistinho moveis",
	"id": 123,
	"nomeFuncResponsavel": "Alistinho",
	"telefone": "51 3232 3232",
	"email": "alistinho@bol.com"
}));

LISTA_FORNECEDORES.push (new Fornecedor({
	"nome":"Allezinho Moveis SA",
	"id": 456,
	"nomeFuncResponsavel": "Allezinho",
	"telefone": "51 3232 1212",
	"email": "allezinho@pop.com"
}));

LISTA_ESTUDANTES.push(new Estudante ({
	"nome":"Alistinho",
	"email":"alistinho@bol.com",
	"telefone": "51 3232 3232",
	"univOrigem": "UFRGS",
	"univDestino": "INP Grenoble",
	"enderecoOrigem": {"line1":"Av. Borges de Medeiros", "line2":"123", "line3": "11A"},
	"enderecoDestino": {"line1":"Bla bli", "line2":"blu", "line3": "bli"}
}));

var CATALOGO = new Catalogo(); 

CATALOGO.adicionaItem (new Item(
	{"id": 99, 
	"nome":"Impressora HP 123", 
	"descricao":"Bege e lenta.",
	"categoria": "Impressoras", 
	"qtdDisponivel": 2, 
	"previsaoEntrega": new Date(2015, 2, 28),
	"preco": 12.90,
	"fornecedorId": 123
}));

CATALOGO.adicionaItem (new Item(
	{"id": 100, 
	"nome":"Cafeteira Nestle A++", 
	"descricao":"Parece um robozinho.",
	"categoria": "Cafeteiras", 
	"qtdDisponivel": 1, 
	"previsaoEntrega": new Date(2015, 3, 26),
	"preco": 10.00,
	"fornecedorId": 456
}));


CATALOGO.adicionaItem (new Item(
	{"id": 101, 
	"nome":"Cafeteira Bom Jesus", 
	"descricao":"Cafeteira que não parece um robozinho.",
	"categoria": "Cafeteiras", 
	"qtdDisponivel": 4, 
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 5.00,
	"fornecedorId": 123
}));

CATALOGO.adicionaItem (new Item(
	{"id": 102, 
	"nome":"Cafeteira Genérica", 
	"descricao":"Parece uma cafeteira.",
	"categoria": "Cafeteiras", 
	"qtdDisponivel": 10, 
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 3.00,
	"fornecedorId": 123
}));

CATALOGO.adicionaItem (new Item(
	{"id": 106, 
	"nome":"Fogão 4 bocas LG", 
	"descricao":"Fogão simples, faz comidinha boa.",
	"categoria": "Fogões", 
	"qtdDisponivel": 8, 
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 9.90,
	"fornecedorId": 123
}));

CATALOGO.adicionaItem (new Item(
	{"id": 107, 
	"nome":"Fogão 8 bocas LG", 
	"descricao":"Fogão elaborado, usado nas cozinhas do RU.",
	"categoria": "Fogões", 
	"qtdDisponivel": 2, 
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 23.90,
	"fornecedorId": 123
}));


CATALOGO.adicionaItem (new Item(
	{"id": 109, 
	"nome":"Televisor 22 polegadas HD", 
	"descricao":"Tv pequena",
	"categoria": "Televisores", 
	"qtdDisponivel": 3, 
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 10.90,
	"fornecedorId": 456
}));


CATALOGO.adicionaItem (new Item(
	{"id": 110, 
	"nome":"Televisor 42 polegadas HD", 
	"descricao":"Tv grande",
	"categoria": "Televisores", 
	"qtdDisponivel": 4, 
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 30.90,
	"fornecedorId": 456
}));


CATALOGO.adicionaItem (new Item(
	{"id": 111, 
	"nome":"Televisor 92 polegadas IMAX", 
	"descricao":"Tv bem grande",
	"categoria": "Televisores", 
	"qtdDisponivel": 2, 
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 130.90,
	"fornecedorId": 456
}));

CATALOGO.adicionaItem (new Item(
	{"id": 117, 
	"nome":"Geladeira simples", 
	"descricao":"Bege e feia. Pode não funcionar.",
	"categoria": "Geladeiras", 
	"qtdDisponivel": 7, 
	"previsaoEntrega": new Date(2015, 3, 26),
	"preco": 19.90,
	"fornecedorId": 123
}));

CATALOGO.adicionaItem (new Item(
	{"id": 118, 
	"nome":"Geladeira autografada pela Ana Maria Braga", 
	"descricao":"Linda, mais você.",
	"categoria": "Geladeiras", 
	"qtdDisponivel": 2, 
	"previsaoEntrega": new Date(2015, 3, 26),
	"preco": 39.90,
	"fornecedorId": 123
}));


CATALOGO.adicionaItem (new Item(
	{"id": 119, 
	"nome":"Geladeiritta Romero Britto", 
	"descricao":"Bem colorida.",
	"categoria": "Geladeiras", 
	"qtdDisponivel": 1, 
	"previsaoEntrega": new Date(2015, 3, 26),
	"preco": 79.90,
	"fornecedorId": 456
}));

CATALOGO.adicionaItem (new Item(
	{"id": 120, 
	"nome":"Sofazitto Romero Britto", 
	"descricao":"Bem colorido.",
	"categoria": "Sofás", 
	"qtdDisponivel": 1, 
	"previsaoEntrega": new Date(2015, 3, 26),
	"preco": 59.90,
	"fornecedorId": 456
}));

CATALOGO.adicionaItem (new Item(
	{"id": 121, 
	"nome":"Sofá de couro", 
	"descricao":"Grudento.",
	"categoria": "Sofás", 
	"qtdDisponivel": 1, 
	"previsaoEntrega": new Date(2015, 3, 26),
	"preco": 19.90,
	"fornecedorId": 456
}));


CATALOGO.getItemPorFornecedorId(123)[0].getId()
CATALOGO.getItemPorFaixaDePreco(0,100)[0].getId()

LISTA_FORNECEDORES[0].adicionarAvaliacao(new Avaliacao(5, "Entregador super gato. Recomendo."));

console.log(CATALOGO.getItemPorId(99).getQtdDisponivel());
var IA1 = new ItemAluguel (CATALOGO.getItemPorId(99), 1);
console.log(CATALOGO.getItemPorId(99).getQtdDisponivel());

var IA2 = new ItemAluguel (CATALOGO.getItemPorId(100), 1);

var A1 = new Aluguel ();
A1.adicionaItemAluguel(IA1);
console.log(A1.getTotal());
A1.adicionaItemAluguel(IA2);
console.log(A1.getTotal());

LISTA_ESTUDANTES[0].adicionaAluguel(A1);
LISTA_ESTUDANTES[0].getAlugueis()[0].getTotal()