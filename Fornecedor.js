// Same pattern from Item.js, look there if confused
function Fornecedor(obj){
	var nome;
	var id;
	var nomeFuncResponsavel;
	var telefone;
	var email;
	var avaliacoes = [];
	

	function inicializa(){
		if (obj === undefined)
			return false;

		if ((obj.id && obj.nome && obj.nomeFuncResponsavel && obj.telefone && obj.email) === undefined)
			return false;

		return (   setNome(obj.nome) 
				&& setId(obj.id)
				&& setResponsavel(obj.nomeFuncResponsavel)
				&& setTelefone(obj.telefone)
				&& setEmail(obj.email));
	};
	if (!inicializa()) return false;

	// Closure
	return {
		"setEmail": setEmail,
		"getEmail": function(){ return email;},
		"setId": setId,
		"getId": function(){ return id;},
		"setNome": setNome,
		"getNome": function(){ return nome;},
		"setResponsavel": setResponsavel,
		"getResponsavel": function(){ return nomeFuncResponsavel},
		"setTelefone": setTelefone,
		"getTelefone": function(){ return telefone;},
		"adicionarAvaliacao" : function (_aval){avaliacoes.push(_aval);},
		"getAvaliacoes": function(){ return avaliacoes;}

	}

	// Private methods
	function setId (_id) {
		if (isNaN(_id))
			return false;
		else
			id = _id;
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

	function setResponsavel(_nome){
		function validaNome (_nome) { return isNaN(_nome)};	
		if (validaNome(_nome)){
			nomeFuncResponsavel = _nome;
			return true;
		}
		else return false;
	};

	function setTelefone(_tel){
		// Create RegEx for international telefones later
		telefone = _tel;
		return true;
	};

	function setEmail(_email){
		function validateEmail() { 
  		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		return re.test(_email);
		};
		if (validateEmail(_email)){
			email = _email;
			return true;
		} else return false;
	};


};
/*
var f1 = new Fornecedor({
	"nome":"Alistinho moveis",
	"id": 214124,
	"nomeFuncResponsavel": "Alistinho",
	"telefone": "51 3232 3232",
	"email": "alistinho@bol.com"
});
*/
