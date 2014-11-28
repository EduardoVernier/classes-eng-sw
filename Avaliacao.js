function Avaliacao(_nota, _descricao){
	var nota =  isNaN(_nota)? undefined : _nota;
	var descricao = _descricao;

	return {
		"getNota": function (){ return nota;},
		"getDescricao": function(){ return descricao;}
	};
};