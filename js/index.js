$(function() {
	var video = $('video#kurwa_video');
	video.hide();
	
	video.bind("loadeddata",function(e){
		videoDuration = video.prop('duration');
		bufferCompleted = false;
		
		video.bind("progress",function(e){
			var buffered = video.prop("buffered").end(0);
			var percent = 100 * buffered / videoDuration;
//			console.log(percent + " %");
			if(!bufferCompleted && percent >= 100) {
				bufferCompleted = true; // trigger completed only once even if we continue to receive progess events
//				alert("buffering completed !");
				video.show(500);
				video.get(0).play();
			}
		});
	});
	
});
