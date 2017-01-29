//fixed top nav
$(window).scroll(function(e){
	var $el = $('.header');
	var isPositionFixed = ($el.css('position') == 'fixed');
	if ($(this).scrollTop() > 42 && !isPositionFixed){
		$('.header').css({'position': 'fixed', 'top': '0px' , 'z-index' : '10'});
	}
	if ($(this).scrollTop() < 42 && isPositionFixed)
	{
		$('.header').css({'position': 'static', 'top': '0px'});
	}
});


//hamburger
$(document).ready(function(){
	var touch = $('#touch-menu');
	var menu = $('.nav');
	
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});

//scroll не правильно працює із-за top-bar
$(document).ready(function() {
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top -110}, 1000);
		return false;
	});
});