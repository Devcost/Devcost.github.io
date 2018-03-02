$(document).ready(function(){

	$("#show").click(function(){		
		$(".menu-mobile").stop().toggle("slide");            //ABRE EL MENU 		
	});
	
	// SI EL MENU ESTÁ ABIERTO 
	//Y EL ANCHO DE LA PANTALLA CAMBIA 
	//A MAS DE 767PX, 	
	//SE CIERRA EL MENÚ AUTOMÁTICAMENTE

	$(window).resize(function(){
		if (window.matchMedia('(min-width: 768px)').matches) {   
			$(".menu-mobile").css("display","none");
    	} 
	});

});