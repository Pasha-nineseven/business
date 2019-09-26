function classList() {
	var menuBtn = document.querySelector('.menu-btn');
	var	menu    = document.querySelector('.menu-mobile');
	var	menuBg  = document.querySelector('.menu-mobile__bg');
	var	body    = document.body;

	menuBtn.addEventListener( "click", function() {
    	this.classList.toggle('active');
    	menu.classList.toggle('active');
    	menuBg.classList.toggle('active');
    	body.classList.toggle('fixed');
	});
}
document.addEventListener("DOMContentLoaded", classList);


