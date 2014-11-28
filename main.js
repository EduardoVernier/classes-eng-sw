LISTA_FORNECEDORES = [];
LISTA_ESTUDANTES = [];
LISTA_CATEGORIAS = ["Impressoras", "Cafeteiras"]; 

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
	"previsaoEntrega": new Date(2015, 2, 26),
	"preco": 5.00,
	"fornecedorId": 123
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