var vid = document.getElementById("myfirstVideo");
	function getCurTime(){
		vid.pause(vid.currentTime);
        }
	function stopAtSpecificTime(){	
		if(Math.floor(vid.currentTime) === 7){
		    getCurTime();
		    $(".vid-data").show();
			//clearInterval(interval);
		}
         else if(Math.floor(vid.currentTime) === 16){
			getCurTime();
		    $(".vid-data2").show();
			}
	}
	function popUp1() {
		var a = document.getElementById("name1").checked;
        var b = document.getElementById("name2").checked;
        var c = document.getElementById("name3").checked;
	    var $elem = document.getElementById("demo");
			if($elem.innerHTML === "Continue"){
			   $elem.innerHTML = "Check";
		       vid.currentTime = vid.currentTime + 1;
			   $(".vid-data").hide()
				vid.play();
			} 
			else if($elem.innerHTML === "Watch Again"){
					$elem.innerHTML = "Check";
					$(".vid-data").hide()
					vid.currentTime = 0;
					vid.play();
				} 
			else{
				if(a && b && !c){
				   $elem.innerHTML="Continue";	
				}else{
					$elem.innerHTML="Watch Again";
				}
			}
	}
	function popUp2() {
		var x = document.getElementById("xyz1").checked;
        var y = document.getElementById("xyz2").checked;
        var z = document.getElementById("xyz3").checked;
	    var m = document.getElementById("xyz4").checked;
		var $comp = document.getElementById("trail");
			if($comp.innerHTML === "Next"){
			    $comp.innerHTML = "Check";
				vid.currentTime = vid.currentTime + 2;
				$(".vid-data2").hide()
				vid.play();
			} 
            else if($comp.innerHTML === "Go-Back"){
					$comp.innerHTML = "Check";
					$(".vid-data2").hide()
					vid.currentTime = 6;
					vid.play();
			} 
			else{
				if(y && z && m && !x){
					$comp.innerHTML="Next";	
				}else{
					$comp.innerHTML="Go Back";
				}
			}
              
	}
		var vid1,playbtn,seekslider,curtimetext,durtimetext,mutebtn,volumeslider,fullscreenbtn,video_control_bar;
			function initializePlayer(){
				//object reference
				vid1 = document.getElementById("myfirstVideo");
				playbtn = document.getElementById("playpausebutton");
				

				seekslider = document.getElementById("seekslider");
				curtimetext = document.getElementById("curtimetext");
				durtimetext = document.getElementById("durtimetext");
				mutebtn = document.getElementById("mutebtn");
				volumeslider = document.getElementById("volumeslider");
                fullscreenbtn = document.getElementById("fullscreenbtn");

				
				//Event listeners
                playbtn.addEventListener("click",playPause,false);
				seekslider.addEventListener("change",vidSeek,false);
				vid1.addEventListener("timeupdate",seektimeupdate,false);
				mutebtn.addEventListener("click",vidmute,false);
				volumeslider.addEventListener("change",setvolume,false);
				fullscreenbtn.addEventListener("click",toggleFullScreen,false);
				fullscreenbtn.addEventListener("click",video_control_bar,false);
				
			}
		window.onload = initializePlayer;
			function playPause(){
				if(vid1.paused){
					vid1.play();
						playbtn.style.background = "url(Images/icon.png) no-repeat";
						playbtn.style.backgroundSize = "30px 30px";
					}
					else{
					vid.pause();
					playbtn.style.background = "url(Images/icon3.png) no-repeat";
						playbtn.style.backgroundSize = "30px 30px";

				}
			}
	function vidSeek(){
		var seekto = vid1.duration * (seekslider.value / 100)
		    vid1.currentTime = seekto;
	}
	function seektimeupdate(){
		var newtime = vid1.currentTime * (100 / vid.duration);
			seekslider.value = newtime;
		var curmins = Math.floor(vid.currentTime / 60);
		var cursecs = Math.floor(vid.currentTime - curmins * 60);
		var durmins = Math.floor(vid.duration / 60);
		var dursecs = Math.round(vid.duration - durmins * 60);
		    if(cursecs < 10){cursecs = "0"+ cursecs;}
			if(dursecs < 10){dursecs = "0"+ dursecs;}
			if(curmins < 10){curmins = "0"+ curmins;}
			if(durmins < 10){durmins = "0"+ durmins;}
				curtimetext.innerHTML = curmins+":"+cursecs;
				durtimetext.innerHTML = durmins+":"+dursecs;
	} 
	function vidmute(){
			if(vid1.muted){
				vid1.muted= false;
				mutebtn.style.background = "url(unmute.png) no-repeat";
				mutebtn.style.backgroundSize = "30px 30px";
			}
			else{
				vid1.muted= true;
				mutebtn.style.background = "url(icon5.png) no-repeat";
				mutebtn.style.backgroundSize = "30px 30px";
				}
	}
	function setvolume(){
			vid.volume = volumeslider.value / 100;
	}
	function toggleFullScreen(){
			if(vid.requestFullScreen){
				vid.requestFullScreen();
			}
			else if(vid.webkitRequestFullScreen){
				vid.webkitRequestFullScreen();
			}
			else if(vid.mozRequestFullScreen){
					vid.mozRequestFullScreen();
			}
	}
function maxWindow() {
        window.moveTo(0, 0);


        if (document.all) {
            top.window.resizeTo(screen.availWidth, screen.availHeight);
        }

        else if (document.layers || document.getElementById) {
            if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
                top.window.outerHeight = screen.availHeight;
                top.window.outerWidth = screen.availWidth;
            }
        }
    }
	function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
	document.body.webkitRequestFullscreen()
	
	    var interval = setInterval(stopAtSpecificTime, 0);
			