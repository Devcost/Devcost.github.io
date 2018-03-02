$(document).ready(function(){

	var vacio = false;
	var serviceButton = document.getElementsByClassName("botonSolicitar");
	var $root = $('html, body');
	var spaceRoot = 80;
	
	// SCROLL FROM TOP -->

	$(".productos").on("click", function(event){
		/*event.preventDefault();*/
		$root.animate({scrollTop: $(".dad").offset().top - spaceRoot }, 'slow');
	});

	$(".precios").on("click", function(event){
		/*event.preventDefault();*/
		$root.animate({scrollTop: $(".correo").offset().top }, 'slow');
	});

	// <-- SCROLL FROM TOP

	for (var i = 0;i < serviceButton.length;i++){
		serviceButton[i].addEventListener("click", showMessage);
	}

	$("#ex").on("click",function(){
		$("#opaco").css("display","none");
		
		$("#idForm input").css("border","1px solid rgb(170,170,170)");

		$("#idForm").each(function(){
			this.reset();
		});

		$("#totalProductoShow label").text("$0");
	});


	$("#idForm input").not(':input[type=button], :input[type=submit], :input[type=reset]').on("input",function(e){
		if(vacio){
			$(this).css("border","1px solid rgb(170,170,170)");
		}
	});

	$("#idForm").submit(function(e){
		var productoPedido = $("#nombre_producto").text();
		
		vacio = false;

		var url = "correo.php";
		
		/*var url = "http://52.89.149.92/lamce/correo.php";*/

		validarForm();

		if(!vacio){
			$.ajax({
				type: "POST",
				url: url,
				crossDomain: true,
				data: $("#idForm").serialize(),
				success: function(data){
					/*$(".sms_error").css('color','green').text("El mensaje ha sido enviado.");*/
					
					$("#idForm").each(function(){
						this.reset();
					});
				}
			});
		}
		e.preventDefault();
	});

		function addCommas(nStr) {
	    nStr += '';
	    var x = nStr.split('.');
	    var x1 = x[0];
	    var x2 = x.length > 1 ? '.' + x[1] : '';
	    var rgx = /(\d+)(\d{3})/;
	    while (rgx.test(x1)) {
	        x1 = x1.replace(rgx, '$1' + ',' + '$2');
	    }
	    return x1 + x2;
	}

	function showMessage(){
		$("#opaco").css("display","block");
		//var chosen = $(this).siblings(".float_nombre").text();
		var chosen = $(this).parent(".solicitar").siblings(".listaNombre").text();
		//var chosenPrice = $(this).siblings(".float_precio").text();
		var chosenPrice = $(this).parent(".solicitar").siblings(".listaPrecio").text();
		$("#nombreProductoShow").html("<h2>"+chosen+"</h2>");
		$("#nombreProductoHidden").val(chosen);
		$("#precio_producto").text("Precio: "+chosenPrice+" / Kg");
		
		$("#idForm").each(function(){
			this.reset();
		});

		// EVITA EDICION DEL NOMBRE DEL PRODUCTO EN INPUT
		$("#nombreProducto").on("change",function(){
			$(this).val(chosen);
		});

		$("#kilos").on("keyup",function(){
			
			var unidadVenta = 1000; //SI SE VENDE POR KILO, unidadVenta = 1, TONELADA = 1000; 
			var numKilos = $(this).val();
			
			chosenPrice = chosenPrice.replace(/\D/g,'');
			var precioMaximo = 20*chosenPrice*unidadVenta;
			precioMaximo = addCommas(precioMaximo);
			var precioSinPunto = chosenPrice*numKilos*unidadVenta;
			precioSinPunto = addCommas(precioSinPunto);
			$("#totalProductoShow label").text("$"+precioSinPunto);
			$("#totalProductoHidden").val(precioSinPunto);

			if(numKilos>20){
				$(this).val(20);
				$("#totalProductoShow label").text("$"+precioMaximo);
				$("#totalProductoHidden").val(precioMaximo);
			}
			
		});

		return chosen;
	}

	function validarForm(){

		vacio = false;

		var telefono = document.forms["nameForm"]["telefono"].value;
		var direccion = document.forms["nameForm"]["direccion"].value;
		var email = document.forms["nameForm"]["email"].value;
		var kilos = document.forms["nameForm"]["kilos"].value;
		var total = document.forms["nameForm"]["total"].value;

		var type_direccion = typeof(direccion);
		var type_email = typeof(email);

		if ( !direccion.trim() || type_direccion != "string"){
			var falta_direccion = true;
		}

		if ( !email.trim() || type_email != "string"){
			var falta_email= true;
		}

		if( !telefono.trim() ){
			var falta_telefono = true;
		}

		if ( !kilos.trim() ){
			var falta_kilos = true;
		}

		//SI HAY ALGUN INPUT O TEXTAREA VACIO O QUE SEAN PUROS ESPACIOS EN BLANCO
		if(falta_direccion || falta_email || falta_telefono){ 

			if( falta_direccion ){     //SI DIRECCION ESTA VACIO O ES PURO ESPACIO
				$("#idForm :input[name=direccion]").css("border","2px solid rgb(190,75,73)");
			}

			if( falta_email ){   //SI EMAIL ESTA VACIO O ES PURO ESPACIO
				$("#idForm :input[name=email]").css("border","2px solid rgb(190,75,73)");
			}

			if( falta_telefono ){   //SI TELEFONO ESTA VACIO O ES PURO ESPACIO	
				$("#idForm :input[name=telefono]").css("border","2px solid rgb(190,75,73)");
			}

			if( falta_kilos ){   //SI TELEFONO ESTA VACIO O ES PURO ESPACIO	
				$("#idForm :input[name=kilos]").css("border","2px solid rgb(190,75,73)");
			}
						
			/*$(".show_error").text("Completa los campos con la información requerida.").css('background-color','rgb(190,75,73)');*/
			170
			vacio = true;
			
			return false;
		}
	}

	////////////////////////cambio.js
	$('.ambas').on("click", function () {
 		$('.one').toggleClass('rotate');
 		$('.two').toggleClass('rotatex');
 		$('.mitad').toggleClass('hide');
 		$('.rayas').toggleClass('rayas-space');
	});

	$(window).resize(function(){
		if (window.matchMedia('(min-width: 768px)').matches) {   
        	$('.one').removeClass('rotate');
 			$('.two').removeClass('rotatex');
 			$('.mitad').removeClass('hide');
 			$('.rayas').removeClass('rayas-space');
    	} 
	});
	////////////////////////

	////////////navbar.js
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
	////////////

});