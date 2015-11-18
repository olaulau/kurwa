var debug_mode = false;
debug_mode = true;


$( document ).ready(function() {
    if(debug_mode) console.log( "document ready" );
    
    $("#fullscreen").click(function(){
    	if(debug_mode) console.log( "go click" );
    	launchIntoFullscreen($("body")[0]);
    });
});


$( window ).load(function() {
	if(debug_mode) console.log( "window loaded" );
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