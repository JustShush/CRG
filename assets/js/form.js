// Slideshow functionality
var i = 0;
var slides = document.querySelectorAll('.slideshow-container img');

setInterval(() => {
	slides[i].classList.remove('active');
	i = (i + 1) % slides.length;
	slides[i].classList.add('active');
}, 15000);
