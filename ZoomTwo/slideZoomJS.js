/*initialize variables*/
sliderint = 1;
sliderNext = 2;
time = 0;
ease = 'easeOutSine'

/*start function and load first picture*/

$(document).ready(function(){
	$("#slider>img#"+sliderint).fadeIn(300);
    $("#slider>img").animate({left:'-80px'}, 2000, 'easeInOutSine');
    startSlider();

/*handler for hover over image*/

$("#slider>img").hover(
    function(){
    	stopLoop();
    	/*calculate time left based on distance traveled*/
    	var i = $("#slider>img#" + sliderint);
    	var p = i.offset();
    	var left = p.left - 357;
    	var top = p.top - 75;
    	if(sliderint%4 == 1){
    		time = (1-Math.abs(left/80))*2000;
    	}else if(sliderint%4 == 2){
    		time = Math.abs(left/80)*2000;
    	}else if(sliderint%4 == 3){
    		time = (1-Math.abs(top/50))*2000;
    	}else if(sliderint%4 == 0){
    		time = Math.abs(top/50)*2000
    	}
    	/*handle image if hover happens on a fade in or out*/
    	if(time < 2000 && time > 0){
    		$("#slider>img").stop();
    	}
       	if(time == 2000){
    		$("slider>img#"+sliderint).hide().fadeIn(200);
    		time -= 2000;
    	}
    },
    /*handler for unhovering; simply animates the rest of what is left*/
    function(){
    	if(sliderint%4 == 1){
    		$("#slider>img#"+sliderint).animate({left:'-80px'}, time, ease);
    	}else if(sliderint%4 == 2){
    		$("#slider>img#"+sliderint).animate({left:'0px'}, time, ease);
    	}else if(sliderint%4 == 3){
    		$("#slider>img#"+sliderint).animate({top:'-50px'}, time, ease);
    	}else if(sliderint%4 == 0){
    		$("#slider>img#"+sliderint).animate({top:'0px'}, time, ease);
    	}
        startSlider();
    });

});

/*this controls the image sliding and animation*/

function startSlider(){
    count=$("#slider>img").size();

    loop = setInterval(function(){
    
    	/*control slider counters*/
    	sliderint = sliderNext;
        sliderNext++;
        if(sliderNext > count+1){
        	sliderint = 1;
            sliderNext = 2;
        }
        
        /*fade and animate images*/
        $("#slider>img").fadeOut(300);
        if(sliderint%4 == 1){
        	$("#slider>img#"+sliderint).delay(350).css({"left":"0px", "top":"0px"}).fadeIn(300);
        	$("#slider>img#"+sliderint).animate({left:'-80px'}, 2000, 'easeInOutSine');
        }
        else if(sliderint%4 == 2){
        	$("#slider>img#"+sliderint).delay(350).css({"left":"-80px", "top":"0px"}).fadeIn(300);
        	$("#slider>img#"+sliderint).animate({left:'0px'}, 2000, 'easeInOutSine');
  		}
  		else if(sliderint%4 == 3){
        	$("#slider>img#"+sliderint).delay(350).css({"left":"0px", "top":"0px"}).fadeIn(300);
        	$("#slider>img#"+sliderint).animate({top:'-50px'}, 2000, 'easeInOutSine');
  		}
  		else if(sliderint%4 == 0){
        	$("#slider>img#"+sliderint).delay(350).css({"left":"0px", "top":"-50px"}).fadeIn(300);
        	$("#slider>img#"+sliderint).animate({top:'0px'}, 2000, 'easeInOutSine');
  		}
        
    }, 2650);
}

/*this function stops the loop*/

function stopLoop(){
     window.clearInterval(loop);
}