$.fn.scrollView = function () { //THIS FUNCTION SCROLLS TO AN ELEMENT
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

$(document).ready(function(){
	if($('#header-wrapper').length == 0) {
		$('#arrow').hide(0,null);
	} //If there is no header image, the arrow isnt needed.
	
	if($(this).scrollTop() > 0){
		$('#arrow').hide(0,null);
	} //IF YOU'RE SCROLLED PAST 0, HIDE THE ARROW (FOR REFRESHES)
	
	// ** Making the menu bar ** //
	var pathname = $(location).attr('href');
	var last = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);
	
	$('#menuJs').append('<li class="active"><a href="index.html" accesskey="1" title="">Home</a></li>');
	$('#menuJs').append('<li><a href="about.html" accesskey="2" title="">About Us</a></li>');
	$('#menuJs').append('<li><a href="solutions.html" accesskey="3" title="">Services & Solutions</a></li>');
	$('#menuJs').append('<li><a href="careers.html" accesskey="4" title="">Careers</a></li>');
	
	$('#menuJs li a').each(function(){
		var here = this.href;
		var thisLast = here.substring(here.lastIndexOf("/") + 1, here.length);
		
		if (thisLast == last){
			$(this).parent().addClass("active");
		} else{
			if(pathname.match(/html$/)){
				$(this).parent().removeClass("active");
			}
		}
	});
	
	// ** Making the copyright bar ** //
	
	$('body').append('<div id="copyright" class="container"><p>&copy; Simon V All rights reserved. | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a> / S Visser</p></div>');
	
	// ** Event handler for button ** //
	
	$('#arrow img').click(function(){
		$('#wrapper').scrollView();
		$('#arrow').hide(500,null); //SCROLL DOWN, HIDE BUTTON
	});
	
});



(function () {
    var previousScroll = 0;
	
	$(window).scroll(function() {
		var currentScroll = $(this).scrollTop();
		var scrollDir = -1;
		if (currentScroll > previousScroll){
			scrollDir = 0;
		} else {
			scrollDir = 1;
		}
		previousScroll = currentScroll;
		console.log($(document).scrollTop());
		
		if(currentScroll > $('#header-wrapper').offset().top){
			$('#arrow').hide(500,null);
		}
		
		if(currentScroll == $('#header-wrapper').offset().top){
			if($('#header-wrapper').length != 0){ //if the header image is even there,
				$('#arrow').show(500, null); //SCROLLED UP? SHOW THE ARROW.
			}

		}
	});
}()); //run this anonymous function immediately*/