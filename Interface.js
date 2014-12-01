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
			h4Price.innerHTML = "R$"+_item.getPreco().toFixed(2);;
			newDiv.appendChild(h4Price); 

			var h4Id =document.createElement("h4");
			h4Id.className = "idTag";
			h4Id.innerHTML = "ID"+_item.getId();
			newDiv.appendChild(h4Id); 

			var h4FId =document.createElement("h4");
			h4FId.className = "idTag";
			h4FId.innerHTML = "FID"+_item.getFornecedorId();
			newDiv.appendChild(h4FId); 

			var add = document.createElement("a");
			add.innerHTML = "Adicionar ao Carrinho";
			add.className = "addCarrinho"
			newDiv.appendChild(add);

			newDiv.appendChild(document.createElement("hr"));
			var currentDiv = document.getElementById("containerProdutos");
			currentDiv.appendChild(newDiv);  
		}
	},

	"escondeTodosItens": function (){
		var myNode = document.getElementById("containerProdutos");
		while (myNode.firstChild) {
	    	myNode.removeChild(myNode.firstChild);
		}
		var area = document.createElement("p");
		area.innerHTML = "Área do Fornecedor";
		area.id = "area"
		myNode.appendChild(area);

	},

	"mostraTodosItens": function (){
		Interface.escondeTodosItens();
		for (var i = 0; i < CATALOGO.getTamanhoCatalogo(); i++)
			Interface.mostraItem(CATALOGO.getItemPorIndice(i));
		addToCartClick();
		priceRangeListener();
		fornecAreaListener();
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
		Interface.escondeTodosItens();
		for (var i = 0; i < CATALOGO.getTamanhoCatalogo(); i++)
			if (CATALOGO.getItemPorIndice(i).getCategoria() == _cat)
				Interface.mostraItem(CATALOGO.getItemPorIndice(i));
		addToCartClick();
		priceRangeListener();
		fornecAreaListener();	
	},

	"adicionaAoCarrinho": function (_item){
		CARRINHO.push(_item);

		var newDiv = document.createElement("div");
		newDiv.className = "itemDiv";

		var h4Name =document.createElement("p");
		h4Name.className = "itemCarrinho";
		h4Name.innerHTML = _item.getNome();
		newDiv.appendChild(h4Name);

		var currentDiv = document.getElementById("carrinho");
		currentDiv.appendChild(newDiv);  
	},

	"mostraAreaFornec": function(){
		var currentDiv = document.getElementById("containerProdutos");
		var newDiv = document.createElement("div");
		newDiv.style.position = "relative";
		newDiv.style.top = "100px";
		var newLogin = document.createElement("h2");
		newLogin.innerHTML = "Criar novo login";
		newLogin.id = "newFornec";
		newDiv.appendChild(newLogin);


		var newItem = document.createElement("h2");
		newItem.innerHTML = "Catalogar novo item";
		newItem.id = "addNewItem";
		newDiv.appendChild(newItem);

		var consult = document.createElement("h2");
		consult.innerHTML = "Consultar meus itens";
		newDiv.appendChild(consult);

		currentDiv.appendChild(newDiv);

		document.getElementById("addNewItem").addEventListener("click", function() {
			Interface.escondeTodosItens();
			Interface.mostraFormFornec();
		});

		document.getElementById("newFornec").addEventListener("click", function() {
			Interface.escondeTodosItens();
			Interface.mostraNovoFornec();
		});


	},

	"mostraFormFornec": function(){
		var form = document.createElement("form");

		var idText = document.createElement("p");
		idText.innerHTML = "ID do Fornecedor: ";
		var id = document.createElement("input");
		id.type = "text";
		form.appendChild(idText);
		form.appendChild(id);
		form.appendChild(document.createElement("br"));

		var pwText = document.createElement("p");
		pwText.innerHTML = "Senha: ";
		var pw = document.createElement("input");
		pw.type = "password";
		form.appendChild(pwText);
		form.appendChild(pw);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("hr"));
		form.appendChild(document.createElement("br"));

		var nomeText = document.createElement("p");
		nomeText.innerHTML = "Nome do novo item: ";
		var nome = document.createElement("input");
		nome.type = "text";
		form.appendChild(nomeText);
		form.appendChild(nome);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));


		var descrText = document.createElement("p");
		descrText.innerHTML = "Descrição do produto: ";
		var descr = document.createElement("textarea");
		descr.rows = 5;
		form.appendChild(descrText);
		form.appendChild(descr);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));


		var qtdText = document.createElement("p");
		qtdText.innerHTML = "Quantidade disponível: ";
		var qtd = document.createElement("input");
		qtd.type = "text";
		form.appendChild(qtdText);
		form.appendChild(qtd);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));

		var catText = document.createElement("p");
		catText.innerHTML = "Categoria do produto: ";
		var cat = document.createElement("input");
		cat.type = "text";
		form.appendChild(catText);
		form.appendChild(cat);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));


		var precoText = document.createElement("p");
		precoText.innerHTML = "Mensalidade (R$/mês): ";
		var preco = document.createElement("input");
		preco.type = "text";
		form.appendChild(precoText);
		form.appendChild(preco);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));

		var submit = document.createElement("input");
		submit.type = "button";
		submit.value = "Submeter";
		submit.addEventListener("click", function() {
			var f = document.getElementById("form");
			var newItem = new Item({ 
				"nome":f.elements[2].value, 
				"descricao":f.elements[3].value,
				"categoria": f.elements[5].value, 
				"qtdDisponivel": parseInt(f.elements[4].value), 
				"preco": parseFloat(f.elements[6].value),
				"fornecedorId": parseInt(f.elements[0].value)
			})
			CATALOGO.adicionaItem (newItem);
			Interface.mostraTodosItens();
			fornecAreaListener();
		});
		form.appendChild(submit);

		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));
		form.id = "form";


		var currentDiv = document.getElementById("containerProdutos");
		currentDiv.appendChild(form);

	},

	"mostraNovoFornec": function(){
		var form = document.createElement("form");


		var nomeText = document.createElement("p");
		nomeText.innerHTML = "Nome da empresa fornecedora: ";
		var nome = document.createElement("input");
		nome.type = "text";
		form.appendChild(nomeText);
		form.appendChild(nome);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));

		var pwText = document.createElement("p");
		pwText.innerHTML = "Senha: ";
		var pw = document.createElement("input");
		pw.type = "password";
		form.appendChild(pwText);
		form.appendChild(pw);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("hr"));
		form.appendChild(document.createElement("br"));

		var nomeText = document.createElement("p");
		nomeText.innerHTML = "Nome do responsável: ";
		var nome = document.createElement("input");
		nome.type = "text";
		form.appendChild(nomeText);
		form.appendChild(nome);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));


		var telText = document.createElement("p");
		telText.innerHTML = "Telefone: ";
		var tel = document.createElement("input");
		tel.type = "text";
		form.appendChild(telText);
		form.appendChild(tel);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));

		var emailText = document.createElement("p");
		emailText.innerHTML = "Email: ";
		var email = document.createElement("input");
		email.type = "text";
		form.appendChild(emailText);
		form.appendChild(email);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));

		var submit = document.createElement("input");
		submit.type = "button";
		submit.value = "Submeter";
		submit.addEventListener("click", function() {
			var f = document.getElementById("form");
			var newFornec = new Fornecedor(
				{"id": 124, 
				"nome":f[0].value, 
				"nomeFuncResponsavel":f[2].value,
				"telefone": f[3].value, 
				"email": f[4].value 
			});
			LISTA_FORNECEDORES.push(newFornec);
			alert("Seu ID é "+ newFornec.getId());
			Interface.mostraTodosItens();
			fornecAreaListener();
		});
		form.appendChild(submit);

		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));
		form.id = "form";
		var currentDiv = document.getElementById("containerProdutos");
		currentDiv.appendChild(form);

	}
};