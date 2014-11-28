function Aluguel(){
	var itemsAlugados = [];
	var total = 0;
	return {
		"getItens": itemsAlugados,
		"getTotal": getTotal,
		"adicionaItemAluguel": adicionaItemAluguel
	};

	function adicionaItemAluguel(_ia){
		if (_ia.quantidade > 0)
			itemsAlugados.push(_ia);
		total =  getTotal();
	};

	function getTotal (){
		var total = 0;
		for (var i = 0; i < itemsAlugados.length; i++)
			total += itemsAlugados[i].subtotal;
		return total;
	};
};