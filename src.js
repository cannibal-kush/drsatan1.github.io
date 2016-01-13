$(document).ready(function(){
	var pathname = $(location).attr('href');
	var last = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);
	
	$('#menuJs').append('<li class="active"><a href="index.html" accesskey="1" title="">Homepage</a></li>');
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
});