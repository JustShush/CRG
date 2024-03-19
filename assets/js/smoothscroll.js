$(function () {
	// Selects everything with the class smoothScroll
	// This should prevent problems with carousel, scrollspy, etc...
	$('.smoothScroll').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000); // The speed of the scroll in ms
				return false;
			}
		}
	});
});
