$(document).ready(function(){
	$(document).on('mouseenter', '#logo', function(event) {
		$('.menu-left').slideToggle("slow");
	});
	$(document).on('mouseleave', '.menu-left', function(event) {
		$('.menu-left').slideToggle("slow");
	});
	var page1 = $('.page1').offset().top;
	var page2 = $('.page2').offset().top;
	var page3 = $('.page3').offset().top;
	var page4 = $('.page4').offset().top;
	var page5 = $('.page5').offset().top;
	var page6 = $('.page6').offset().top;
	$('body').bind('mousewheel', function(e){
		var scroll = $('html,body').scrollTop();
		console.log(scroll);
	  if(e.originalEvent.wheelDelta == 120){
	  	if(scroll == page6){
	  		$('html,body').animate({scrollTop : page5},'slow');
	  	}else if(scroll == page5){
	  		console.log('11');
	  		$('html,body').animate({scrollTop : page4},'slow');
	  	}else if(scroll == page4){
	  		$('html,body').animate({scrollTop : page3},'slow');
	  	}else if(scroll == page3){
	  		$('html,body').animate({scrollTop : page2},'slow');
	  	}else if(scroll == page2){
	  		$('html,body').animate({scrollTop : page1},'slow');
	  		$('.navble').css('color','white');
	  		$('#sreach').css('border-bottom-color','white');
	  	}
	  }else if(e.originalEvent.wheelDelta == -120){
	  	if(scroll == page1){
	  		$('html,body').animate({scrollTop : page2},'slow');
	  		$('.navble').css('color','black');
	  		$('#sreach').css('border-bottom-color','black');
	  	}else if(scroll == page2){
	  		$('html,body').animate({scrollTop : page3},'slow');
	  	}else if(scroll == page3){
	  		$('html,body').animate({scrollTop : page4},'slow');
	  	}else if(scroll == page4){
	  		$('html,body').animate({scrollTop : page5},'slow');
	  	}else if(scroll == page5){
	  		$('html,body').animate({scrollTop : page6},'slow');
	  	}else if(scroll == page6){
	  		$('html,body').animate({scrollTop : page1},'slow');
	  		$('.navble').css('color','white');
	  		$('#sreach').css('border-bottom-color','white');
	  	}
	  }
	});
})
