LISTA_FORNECEDORES = [];
LISTA_ESTUDANTES = [];
LISTA_CATEGORIAS = ["Impressoras", "Cafeteiras", "Máquinas de Lavar Roupa", "Televisores", "Geladeiras", "Fogões", "Sofás"]; 
CARRINHO = [];
CATEGORIA_SELECIONADA = "";
ULTIMO_FORNECEDOR_ID = 0;
ULTIMO_ITEM_ID = 0;


LISTA_FORNECEDORES.push (new Fornecedor({
	"nome":"Alistinho moveis",
	"nomeFuncResponsavel": "Alistinho",
	"telefone": "51 3232 3232",
	"email": "alistinho@bol.com"
}));

LISTA_FORNECEDORES.push (new Fornecedor({
	"nome":"Allezinho Moveis SA",
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

CATALOGO.adicionaItem (new Item({	
		"nome":"Impressora HP 123", 
		"descricao":"Bege e lenta.",
		"categoria": "Impressoras", 
		"qtdDisponivel": 2, 
		"preco": 12.90,
		"fornecedorId": 0
}));

CATALOGO.adicionaItem (new Item({
	"nome":"Cafeteira Nestle A++", 
	"descricao":"Parece um robozinho.",
	"categoria": "Cafeteiras", 
	"qtdDisponivel": 1, 
	"preco": 10.00,
	"fornecedorId": 1
}));


CATALOGO.adicionaItem (new Item({ 
	"nome":"Cafeteira Bom Jesus", 
	"descricao":"Cafeteira que não parece um robozinho.",
	"categoria": "Cafeteiras", 
	"qtdDisponivel": 4, 
	"preco": 5.00,
	"fornecedorId": 0
}));

CATALOGO.adicionaItem (new Item({
	"nome":"Cafeteira Genérica", 
	"descricao":"Parece uma cafeteira.",
	"categoria": "Cafeteiras", 
	"qtdDisponivel": 10, 
	"preco": 3.00,
	"fornecedorId": 0
}));

CATALOGO.adicionaItem (new Item({ 
	"nome":"Fogão 4 bocas LG", 
	"descricao":"Fogão simples, faz comidinha boa.",
	"categoria": "Fogões", 
	"qtdDisponivel": 8, 
	"preco": 9.90,
	"fornecedorId": 0
}));

CATALOGO.adicionaItem (new Item({ 
	"nome":"Fogão 8 bocas LG", 
	"descricao":"Fogão elaborado, usado nas cozinhas do RU.",
	"categoria": "Fogões", 
	"qtdDisponivel": 2, 
	"preco": 23.90,
	"fornecedorId": 1
}));


CATALOGO.adicionaItem (new Item({
	"nome":"Televisor 22 polegadas HD", 
	"descricao":"Tv pequena",
	"categoria": "Televisores", 
	"qtdDisponivel": 3, 
	"preco": 10.90,
	"fornecedorId": 1
}));


CATALOGO.adicionaItem (new Item({
	"nome":"Televisor 42 polegadas HD", 
	"descricao":"Tv grande",
	"categoria": "Televisores", 
	"qtdDisponivel": 4, 
	"preco": 30.90,
	"fornecedorId": 1
}));


CATALOGO.adicionaItem (new Item({ 
	"nome":"Televisor 92 polegadas IMAX", 
	"descricao":"Tv bem grande",
	"categoria": "Televisores", 
	"qtdDisponivel": 2, 
	"preco": 130.90,
	"fornecedorId": 0
}));

CATALOGO.adicionaItem (new Item({ 
	"nome":"Geladeira simples", 
	"descricao":"Bege e feia. Pode não funcionar.",
	"categoria": "Geladeiras", 
	"qtdDisponivel": 7, 
	"preco": 19.90,
	"fornecedorId": 0
}));

CATALOGO.adicionaItem (new Item({
	"nome":"Geladeira autografada pela Ana Maria Braga", 
	"descricao":"Linda, mais você.",
	"categoria": "Geladeiras", 
	"qtdDisponivel": 2, 
	"preco": 39.90,
	"fornecedorId": 0
}));


CATALOGO.adicionaItem (new Item({
	"nome":"Geladeiritta Romero Britto", 
	"descricao":"Bem colorida.",
	"categoria": "Geladeiras", 
	"qtdDisponivel": 1, 
	"preco": 79.90,
	"fornecedorId": 0
}));

CATALOGO.adicionaItem (new Item({
	"nome":"Sofazitto Romero Britto", 
	"descricao":"Bem colorido.",
	"categoria": "Sofás", 
	"qtdDisponivel": 1, 
	"preco": 59.90,
	"fornecedorId": 1
}));

CATALOGO.adicionaItem (new Item({
	"nome":"Sofá de couro", 
	"descricao":"Grudento.",
	"categoria": "Sofás", 
	"qtdDisponivel": 1, 
	"preco": 19.90,
	"fornecedorId": 1
}));


CATALOGO.getItemPorFornecedorId(1)[0].getId()
CATALOGO.getItemPorFaixaDePreco(0,100)[0].getId()

LISTA_FORNECEDORES[0].adicionarAvaliacao(new Avaliacao(5, "Entregador super gato. Recomendo."));

console.log(CATALOGO.getItemPorId(2).getQtdDisponivel());
var IA1 = new ItemAluguel (CATALOGO.getItemPorId(2), 1);
console.log(CATALOGO.getItemPorId(2).getQtdDisponivel());

var IA2 = new ItemAluguel (CATALOGO.getItemPorId(3), 1);

var A1 = new Aluguel ();
A1.adicionaItemAluguel(IA1);
console.log(A1.getTotal());
A1.adicionaItemAluguel(IA2);
console.log(A1.getTotal());

LISTA_ESTUDANTES[0].adicionaAluguel(A1);
LISTA_ESTUDANTES[0].getAlugueis()[0].getTotal()