/* variables */
var debug_mode = false;
debug_mode = true; // uncomment to show debug rows in console

var animation_speed_ratio = 1;
//animation_speed_ratio = 2; // uncomment to speed up animations

var audio;
var audio_;



/* jquery boot */
$( document ).ready(function() {
    if(debug_mode) console.log( "document ready" );
    
    audio = $("audio#mazurek-dabrowskiego");
    audio_ = audio.get(0);
    if(debug_mode) audio_.muted = true;
	if(debug_mode) audio_.controls = true;
	if(debug_mode) audio_.loop = false;
});


$( window ).load(function() {
	if(debug_mode) console.log( "window loaded" );
	if(!debug_mode) launchIntoFullscreen($("body")[0]);
	step_0_0();
});



/* animation steps */
function step_0_0() {
	if(debug_mode) console.log( "step 0_0 : display go fullscreen button" );
	$("#go_fullscreen").css("z-index", "5");
	$("#go_fullscreen").click(function(){
		launchIntoFullscreen($("body")[0]);
		$("#go_fullscreen").remove();
		setTimeout(step_0_1, 500);
	});
	
}

function step_0_1() {
	if(debug_mode) console.log( "step 0_1 : anthem playing " );
	audio_.play();
	step_0_2();
}


function step_0_2() {
	if(debug_mode) console.log( "step 0_2 : curtains openning " );
	$(".curtain").animate({"width": "0%"}, 3000, "swing");
	setTimeout( step_0_3, 3000);
}

function step_0_3() {
	if(debug_mode) console.log( "step 0_3 : curtains remove" );
	$("#curtains").remove();
	step_1_0();
}


function step_1_0() {
	if(debug_mode) console.log( "step 1_0 : flag1 waiting before start" );
	setTimeout(step_1_1, 1000/animation_speed_ratio);
}

function step_1_1() {
	if(debug_mode) console.log( "step 1_1 : herb polski showing" );
	$(".Herb_Polski").show();
	$(".Herb_Polski").animate({opacity: "1"}, 2000/animation_speed_ratio, "swing", step_2_0);
}


function step_2_0() {
	if(debug_mode) console.log( "step 2_0 : color appearance" );
	$(".whole_screen")
		.css("filter", "grayscale(0)")
		.css("-webkit-filter", "grayscale(0)")
		.css('transition', 'all 2s ease-out');
	setTimeout(step_2_1, 2000/animation_speed_ratio);
}

function step_2_1() {
	if(debug_mode) console.log( "step 2_1 : start of flag2 animation" );
	animBlur(".whole_screen", 0, 2, 250/animation_speed_ratio, step_2_2);
}

function step_2_2() {
	if(debug_mode) console.log( "step 2_2 : transition to flag2" );
	$("#flag1").animate({"opacity": "0"}, 8000/animation_speed_ratio, 'swing');
	$(".whole_screen").addClass("bluur-anim");
	setTimeout(step_2_3, 8000/animation_speed_ratio);
	
}

function step_2_3() {
	if(debug_mode) console.log( "step 2_3 : end of flag2 animation" );
	$(".whole_screen").removeClass("bluur-anim");
	$(".whole_screen").css("filter", "blur(2px)");
	$(".whole_screen").css("-webkit-filter", "blur(2px)");
	
	$("#flag1").remove();
	animBlur(".whole_screen", 2, 0, 250/animation_speed_ratio, step_3_0);
}


function step_3_0() {
	if(debug_mode) console.log( "step 3_0 : ending anthem" );
	
	audio.animate({volume: 0}, 2000, function () {
		audio_.pause();
		step_3_1();
    });
}

function step_3_1() {
	if(debug_mode) console.log( "step 3_1 : " );
}



/* others functions */
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

