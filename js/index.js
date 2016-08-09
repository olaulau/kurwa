var debug_mode = false;
debug_mode = true;


$( document ).ready(function() {
    if(debug_mode) console.log( "document ready" );
});


$( window ).load(function() {
	if(debug_mode) console.log( "window loaded" );
	
	if(!debug_mode) launchIntoFullscreen($("body")[0]);
	
	
	step_1();
	
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

function step_1() {
	if(debug_mode) console.log( "step 1" );
	
	setTimeout(step_1_1, 1000);
}

function step_1_1() {
	if(debug_mode) console.log( "step 1_1" );
	
	$(".Herb_Polski").show();
	$(".Herb_Polski").animate({opacity: "1"}, 2000, "swing", step_2);
}


function step_2() {
	if(debug_mode) console.log( "step 2" );
	$("html")
		.css("filter", "grayscale(0)")
		.css("-webkit-filter", "grayscale(0)")
		.css('transition', 'all 2s ease-out');
	setTimeout(step_2_1, 2000);
}

function step_2_1() {
	if(debug_mode) console.log( "step 2_1" );
	$(".flag1").animate({"opacity": "0"}, 8000, 'swing');
	$(".whole_screen").addClass("bluur-anim");
	setTimeout(step_2_2, 8000);
	
}

function step_2_2() {
	if(debug_mode) console.log( "step 2_2" );
	$(".whole_screen").removeClass("bluur-anim");
	step_3();
}


function step_3() {
	if(debug_mode) console.log( "step 3" );
	setTimeout(step_3_1, /*100*/0);
}

function step_3_1() {
	if(debug_mode) console.log( "step 3_1" );
}
