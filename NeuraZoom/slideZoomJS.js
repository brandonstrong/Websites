/*initialize variables*/
sliderint = 1;
sliderNext = 2;
time = 0;
ease = 'easeInOutSine';

/*variables for sliding function*/
        var fadeInOutTime = 600;
        var pauseOnImage = 30;
        var animationTime = 2000;
        var delay = fadeInOutTime + 50;
        var sizeStart = "100%";
        var sizeFinish = "150%";
        var total = fadeInOutTime * 2 + pauseOnImage * 2 + animationTime + 50;

/*start function and load first picture*/

$(document).ready(function(){
	$("#slider>img#"+sliderint).fadeIn(fadeInOutTime);
	$("#sliderText>img#"+sliderint).fadeIn(fadeInOutTime);
    $("#slider>img").animate({left:'-80px'}, animationTime, ease);
    startSlider();
    
    $("p.right").click(function(){
	    newSlide = sliderint + 1;
	    showSlide(newSlide);
	});
    
	$("p.left").click(function(){
	    newSlide = sliderint - 1;
	    sliderNext --;
	    showSlide(newSlide);
	});

    $("#sliderButton>li").click(function(){
      	var index =$(this).index()+1;
      	$("#slider>img").stop();
      	stopLoop();

		
    	/*calculate time left based on distance traveled*/
    	var i = $("#slider>img#" + sliderint);
    	var p = i.offset();
    	/*alert(p.left + "   " + p.top);  Click button at VERY beginning of slide and this will alert you the left and top offsets*/
    	var left = p.left - 327;
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
    	
    	/* this handles input on fade in or out*/
    	
		if(time < 2000 && time > 0){
    		$("#slider>img").stop();
    	}
       	if(time == 0){       		
       		$("slider>img").hide();
    		$("slider>img#"+index).fadeIn(200).delay(3000);
    		time = 2000;
    	}
		
		/** handle values if different slide is selected */
        if (index != sliderint){
          	sliderint = index; 
	      	sliderNext = index+1;
	      	if(sliderNext > count+1){
        		sliderint = 1;
        	    sliderNext = 2;
       		 }
      	    time = 2000;
      	    $("#slider>img").fadeOut(300);
      	    $("#sliderText>img").fadeOut(300);

      	    
      	    
      	    /*reset slider position to original position*/
      	    
      	    if(sliderint%4 == 1){
        		$("#slider>img#"+sliderint).delay(350).css({"left":"0px", "top":"0px", "width":"150%", "height":"150%"}).fadeIn(300);
	        }
	        else if(sliderint%4 == 2){
	        	$("#slider>img#"+sliderint).delay(350).css({"left":"-80px", "top":"0px", "width":"100%", "height":"100%"}).fadeIn(300);
	  		}
	  		else if(sliderint%4 == 3){
	        	$("#slider>img#"+sliderint).delay(350).css({"left":"0px", "top":"0px", "width":"150%", "height":"150%"}).fadeIn(300);
	  		}
	  		else if(sliderint%4 == 0){
	        	$("#slider>img#"+sliderint).delay(350).css({"left":"0px", "top":"-50px", "width":"100%", "height":"100%"}).fadeIn(300);
	  		}
        
      	}
        /*animate the rest of the movement for the slider*/
        if(sliderint%4 == 1){
        	$("#sliderText>img#"+sliderint).fadeIn(300);
        	$("#slider>img#"+sliderint).delay(3000).animate({left:'-80px', width:'100%', height:'100%'}, time, 'easeInOutSine');
        }
        else if(sliderint%4 == 2){
        	$("#sliderText>img#"+sliderint).fadeIn(300);
        	$("#slider>img#"+sliderint).delay(3000).animate({left:'0px', width:'150%', height: '150%'}, time, 'easeInOutSine');
  		}
  		else if(sliderint%4 == 3){
  			$("#sliderText>img#"+sliderint).fadeIn(300);
        	$("#slider>img#"+sliderint).delay(3000).animate({top:'-50px', width:'100%', height:'100%'}, time, 'easeInOutSine');
  		}
  		else if(sliderint%4 == 0){
  			$("#sliderText>img#"+sliderint).fadeIn(300);
			$("#slider>img#"+sliderint).delay(3000).animate({top:'0px', width:'150%', height: '150%'}, time, 'easeInOutSine');
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
        var panLeftStart = "0px";
        var panLeftFinish = "-120px";
        var panTopStart = "0px";
        var panTopFinish = "-100px";
        
        /*fade and animate images*/
        $("#slider>img").fadeOut(fadeInOutTime);
        $("#sliderText>img").fadeOut(fadeInOutTime);
        if(sliderint%4 == 1){
        	$("#slider>img#"+sliderint).delay(delay).css({"left":panLeftStart, "top":panTopStart, "width":sizeStart, "height":sizeStart}).fadeIn(fadeInOutTime);
        	$("#sliderText>img#"+sliderint).delay(delay).fadeIn(fadeInOutTime);
        	$("#slider>img#"+sliderint).delay(pauseOnImage).animate({left:panLeftFinish, top:panTopFinish, width:sizeFinish, height:sizeFinish}, animationTime, ease);
        }
        else if(sliderint%4 == 2){
        	$("#slider>img#"+sliderint).delay(delay).css({"left":panLeftStart, "top":panTopStart, "width":sizeStart, "height":sizeStart}).fadeIn(fadeInOutTime);
        	$("#sliderText>img#"+sliderint).delay(delay).fadeIn(fadeInOutTime);
        	$("#slider>img#"+sliderint).delay(pauseOnImage).animate({left:panLeftFinish, top:panTopFinish, width:sizeFinish, height: sizeFinish}, animationTime, ease);
  		}
  		else if(sliderint%4 == 3){
        	$("#slider>img#"+sliderint).delay(delay).css({"left":panLeftStart, "top":panTopStart, "width":sizeStart, "height":sizeStart}).fadeIn(fadeInOutTime);
        	$("#sliderText>img#"+sliderint).delay(delay).fadeIn(fadeInOutTime);
        	$("#slider>img#"+sliderint).delay(pauseOnImage).animate({left:panLeftFinish, top:panTopFinish, width:sizeFinish, height:sizeFinish}, animationTime, ease);
  		}
  		else if(sliderint%4 == 0){
        	$("#slider>img#"+sliderint).delay(delay).css({"left":panLeftStart, "top":panTopStart, "width":sizeStart, "height":sizeStart}).fadeIn(fadeInOutTime);
        	$("#sliderText>img#"+sliderint).delay(delay).fadeIn(fadeInOutTime);
        	$("#slider>img#"+sliderint).delay(pauseOnImage).animate({left:panLeftFinish, top:panTopFinish, width:sizeFinish, height: sizeFinish}, animationTime, ease);
  		}
    }, total);
}

/*this function stops the loop*/

function stopLoop(){
     window.clearInterval(loop);
}

function showSlide(id){
	$("#slider>img").stop();

     stopLoop();
     if(sliderNext > count){
           id = 1;
     }else if(id<1){
         id = count;
     }
      $("#sliderText>img").fadeOut(300);
      $("#slider>img").fadeOut(300);
      $("#slider>img#"+id).delay(300).fadeIn(300);
      $("#sliderText>img#"+id).delay(300).fadeIn(300);
      sliderint = id;
      sliderNext = id+1;
      startSlider();
}
