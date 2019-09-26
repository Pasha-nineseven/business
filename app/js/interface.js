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


var divStr = 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 160px;"> \
					<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 14px" onclick="this.parentNode.remove();">Close X</a> \
					<style> \
						#pages { padding: 10px 20px 0 25px; font-size: 16px; margin: 0; } \
						#pages a { text-decoration: none; } \
						#pages li { margin: 5px 0; } \
					</style> \
			  		<ol id="pages"> \
				  		<li><a href="index.html">Index</a></li> \
        				<li><a href="enter.html">Enter</a></li> \
        				<li><a href="document.html">Документ</a></li> \
					</ol> \
				</div>';
document.getElementsByTagName('body')[0].innerHTML += divStr;