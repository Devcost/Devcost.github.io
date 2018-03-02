<!DOCTYPE html>
<html>
<head>
	<title></title>

	<link rel="stylesheet" type="text/css" href="css/navbar.css">	
	<link href="https://fonts.googleapis.com/css?family=Parisienne" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Playball" rel="stylesheet">


	<meta http-equiv="Content-Type" content="text/html" charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="navbar">
		<!--<img id="star" src="coronados.png">-->
		<!--<div class="logo">
			<img alt="logo-delfin-azul" src="img/logo-tres.png">
		</div>-->
		<div class="navbarLeft">
			<div class="logoCompleto">
				<div class="dude">
					<b>Imagen Logo</b><!--<img alt="logo-delfin-azul" src="logodos.jpg">-->
					<!--<label>Delfín Azul</label>-->
				</div>
			</div>
		</div>

		<div id="show">

			<?php require 'cambio.php'; ?>
		
		</div>

		<!--VISTA CELULAR-->
		<div class="menu-mobile">
			<div class="productos"><b>Chikass</b></div>
			<div class="precios"><b>Contáctanos</b></div>
			<a class="premium" href=""><div><b>Premium </b><img src="coronados.png"></div></a>
		</div>
		<!--VISTA CELULAR-->		

		<div class="link">

			<div class="productos">
				<p><b>Chikass</b></p>
			</div>
			<div class="precios">
				<p><b>Contáctanos</b></p>
			</div>
			<div class="premium" class="contactos">
				<p><b>Premium <img src="coronados.png"></b></p>
			</div>	

		</div>
	</div>

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/navbar.js"></script>
</body>
</html>