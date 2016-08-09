$(function() {
	var debug_mode = false;
	debug_mode = true;
	
	var video = $('video#kurwa_video');
	var video_ = video.get(0);
	
	if(debug_mode) video_.muted = true;
	if(debug_mode) video_.controls = true;
	if(debug_mode) video_.loop = false;
	
	video.hide();
//	video_.play(); // needed for Firefox to start loading the video
//	video_.pause();
//	video_.load();
	
	video.bind("loadeddata",function(e){
		if(debug_mode) console.log("video loadeddata");
		videoDuration = video.prop('duration');
		
		function calculateLoadPercent() {
			var buffered = video.prop("buffered").end(0);
			var percent = 100 * buffered / videoDuration;
			percent = Math.round(percent*10)/10; // round to nearest 0.1%
			if(debug_mode) console.log("video loaded : " + percent + "%");
			if(percent >= 100) {
				clearInterval(intervalID);
				if(debug_mode) console.log("video buffering completed !");
				video.show(500, function(){
					video_.play();
				});
			}
		}
		var intervalID = setInterval(calculateLoadPercent, 500);
	});
	
});


pageLoading({

	  // background color of the progress bar
	  barColor:'#79c4df',

	  // top position of the progress bar
	//  barTop:'100px',

	  // top position of the percentage text
	//  textTop:'200px', 

	  // background color of the loading overlay
	  backColor:'rgba(245, 245, 245, 0.90)',

	  // background color of the progress bar
	  backBarColor:'#dfe8ea', 

	  // text inside the progress bar
	  text:'Loading <b>{process} %</b>',

	  // show of hide the percentage text
	  textVisible:true, 

	  loadOut:true  
	  
	});