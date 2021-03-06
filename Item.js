function Item(obj){
	// Private fields
	var id;
	var nome;
	var descricao;
	var qtdDisponivel;
	var previsaoEntrega ;
	var preco;
	var categoria;
	var fornecedorId;

	// Constructor function
	function inicializa(){
		// Check for empty argument
		if (obj === undefined)
			return false;
		// Check for missing arguments
		if ((obj.nome && obj.descricao && obj.qtdDisponivel &&  obj.fornecedorId && obj.categoria) === undefined)
			return false;
		// Check for argument validity
		return (    setId()
					&& setNome(obj.nome)
					&& setDescricao(obj.descricao)
					&& setQtdDisponivel(obj.qtdDisponivel)
					&& setFornecedorId(obj.fornecedorId)
					&& setPreco(obj.preco)
					&& setCategoria(obj.categoria));
	}
	// If constructor data not valid, return false
	if (!inicializa()) return false;

	// Encapsulation via closures
	return {
		"getId": function(){ return id;},
		"getNome": function(){ return nome;},
		"setNome": setNome,
		"getDescricao": function(){ return descricao;},
		"setDescricao": setDescricao,
		"setQtdDisponivel": setQtdDisponivel,
		"getQtdDisponivel": function(){ return qtdDisponivel;},
		"getPrevisaoEntrega": function(){ return previsaoEntrega;},
		"setPrevisaoEntrega": setPrevisaoEntrega,
		"getPreco": function(){ return preco;},
		"setPreco": setPreco,
		"getFornecedorId": function(){ return fornecedorId;},
		"getCategoria": function(){ return categoria;}
	};

	// Private methods	
	function setCategoria (_cat){
		if(LISTA_CATEGORIAS.contains(_cat)){
			categoria = _cat;
			return true;
		}
		return false;
	};

	function setFornecedorId(_id){	
		var valido = false;	
		LISTA_FORNECEDORES.forEach(function(fornec){
			if (fornec.getId() == _id){
				fornecedorId = _id;
				valido = true;
			}
		});
		return valido;
	};

	function setId (_id) {
		id = ULTIMO_ITEM_ID++;
		return true;
	};
	
	// Public methods
	function setNome(_nome){
		function validaNome (_nome) { return isNaN(_nome)};	
		if (validaNome(_nome)){
			nome = _nome;
			return true;
		}
		else return false;
	};

	function setDescricao (_descricao){ descricao=_descricao; return true;};
	
	function setQtdDisponivel (_qtd) {
		if (isNaN(_qtd) || _qtd < 0){
			qtdDisponivel = NaN;
			return false;
		}
		else{
			qtdDisponivel = _qtd;
			return true;	
		}
	};

	function setPrevisaoEntrega(_data){
		if (_data > new Date()){
			previsaoEntrega = _data;
			return true;
		}
		else return false;
	};

	function setPreco(_preco) {
		if (isNaN(_preco) || _preco < 0){
			preco = NaN;
			return false;
		}
		else{
			preco = _preco;
			return true;	
		}
	};
};

/*
var hp123 =  new Item(
	{"id":213123, 
	"nome":"Impressora HP 123", 
	"descricao":"Bege e lenta.", 
	"qtdDisponivel": 2, 
	"previsaoEntrega": new Date(2015, 2, 28),
	"preco": 12.90});

var hp0 = new Item();
var hp1 = new Item({"id":10})
var hp2 =  new Item(
	{"id":"erro", 
	"nome":"Impressora HP 123", 
	"descricao":"Bege e lenta.", 
	"qtdDisponivel": 2, 
	"previsaoEntrega": new Date(2015, 2, 28),
	"preco": 12.90});
*/
