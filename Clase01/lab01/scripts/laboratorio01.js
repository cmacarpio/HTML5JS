function destacar(elem){
    if(elem.parentNode.className === 'cuadroRotado'){
        elem.parentNode.className = "cuadro";
        elem.innerHTML = 'destacar'
    }else{
        elem.parentNode.className = "cuadroRotado";
        elem.innerHTML = 'quitar destacado'
    }
}

function finalizar(elem){
    //alert("Voy a hacer OCULTAR el elemento "+elem.id);
	elem.parentNode.parentNode.style.display="none";
}