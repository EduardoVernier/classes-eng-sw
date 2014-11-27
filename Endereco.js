function Endereco (obj){
	var line1;
	var line2;
	var line3;
	
	function inicializa(){
		if (obj === undefined)
			return false;
		
		line1 = obj.line1;
		line2 = obj.line2;
		line3 = obj.line3;
		return true;
	};
	if (!inicializa()) return false;
	
	return {
		"getEndereco": function (){
			return (line1 + '\n' + line2 + '\n'+ line3);		
		},
		"setEndereco": function(obj){
			line1 = obj.line1;
			line2 = obj.line2;
			line3 = obj.line3;
		}		
	};	
};
