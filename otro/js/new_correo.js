function cortar(cosa){
	if(cosa.value.length > cosa.maxLength ){
		cosa.value = cosa.value.slice(0,cosa.maxLength);
	}
}

$(document).ready(function(){

	function validarForm(){

		vacio = false;

		var nombre = document.forms["nameForm"]["nombre"].value;
		var email = document.forms["nameForm"]["email"].value;
		var subject = document.forms["nameForm"]["subject"].value;
		var mensaje = document.forms["nameForm"]["mensaje"].value;

		var type_nombre = typeof(nombre);
		var type_email = typeof(email);
		var type_subject = typeof(subject);

		if ( !nombre.trim() || type_nombre != "string"){
			var falta_nombre = true;
		}

		if ( !email.trim() || type_email != "string"){
			var falta_email= true;
		}

		if ( !subject.trim() || type_subject != "string"){
			var falta_subject= true;
		}

		if( !mensaje.trim() ){
			var falta_mensaje = true;
		}

		//SI HAY ALGUN INPUT O TEXTAREA VACIO O QUE SEAN PUROS ESPACIOS EN BLANCO
		if(falta_nombre || falta_email || falta_subject || falta_mensaje ){ 
			if( falta_nombre ){     //SI NOMBRE ESTA VACIO O ES PURO ESPACIO
				$("#idForm :input[name=nombre]").css("border","2px solid rgb(190,75,73)");
			}

			if( falta_email ){   //SI EMAIL ESTA VACIO O ES PURO ESPACIO
				$("#idForm :input[name=email]").css("border","2px solid rgb(190,75,73)");
			}

			if( falta_subject ){   //SI SUBJECT ESTA VACIO O ES PURO ESPACIO
				$("#idForm :input[name=subject]").css("border","2px solid rgb(190,75,73)");
			}

			if( falta_mensaje ){   //SI MENSAJE ESTA VACIO O ES PURO ESPACIO	
				$("#idForm textarea").css("border","2px solid rgb(190,75,73)");
			}
							
			$(".show_error").text("Fill out the form").css('background-color','rgb(190,75,73)');
			
			vacio = true;
				
			return false;
		}
	}

	$("#idForm input").not(':input[type=button], :input[type=submit], :input[type=reset]').on("input",function(e){
		if(vacio){
			$(this).css("border","1px solid rgb(170,170,170)");
		}
	});

	$("#idForm textarea").on("input",function(e){
		if(vacio){
			$(this).css("border","1px solid rgb(170,170,170)");
		}
	});

	$("#idForm").submit(function(e) {
		
		var url = "http://www.healstate.com/datos/correo/correo.php";

		validarForm();

		if(!vacio){
			$.ajax({
				type: "POST",
				url: url,
				data: $("#idForm").serialize(),
				success: function(data)
				{
					alert("Compa!");
					$('.show_error').text('Your message has been sent').css('background-color','rgba(40,80,120,0.7)');
					$("#idForm").each(function(){
						this.reset();
					});
				}
			});
		}

		e.preventDefault();
	});

});