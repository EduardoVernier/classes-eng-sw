function ItemAluguel(_item, _quantidade){
	var item = _item;
	var quantidade = 0;
	var subtotal = 0;

	if ((_item.getQtdDisponivel()>= _quantidade)){
		quantidade = _quantidade;
		_item.setQtdDisponivel(_item.getQtdDisponivel()-_quantidade);
		subtotal = _quantidade*_item.getPreco();
	}

	return{
		"item": item,
		"quantidade": quantidade,
		"subtotal": subtotal
	};
};