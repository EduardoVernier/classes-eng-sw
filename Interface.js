// Acts as a namespace for UI
var Interface = {
	"mostraItem": function (_item){
		var lb = parseInt(document.getElementById("lbInput").value);
		var ub = parseInt(document.getElementById("ubInput").value);
		ub = ub > 0 ? ub: Infinity;

		if (lb < _item.getPreco() && ub > _item.getPreco())
		{
			var newDiv = document.createElement("div");
			newDiv.className = "itemDiv";

			var h4Name =document.createElement("h4");
			h4Name.className = "nomeItem";
			h4Name.innerHTML = _item.getNome();
			newDiv.appendChild(h4Name); 

			var h4Price =document.createElement("h4");
			h4Price.className = "precoItem";
			h4Price.innerHTML = "R$"+_item.getPreco();
			newDiv.appendChild(h4Price); 

			var h4Id =document.createElement("h4");
			h4Id.className = "idTag";
			h4Id.innerHTML = "ID"+_item.getId();
			newDiv.appendChild(h4Id); 

			var add = document.createElement("a");
			add.innerHTML = "Adicionar ao Carrinho";
			add.style.float = "right"
			newDiv.appendChild(add);

			newDiv.appendChild(document.createElement("hr"));
			var currentDiv = document.getElementById("containerProdutos");
			currentDiv.appendChild(newDiv);  
		}
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
	},

	"adicionaAoCarrinho": function (_item){
		CARRINHO.push(_item);

		var newDiv = document.createElement("div");
		newDiv.className = "itemDiv";

		var h4Name =document.createElement("h4");
		h4Name.className = "idTag";
		h4Name.innerHTML = _item.getNome();
		newDiv.appendChild(h4Name);

		var currentDiv = document.getElementById("carrinho");
		currentDiv.appendChild(newDiv);  



	}
};