$(document).ready(function(){
	$("#zoom").animate({width:'150%', height:'150%', top:'-250px'}, 2000, 'easeInOutElastic');
	$("#zoom").delay(1000).animate({width:'100%', height:'100%', top:'0px'}, 1500, 'easeInOutBack');
	$("#zoom").animate({width:'150%', height:'150%', left:'-400px'}, 1500);
	$("#zoom").delay(1000).animate({width:'200%', height:'200%', left:'-800px'}, 1000);
	$("#zoom").delay(1000).animate({width:'100%', height:'100%', left:'0px'}, 1000);
	$("#zoom").delay(1000).animate({width:'150%', height:'150%', top:'-175px', left:'-200px'}, 1000);
	$("#zoom").delay(1000).animate({width:'200%', height:'200%', top:'-350px', left:'-400px'}, 1000);
	$("#zoom").delay(1000).animate({top:'-700px', left:'-800px'}, 1500, 'easeInOutBounce');
	$("#zoom").delay(1000).animate({top:'0px', left:'0px'}, 1500, 'easeInOutBounce');
	$("#zoom").delay(1000).animate({top:'0px', left:'-800px'}, 1500, 'easeInOutCirc');
	$("#zoom").delay(1000).animate({top:'-700px', left:'0px'}, 1500, 'easeInOutCirc');
	$("#zoom").delay(1000).animate({width:'100%', height:'100%', top:'0px'}, 2000, 'easeInOutElastic');
});