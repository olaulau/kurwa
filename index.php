<!doctype html>
<html lang="fr">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>K U R W A</title>
	
	<script type="text/javascript" src="lib/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/index.css" media="all"/>
</head>
<body>
	
	<div class="whole_screen">
		
		<div id="go_fullscreen" class="central_container">
			<button id="fullscreen">G O</button>
		</div>
		
		<div id="curtains" class="whole_screen">
			<div id="curtain-left" class="curtain"></div>
			<div id="curtain-right" class="curtain"></div>
		</div>
		
		<audio id="mazurek-dabrowskiego" src="media/MazurekDabrowskiego.mp3?time=<?= time() ?>" loop preload="auto"></audio>
		
		<div id="flag1">
			<div class="top_half">
				<div class="width_chooser">
					<div class="image_container">
						<img src="./media/Herb_Polski.svg" class="Herb_Polski" />
					</div>
				</div>
			</div>
		</div>
		
		<div id="flag2">
			
		</div>
	</div>
	
</body>
</html>
