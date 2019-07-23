// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'OnvQggy3Ezw',
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        // done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

$('#fullpage').fullpage({
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	scrollOverflow: true,
	navigation: true
});

//methods
$.fn.fullpage.setAllowScrolling(true);


// $( "form" ).on( "submit", function( event ) {
// 	var form = $(this);
// 	var url = form.attr("action");

// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		data: form.serialize(),
// 		success: function(data){
// 			console.log("post success: " + data);
// 		},
// 		error: function(){
// 			console.log("error");
// 		}
// 	})
// 	event.preventDefault();
// });
$.fn.serializeObject = function(){
	var o = {};
	var a = this.serializeArray();
	$.each(a, function(){
		if(o[this.name]){
			if(!o[this.name].push){
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
}
$('form').on('submit', function(e){
	e.preventDefault();
	var formData = $(this).serializeObject();
	console.log(formData);
	console.log(JSON.stringify(formData));
})

// $('.block').addClass("active")