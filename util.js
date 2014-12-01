window.onload = function(){
	Interface.mostraTodosItens();
	LISTA_CATEGORIAS.sort();
	Interface.mostraCategorias();
	categoryClick();
//	addToCartClick();
	priceRangeListener();
	fornecAreaListener();
}

// Extend array
Array.prototype.contains = function (v){
    return this.indexOf(v) > -1;
};


// Trigger for category click 
function categoryClick(){
	if( document.getElementsByTagName('h3').length ){
		for( var n=0,m=document.getElementsByTagName('h3').length;n<m;n++ ){
			document.getElementsByTagName('h3')[n].addEventListener('click',function(e){ 
				CATEGORIA_SELECIONADA = e.path[0].innerHTML;
				Interface.mostraItensPorCategoria(e.path[0].innerHTML); 
				//addToCartClick();
			},false);
		}  
	}
};

// Trigger for add to cart click 
function addToCartClick(){
	if( document.getElementsByTagName('a').length ){
		for( var n=0,m=document.getElementsByTagName('a').length;n<m;n++ ){
			document.getElementsByTagName('a')[n].addEventListener('click',function(e){ 
				// Doesn't look too good
				var itemId = parseInt(e.path[1].children[2].innerHTML.substr(2))
				var item = (CATALOGO.getItemPorId(itemId));
				Interface.adicionaAoCarrinho(item);
			},false);
		}  
	}
};

// Might not be necessary
function priceRangeListener(){
	document.getElementById("lbInput").addEventListener("change", function(e){
		//alert(parseInt(this.value));
		if (CATEGORIA_SELECIONADA == ""){
			Interface.mostraTodosItens();
			addToCartClick();
		}
		else {
			Interface.mostraItensPorCategoria(CATEGORIA_SELECIONADA); 
			addToCartClick();		
		}
	});	

	document.getElementById("ubInput").addEventListener("change", function(e){
		//alert(parseInt(this.value));
				if (CATEGORIA_SELECIONADA == ""){
			Interface.mostraTodosItens();
			addToCartClick();
		}
		else {
			Interface.mostraItensPorCategoria(CATEGORIA_SELECIONADA); 
			addToCartClick();		
		}
	});	
};

function fornecAreaListener(){
	document.getElementById("area").addEventListener("click", function() {
		Interface.escondeTodosItens();
		Interface.mostraAreaFornec();
	}
);};