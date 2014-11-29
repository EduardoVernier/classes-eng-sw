window.onload = function(){
	mostraTodosItens();
}

// Extend array
Array.prototype.contains = function (v){
    return this.indexOf(v) > -1;
};

function mostraItem(_item){
	var newDiv = document.createElement("div"); 
	var str = _item.getNome() +"  R$"+ _item.getPreco();
	var newContent = document.createTextNode(str); 
	newDiv.appendChild(newContent); 

	var currentDiv = document.getElementById("containerProdutos");
	currentDiv.appendChild(newDiv);  
};

function escondeTodosItems(){
	var myNode = document.getElementById("containerProdutos");
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
	}
};

function mostraTodosItens(){
	for (var i = 0; i < CATALOGO.getTamanhoCatalogo(); i++)
		mostraItem(CATALOGO.getItemPorIndice(i));
};


//function mostraItensPorFornecedor(){
//};