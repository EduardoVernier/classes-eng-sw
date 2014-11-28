function Estudante(obj){
	var nome;
	var email;
	var telefone;
	var univOrigem;
	var univDestino;
	var enderecoOrigem;
	var enderecoDestino;
	var alugueis = [];
	
	function inicializa(){
		if (obj === undefined)
			return false;
		
		if ((obj.nome && obj.email && obj.telefone && obj.univOrigem && obj.univDestino && obj.enderecoOrigem && obj.enderecoDestino) === undefined)
			return false;
			
		return (   setNome(obj.nome)
				&& setEmail(obj.email)
				&& setTelefone(obj.telefone)
				&& setUnivOrigem(obj.univOrigem)
				&& setUnivDestino(obj.univDestino)
				&& setEnderecoOrigem(obj.enderecoOrigem)
				&& setEnderecoDestino(obj.enderecoDestino));			
	};
	if (!inicializa()) return false;
	
	return {
		"setNome": setNome,
		"getNome": function (){ return nome;},
		"setEmail": setEmail,
		"getEmail": function (){ return email;},
		"setTelefone": setTelefone,
		"getTelefone": function (){ return telefone;},
		"setUnivOrigem": setUnivOrigem,
		"getUnivOrigem": function(){ return univOrigem;},
		"setUnivDestino": setUnivDestino,
		"getUnivDestino": function(){ return univDestino;},
		"setEnderecoOrigem": setEnderecoOrigem,
		"getEnderecoOrigem": function(){ return enderecoOrigem.getEndereco();},
		"setEnderecoDestino": setEnderecoDestino,
		"getEnderecoDestino": function(){ return enderecoDestino.getEndereco();},
		"adicionaAluguel": adicionaAluguel,
		"getAlugueis": function(){return alugueis;}		
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
	
	function setUnivOrigem(_uni){
		univOrigem = _uni;
		return true;
	};
	
	function setUnivDestino(_uni){
		univDestino = _uni;
		return true;
	};	
	
	function setEnderecoOrigem(_end){
		enderecoOrigem = new Endereco(_end);
		return true;
	};
	
	function setEnderecoDestino(_end){
		enderecoDestino = new Endereco(_end);
		return true;
	};

	function adicionaAluguel (_aluguel){
		alugueis.push(_aluguel);
	}
};

/*
var e1 = new Estudante ({
	"nome":"Alistinho",
	"email":"alistinho@bol.com",
	"telefone": "51 3232 3232",
	"univOrigem": "UFRGS",
	"univDestino": "INP Grenoble",
	"enderecoOrigem": {"line1":"Av. Borges de Medeiros", "line2":"123", "line3": "11A"},
	"enderecoDestino": {"line1":"Bla bli", "line2":"blu", "line3": "bli"}
});
*/



