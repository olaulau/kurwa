var debug_mode = false;
debug_mode = true; // uncomment to show debug lines in console

var animation_speed_ratio = 1;
animation_speed_ratio = 2; // uncomment to speed up during dev 


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
	
	setTimeout(step_1_1, 1000/animation_speed_ratio);
}

function step_1_1() {
	if(debug_mode) console.log( "step 1_1" );
	
	$(".Herb_Polski").show();
	$(".Herb_Polski").animate({opacity: "1"}, 2000/animation_speed_ratio, "swing", step_2);
}


function step_2() {
	if(debug_mode) console.log( "step 2" );
	$("html")
		.css("filter", "grayscale(0)")
		.css("-webkit-filter", "grayscale(0)")
		.css('transition', 'all 2s ease-out');
	setTimeout(step_2_1, 2000/animation_speed_ratio);
}

function step_2_1() {
	if(debug_mode) console.log( "step 2_1" );
	$("#flag1").animate({"opacity": "0"}, 8000/animation_speed_ratio, 'swing');
	$(".whole_screen").addClass("bluur-anim");
	setTimeout(step_2_2, 8000/animation_speed_ratio);
	
}

function step_2_2() {
	if(debug_mode) console.log( "step 2_2" );
	$(".whole_screen").removeClass("bluur-anim");
	$(".whole_screen").css("filter", "blur(2px)");
	$(".whole_screen").css("-webkit-filter", "blur(2px)");
	
	animBlur(".whole_screen", 4, 0, 1000/animation_speed_ratio, step_3);
}


function step_3() {
	if(debug_mode) console.log( "step 3" );
	setTimeout(step_3_1, /*100*/0/animation_speed_ratio);
}

function step_3_1() {
	if(debug_mode) console.log( "step 3_1" );
}




function animBlur(selector, from, to, duration, complete) {
	$({blurRadius: from}).animate({blurRadius: to}, {
        duration: duration,
        easing: 'swing',
        step: function() {
            $(selector).css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
            });
        },
        complete: complete
    });
}

