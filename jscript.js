$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 14) {
    	$('nav').addClass('shrink');
    }
    else {
    $('nav').removeClass('shrink');
    }
  });
});