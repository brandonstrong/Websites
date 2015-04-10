/*initialize variables for content slider*/
sliderint = 1;
sliderNext = 2;
count = 0;
ease = 'easeInOutSine';
panEase = 'linear';
/*variables for content sliding function*/
		//time variables
        
        var pauseOnImage = 3000;
        var animationTime = 2000;
        
        var fadeInOutTime = 600;
        var delay = fadeInOutTime + 50;
        var total = pauseOnImage + animationTime + delay;
        
/*initialize variables for header slider*/
headInt = 1;
headNext = 2;
headCount = 0;

var headPause = 3000;
var headFade = 1500;
var headDelay = headFade + 50;
var headTotal = headPause + headDelay;
/*start function and load first picture*/

$(document).ready(function(){
	//Set count size for content and div
	count=$("#sliderText>div").size();
	headCount=$("#headerDiv>div").size();

	//Begin content slider movement
	$("#slider>a>img#1").fadeIn(fadeInOutTime);
	$("#sliderText>div#"+sliderint).fadeIn(fadeInOutTime);
	//Animate zoomed out pan
	$("#slider>a>img#1").animate({left:'40px', top:'0px', width:'100%', height:'100%'}, pauseOnImage+animationTime+delay, panEase);
    startSlider();
    
    //Begin header slider movement
    $("#headerDiv>div#1").fadeIn(headFade);
    startHeader();
	    
    /*The following three listeners handle user input from the right arrow, left arrow, and selector buttons*/
    //Right arrow
    $("p.right").mousedown(function(){
    	var imageNum = Math.ceil(sliderint/2);
	    newSlide = imageNum + 1;
	    sliderNext++;
	    showSlide(newSlide);
	});
    //Left arrow
	$("p.left").mousedown(function(){
		var imageNum = Math.ceil(sliderint/2);
	    newSlide = imageNum - 1;
	    sliderNext --;
	    showSlide(newSlide);
	});
	//Selector button
    $("#sliderButton>li").mousedown(function(){        
      	var index =$(this).index()+1;
      	$("#slider>img#"+index).css({"left":"0px", "top":"0px", "width":"100%", "height":"100%"});
      	sliderNext = (index*2)
      	showSlide(index);
		
    }); 
});

/*this controls the image sliding and animation for content*/
function startSlider(){
    
    loop = setInterval(function(){
    
    	/*control slider counters*/
    	sliderint = sliderNext;
        sliderNext++;
        if(sliderNext > count+1){
        	sliderint = 1;
            sliderNext = 2;
        }
        var imageNum = Math.ceil(sliderint/2);
        
        /*fade and animate images
        
        	PAN TOP  --- positive = down
        	         --- negative = up
        	         
        	PAN LEFT --- positive = left
        			 --- negative = right
        
        */
        
        /* IMAGE # 1*/
        if(sliderint == 1){
        	$("#slider>a>img").fadeOut(fadeInOutTime);
        	$("#sliderText>div").fadeOut(fadeInOutTime);
        	//Set image to original position
        	$("#slider>a>img#"+imageNum).delay(delay).css({"left":"0px", "top":"0px", "width":"100%", "height":"100%"}).fadeIn(fadeInOutTime);
			$("#sliderText>div#"+sliderint).delay(delay).fadeIn(fadeInOutTime);
			//Animate zoomed out pan
			$("#slider>A>img#"+imageNum).animate({left:'40px', top:'0px', width:'100%', height:'100%'}, pauseOnImage+animationTime, panEase);
        }
        else if(sliderint == 2){
        	//animate zoom in
        	$("#slider>a>img#"+imageNum).animate({left:'-260px', top:'40px', width:'150%', height:'150%'}, animationTime, ease);
        	$("#sliderText>div").fadeOut(fadeInOutTime);
			$("#sliderText>div#"+sliderint).delay(animationTime).fadeIn(fadeInOutTime);
			//Animate zoomed in pan
			$("#slider>a>img#"+imageNum).animate({left:'-300px', top:'40px', width:'150%', height:'150%'}, pauseOnImage, panEase);	
        }
        
  		/* IMAGE # 2*/
  		else if(sliderint == 3){
        	$("#slider>a>img").fadeOut(fadeInOutTime);
        	$("#sliderText>div").fadeOut(fadeInOutTime);
        	//Set image to original position
        	$("#slider>a>img#"+imageNum).delay(delay).css({"left":"0px", "top":"0px", "width":"100%", "height":"100%"}).fadeIn(fadeInOutTime);
			$("#sliderText>div#"+sliderint).delay(delay).fadeIn(fadeInOutTime);
			//Animate zoomed out pan
			$("#slider>a>img#"+imageNum).animate({left:'40px', top:'0px', width:'100%', height:'100%'}, pauseOnImage+animationTime, panEase);
  		}
  		else if(sliderint == 4){
  			//animate zoom in
        	$("#slider>a>img#"+imageNum).animate({left:'-120px', top:'-10px', width:'200%', height:'200%'}, animationTime, ease);
        	$("#sliderText>div").fadeOut(fadeInOutTime);
			$("#sliderText>div#"+sliderint).delay(animationTime).fadeIn(fadeInOutTime);
			//Animate zoomed in pan
			$("#slider>a>img#"+imageNum).animate({left:'-160px', top:'-10px', width:'200%', height:'200%'}, pauseOnImage, panEase);
  		}
  		
  		/*IMAGE # 3*/
  		else if(sliderint == 5){
        	$("#slider>a>img").fadeOut(fadeInOutTime);
        	$("#sliderText>div").fadeOut(fadeInOutTime);
        	//Set image to original position
        	$("#slider>a>img#"+imageNum).delay(delay).css({"left":"0px", "top":"0px", "width":"100%", "height":"100%"}).fadeIn(fadeInOutTime);
			$("#sliderText>div#"+sliderint).delay(delay).fadeIn(fadeInOutTime);
			//Animate zoomed out pan
			$("#slider>a>img#"+imageNum).animate({left:'40px', top:'0px', width:'100%', height:'100%'}, pauseOnImage+animationTime, panEase);
  		}
  		else if(sliderint == 6){
  			//animate zoom in
        	$("#slider>a>img#"+imageNum).animate({left:'-600px', top:'-400px', width:'200%', height:'200%'}, animationTime, ease);
        	$("#sliderText>div").fadeOut(fadeInOutTime);
			$("#sliderText>div#"+sliderint).delay(animationTime).fadeIn(fadeInOutTime);
			//Animate zoomed in pan
			$("#slider>a>img#"+imageNum).animate({left:'-640px', top:'-400px', width:'200%', height:'200%'}, pauseOnImage, panEase);	
  		}

    }, total);
}

/*this controls sliding and animation for header*/
function startHeader(){
	headLoop = setInterval(function(){
		var headLast = headInt;
		
		headInt = headNext;
        headNext++;
        
        if(headNext > headCount+1){
        	headInt = 1;
            headNext = 2;
            headLast = 3;
        }

        $("#headerDiv>div#"+headLast).animate({top:'-100px', opacity:'0'}, headFade);
   		$("#headerDiv>div").fadeOut(0);
		$("#headerDiv>div#"+headInt).delay(headDelay).css({"top":"0px", "opacity":"1"}).fadeIn(headFade);
		
	}, headTotal);
}

/*this function stops the loop*/

function stopLoop(){
     window.clearInterval(loop);
}

/*this function shows the slide and is called when the right arrow, left arrow, or selector buttons are pushed*/
function showSlide(id){
	
	 $("#slider>a>img").finish();
     $("#sliderText>div").finish();
     stopLoop();
	
     $("#slider>a>img").hide();
	 $("#sliderText>div").hide();
	 
	 //check for ends of slider
	 var newcount = count/2;
     if(sliderNext > count){
           id = 1;
     }else if(id<1){
         id = newcount;
     }
     
     //calculate slide number and text number to coordinate
     var textDisplay = ((id*2)-1)
     //set selected image to default zoomed out position
     $("#slider>a>img#"+id).delay(80).css({"left":"0px", "top":"0px", "width":"100%", "height":"100%"});
     $("#slider>a>img#"+id).fadeIn(fadeInOutTime);
     $("#sliderText>div#"+textDisplay).delay(80).fadeIn(fadeInOutTime);
     sliderint = textDisplay;
     sliderNext = textDisplay+1;
     startSlider();
}
