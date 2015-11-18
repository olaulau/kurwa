var debug_mode = false;
debug_mode = true;


$( document ).ready(function() {
    if(debug_mode) console.log( "document ready" );
});


$( window ).load(function() {
	if(debug_mode) console.log( "window loaded" );
	
	var body = $("body");
	var body_ = body[0];
	launchIntoFullscreen(body_);

	$(".image_container").append('<img src="./media/Herb_Polski.svg" class="Herb_Polski" />');
	$(".Herb_Polski").show();
	$(".Herb_Polski").addClass('Herb_Polski_fadein');
});


function launchIntoFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}