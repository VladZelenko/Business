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