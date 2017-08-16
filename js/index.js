$(document).ready(function(){

	$("#includedContent").load("new_correo.html"); 

	//ANIMACION DE NAVBAR   ->
	var puesto = true;
	var arriba = $(".hechos").offset().top;

	$(window).scroll(function(){
				
		var scroll = $(window).scrollTop();
				
		if(scroll >= arriba){
			$(".navbar").fadeIn(500);
		}
		else{
			$(".navbar").fadeOut(500);
		}
			
	});
	//ANIMACION DE NAVBAR   <-

	// AL HACER CLICK EN BOTON ->
	$("#quick").on("click",function(){
		alert("I'm updating this information.");
	});
	// AL HACER CLICK EN BOTON <-

	// ANIMACION DEL CAMBIO DE PALABRA DEL SUBTÍTULO   ->

	palabras = ["build","design","code","test","do","build, design, code, test & do"];

	function cambio(){

		var vaPor = 1;
				
		otro = setInterval(intervalo,1500);
				
		function intervalo(){
			if(vaPor == palabras.length - 1){
				clearInterval(otro);
			}
					
			$("#change").fadeOut(500,function(){
				$(this).text(palabras[vaPor]).fadeIn(500);
				vaPor++;
			});

		}
	}

	cambio();
	
	// ANIMACION DEL CAMBIO DE PALABRA DEL SUBTÍTULO   <-

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

		// some code..

	}

	else{

		// ANIMACION DE LAS IMAGENES DE LAS PAGINAS WEB  ->
		$(".img_skill").mouseenter(function(){
			if($(window).width() >= 768){
				$(this).children("img").css("filter","brightness(70%)");		
				$(this).children(".pagina_skill").fadeIn();
			}

		});

		$(".img_skill").mouseleave(function(){
			if($(window).width() >= 768){
				$(this).children("img").css("filter","brightness(100%)");		
				$(this).children(".pagina_skill").fadeOut();
			}
		});
		// ANIMACION DE LAS IMAGENES DE LAS PAGINAS WEB  <-
	}
});
