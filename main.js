LISTA_FORNECEDORES = [];
LISTA_ESTUDANTES = [];
LISTA_ITEMS = []; // mover para Catalogo?

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

LISTA_ITEMS.push (new Item(
	{"id":213123, 
	"nome":"Impressora HP 123", 
	"descricao":"Bege e lenta.", 
	"qtdDisponivel": 2, 
	"previsaoEntrega": new Date(2015, 2, 28),
	"preco": 12.90,
	"fornecedorId": 123
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



