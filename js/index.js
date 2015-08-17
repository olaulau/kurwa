$(function() {
	var video = $('video#kurwa_video');
	var video_ = video.get(0);
	
	video.hide();
	video_.play(); // needed for Firefox to start loading the video
	
	video.bind("loadeddata",function(e){
//		console.log("loadeddata");
		videoDuration = video.prop('duration');
		bufferCompleted = false;
		
		video.bind("progress",function(e){
			var buffered = video.prop("buffered").end(0);
			var percent = 100 * buffered / videoDuration;
//			console.log(percent + " %");
			if(!bufferCompleted && percent >= 100) {
				bufferCompleted = true; // trigger "buffering completed" only once even if we continue to receive progress events
//				console.log("buffering completed !");
				video.show(500);
				video.get(0).play();
			}
		});
	});
	
});
