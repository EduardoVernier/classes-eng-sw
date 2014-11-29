window.onload = function(){
	Interface.mostraTodosItens();
	LISTA_CATEGORIAS.sort();
	Interface.mostraCategorias();
	categoryClick();
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
				Interface.mostraItensPorCategoria(e.path[0].innerHTML); 
			},false);
		}  
	}
}



