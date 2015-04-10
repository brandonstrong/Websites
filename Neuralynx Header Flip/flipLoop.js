frontdegree= -180;
backdegree = 0;
slideTime = 4000;
$(document).ready(function(){
	/* -----Uncomment this to edit slider on back div. be sure to comment out startslider functions----
	$(".flip3d>#front").css({
		"-webkit-transform":"perspective(600px) rotateX("+frontdegree+"deg)",
		"-ms-transform":"perspective(600px) rotateX("+frontdegree+"deg)",
		"-o-transform":"perspective(600px) rotateX("+frontdegree+"deg)",
		"transform":"perspective(600px) rotateX("+frontdegree+"deg)"	
	});
		$(".flip3d>#back").css({
		"-webkit-transform":"perspective(600px) rotateX("+backdegree+"deg)",
		"-ms-transform":"perspective(600px) rotateX("+backdegree+"deg)",
		"-o-transform":"perspective(600px) rotateX("+backdegree+"deg)",
		"transform":"perspective(600px) rotateX("+backdegree+"deg)"
	});
	*/
	$(".flip3d").hover(
	function(){
		stopLoop();
	},
	function(){
		startfrontSlider();
		startbackSlider();
	});
	
	startfrontSlider();
	startbackSlider();
});

function startfrontSlider(){
    
    loopOne = setInterval(function(){
    
	$(".flip3d>#front").css({
		"-webkit-transform":"perspective(600px) rotateX("+frontdegree+"deg)",
		"-ms-transform":"perspective(600px) rotateX("+frontdegree+"deg)",
		"-o-transform":"perspective(600px) rotateX("+frontdegree+"deg)",
		"transform":"perspective(600px) rotateX("+frontdegree+"deg)"	
	});
	
	frontdegree = frontdegree - 180;    	
	}, slideTime);
}
function startbackSlider(){
    
    loopTwo = setInterval(function(){
    
	$(".flip3d>#back").css({
		"-webkit-transform":"perspective(600px) rotateX("+backdegree+"deg)",
		"-ms-transform":"perspective(600px) rotateX("+backdegree+"deg)",
		"-o-transform":"perspective(600px) rotateX("+backdegree+"deg)",
		"transform":"perspective(600px) rotateX("+backdegree+"deg)"
	});
	backdegree = backdegree - 180;    	
	}, slideTime);
}

function stopLoop(){
	window.clearInterval(loopOne);
	window.clearInterval(loopTwo);
}
