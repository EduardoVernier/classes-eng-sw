function Catalogo(){
	var listaItens = [];

	return{
		"adicionaItem":adicionaItem,
		"getItemPorIndice": getItemPorIndice,
		"getItemPorId": getItemPorId,
		"getItemPorFornecedorId": getItemPorFornecedorId,
		"getItemPorFaixaDePreco": getItemPorFaixaDePreco,
		"getTamanhoCatalogo": function(){ return listaItens.length;}
	};

	function getItemPorId (_id){
		for (var i = 0; i < listaItens.length; i++)
		{
			if (_id === listaItens[i].getId())
				return listaItens[i];
		}
	}

	function getItemPorFaixaDePreco (_lb, _ub){
		var items = [];
		if (_lb < _ub){
			for (var i = 0; i < listaItens.length; i++)
			{
				if (listaItens[i].getPreco() >= _lb && listaItens[i].getPreco() <= _ub)
					items.push(listaItens[i]);
			}
		}
		return items;
	};

	function getItemPorFornecedorId (_id){
		var items = [];
		for (var i = 0; i < listaItens.length; i++)
		{
			if (_id === listaItens[i].getFornecedorId())
				items.push(listaItens[i]);
		}
		return items;
	};

	function getItemPorIndice (_index){
		return listaItens[_index];
	};

	function adicionaItem (_item){
		// Como saber se _item é do "tipo" Item?
		// isInstanceOf nao funciona com o pattern que estamos usando
		// Como fazer tipagem sem criar acoplamento?
		listaItens.push(_item);
	};
};