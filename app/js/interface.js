function classList() {
	
	var menuBtn = document.querySelector('.menu-btn');
	var	menu    = document.querySelector('.menu-mobile');
	var	menuBg  = document.querySelector('.menu-mobile__bg');
	var	body    = document.body;

	//MENU-MOBILE TOGGLE
	menuBtn.addEventListener('click', function() {
	    toggleClass(menuBtn, 'active');
	    toggleClass(menu, 'active');
	    toggleClass(menuBg, 'active');
	    toggleClass(body, 'fixed');
	});

	//FILTER TOGGLE
	var filterBtn = document.querySelector('.js-filters-toggle-link');
	if (typeof(filterBtn) != 'undefined' && filterBtn != null){
		filterBtn.addEventListener( "click", function() {
			toggleClass(this, 'active');
			toggleClass(this.parentNode, 'active');
		});
	}
	//CONTENTS TOGGLE
	var contentsBtn = document.querySelector('.js-contents-toggle-link');
	if (typeof(contentsBtn) != 'undefined' && contentsBtn != null){
		contentsBtn.addEventListener( "click", function() {
			toggleClass(this, 'active');
			toggleClass(this.parentNode, 'active');
		});
	}

	//SEARCH-FORM TOGGLE
	var searchformBtn = document.querySelector('.js-search-form-toggle');
	var asideFilter = document.querySelector('.page-aside--filter');
	if (typeof(searchformBtn) != 'undefined' && searchformBtn != null){
		searchformBtn.addEventListener( "click", function() {
			toggleClass(asideFilter, 'active');
		});
	}

}

function toggleClass(element, className){
    if (!element || !className){
        return;
    }
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}


document.addEventListener("DOMContentLoaded", classList);

//PAGES-LIST (remove)
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
        				<li><a href="search.html">Поиск</a></li> \
        				<li><a href="control1.html">Закладки на к.</a></li> \
        				<li><a href="control2.html">Документы на к.</a></li> \
        				<li><a href="control3.html">Л.напоминания</a></li> \
        				<li><a href="add-notif.html">Добавить напоминание</a></li> \
        				<li><a href="thanks.html">Спасибо</a></li> \
        				<li><a href="cabinet.html">Личный кабинет</a></li> \
        				<li><a href="notif.html">Настр. нотификаций</a></li> \
        				<li><a href="questions.html">Вопросы</a></li> \
        				<li><a href="questions2.html">Вопросы2</a></li> \
        				<li><a href="questions3.html">Задать вопрос</a></li> \
        				<li><a href="logged-in.html">Вход выполнен</a></li> \
        				<li><a href="comments.html">Комментарии</a></li> \
					</ol> \
				</div>';
document.getElementsByTagName('body')[0].innerHTML += divStr;