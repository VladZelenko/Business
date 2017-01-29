// include('partials/resize-img.js');
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