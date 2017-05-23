$(document).ready(function(){
	$('.some-btn').click(function() {
		$('.popup__shadow').fadeIn();
		$('.popup').fadeIn();
	});

	$('.popup__close').click(function() {
		$('.popup__shadow').fadeOut();
		$('.popup').fadeOut();
	});

	$(function () {
        function runIt() {
            $('.head-more__icon').animate({'bottom':'30px'},1100);
            $('.head-more__icon').animate({'bottom':'20px'},1100, runIt);
        }
        runIt();
    });
});	