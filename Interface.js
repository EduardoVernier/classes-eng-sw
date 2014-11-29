// Acts as a namespace for UI
var Interface = {
	"mostraItem": function (_item){
		var newDiv = document.createElement("div"); 
		var str = _item.getNome() +"  R$"+ _item.getPreco();
		var newContent = document.createTextNode(str); 
		newDiv.appendChild(newContent); 

		var currentDiv = document.getElementById("containerProdutos");
		currentDiv.appendChild(newDiv);  
	},

	"escondeTodosItems": function (){
		var myNode = document.getElementById("containerProdutos");
		while (myNode.firstChild) {
	    	myNode.removeChild(myNode.firstChild);
		}
	},

	"mostraTodosItens": function (){
		for (var i = 0; i < CATALOGO.getTamanhoCatalogo(); i++)
			Interface.mostraItem(CATALOGO.getItemPorIndice(i));
	},

	"mostraCategorias": function (){
		for (var i=0; i < LISTA_CATEGORIAS.length; i++){
			var newDiv = document.createElement("h3"); 
				var str = LISTA_CATEGORIAS[i];
				var newContent = document.createTextNode(str); 
				newDiv.appendChild(newContent); 

				var currentDiv = document.getElementById("categorias");
				currentDiv.appendChild(newDiv); 		
		}
	},

	"mostraItensPorCategoria": function (_cat){
		Interface.escondeTodosItems();
		for (var i = 0; i < CATALOGO.getTamanhoCatalogo(); i++)
			if (CATALOGO.getItemPorIndice(i).getCategoria() == _cat)
				Interface.mostraItem(CATALOGO.getItemPorIndice(i));	
	}
};