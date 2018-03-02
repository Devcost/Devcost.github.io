$(document).ready(function(){
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

});