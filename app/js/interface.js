// // Sticky Nav Component
// var Sticky = (function() {
//   'use strict';

//   var CSS_CLASS_ACTIVE = 'is-fixed';

//   var Sticky = {
//     element: null,
//     position: 0,
//     addEvents: function() {
//       window.addEventListener('scroll', this.onScroll.bind(this));
//     },
//     init: function(element) {
//       this.element = element;
//       this.addEvents();
//       this.position = element.offsetTop ;
//       this.onScroll();
//     },
//     aboveScroll: function() {
//       return this.position < window.scrollY;
//     },
//     onScroll: function(event) {
//       if (this.aboveScroll()) {
//         this.setFixed();
//       } else {
//         this.setStatic();
//       }
//     },
//     setFixed: function() {
//       this.element.classList.add(CSS_CLASS_ACTIVE);
//       // not needed if added with CSS Class
//       this.element.style.position = 'fixed';
//       this.element.style.top = 0;
//     },
//     setStatic: function() {
//       this.element.classList.remove(CSS_CLASS_ACTIVE);
//       // not needed if added with CSS Class
//       this.element.style.position = 'static';
//       this.element.style.top = 'auto';
//     }
//   };

//   return Sticky;

// })();




function classList() {
	// var sidebar = document.querySelector('.sticky-sidebar');
	// var content = document.querySelector('.document');
	// var floatSidebar = FloatSidebar({
	//     sidebar: sidebar,
	//     relative: content
	// });
	//  Init Sticky
	// var sticky = document.querySelector('.sticky-sidebar');
	// if (sticky)
	//   Sticky.init(sticky);



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

			removeClass(contentsBtn.parentNode,"active");
			removeClass(contentsBtn,"active");
		});
	}
	//CONTENTS TOGGLE
	var contentsBtn = document.querySelector('.js-contents-toggle-link');
	if (typeof(contentsBtn) != 'undefined' && contentsBtn != null){
		contentsBtn.addEventListener( "click", function() {
			toggleClass(this, 'active');
			toggleClass(this.parentNode, 'active');

			removeClass(filterBtn.parentNode,"active");
			removeClass(filterBtn,"active");
		});
	}

	//CLICK OUTSIDE -- filter
	var filtersOut = document.querySelector('.content-item--filter');
	document.body.addEventListener("click", function(e) {
	  	var target = e.target || e.srcElement;
	  
		if (target !== filtersOut && !isChildOf(target, filtersOut)) {
		    removeClass(filterBtn.parentNode,"active");
			removeClass(filterBtn,"active");
		}
	}, false);

	//CLICK OUTSIDE -- contents
	var contentsOut = document.querySelector('.content-item--contents');
	document.body.addEventListener("click", function(e) {
	  	var target = e.target || e.srcElement;
	  
		if (target !== contentsOut && !isChildOf(target, contentsOut)) {
		    removeClass(contentsBtn.parentNode,"active");
			removeClass(contentsBtn,"active");
		}
	}, false);

	//SEARCH-FORM TOGGLE
	var searchformBtn = document.querySelector('.js-search-form-toggle');
	var asideFilter = document.querySelector('.page-aside--filter');
	if (typeof(searchformBtn) != 'undefined' && searchformBtn != null){
		searchformBtn.addEventListener( "click", function() {
			toggleClass(asideFilter, 'active');
		});

		document.body.addEventListener("click", function(e) {
		  	var target = e.target || e.srcElement;
		  
			if (target !== asideFilter && target !== searchformBtn && !isChildOf(target, asideFilter)) {
			    removeClass(asideFilter,"active");
			}
		}, false);
	}



	//CHECK RESOLUTION
	// var x = window.matchMedia("(max-width: 600px)");
	// checkResolution(x);
	// x.addListener(checkResolution);

	// function checkResolution(x) {
	//   	if (x.matches) { // If media query matches
	//     	document.body.style.backgroundColor = "yellow";
	//   	} else {
	//     	document.body.style.backgroundColor = "pink";
	//   	}
	// }

	//CHECK ALL
	var checkAllBtn = document.querySelector('.checkAll');
	if (typeof(checkAllBtn) != 'undefined' && checkAllBtn != null){
		checkAllBtn.addEventListener( "click", function() {
			var checkboxes = document.getElementsByName("notif");
			for(var i = 0; i < checkboxes.length; i++) {
			    if(checkboxes[i].type == "checkbox") {
			        checkboxes[i].checked = true; 
			    }  
			}

			var checkboxes_control = document.getElementsByName("block_control");
			for(var i = 0; i < checkboxes_control.length; i++) {
			    if(checkboxes_control[i].type == "checkbox") {
			        checkboxes_control[i].checked = true; 
			    }  
			}

			var remind = document.getElementsByName("block_remind");
			for(var i = 0; i < remind.length; i++) {
			    if(remind[i].type == "checkbox") {
			        remind[i].checked = true; 
			    }  
			}
		});
	}
	//UNCHECK ALL
	var unCheckAllBtn = document.querySelector('.uncheckAll');
	if (typeof(unCheckAllBtn) != 'undefined' && unCheckAllBtn != null){
		unCheckAllBtn.addEventListener( "click", function() {
			var checkboxes = document.getElementsByName("notif");
			for(var i = 0; i < checkboxes.length; i++) {
			    if(checkboxes[i].type == "checkbox") {
			        checkboxes[i].checked = false; 
			    }  
			}

			var checkboxes_control = document.getElementsByName("block_control");
			for(var i = 0; i < checkboxes_control.length; i++) {
			    if(checkboxes_control[i].type == "checkbox") {
			        checkboxes_control[i].checked = false; 
			    }  
			}

			var remind = document.getElementsByName("block_remind");
			for(var i = 0; i < remind.length; i++) {
			    if(remind[i].type == "checkbox") {
			        remind[i].checked = false; 
			    }  
			}
		});
	}






	//SHOW HIDDEN INPUT
	var source = document.querySelector("#js-select-sphere");
	var hiddenDiv = document.querySelector("#area-hidden");
	if (typeof(source) != 'undefined' && source != null){
		source.addEventListener('change', function(){
			 if (this.options[this.selectedIndex].value == "Другое") {
				hiddenDiv.style.display='block';
			} 
			else{
				hiddenDiv.style.display='none';
			}
		})
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

function removeClass(element,className) {
  var currentClassName = element.getAttribute("class");
  if (typeof currentClassName!== "undefined" && currentClassName) {

    var class2RemoveIndex = currentClassName.indexOf(className);
    if (class2RemoveIndex != -1) {
        var class2Remove = currentClassName.substr(class2RemoveIndex, className.length);
        var updatedClassName = currentClassName.replace(class2Remove,"").trim();
        element.setAttribute("class",updatedClassName);
    }
  }
  else {
    element.removeAttribute("class");   
  } 
}

function isChildOf(child, parent) {
  if (child.parentNode === parent) {
    return true;
  } else if (child.parentNode === null) {
    return false;
  } else {
    return isChildOf(child.parentNode, parent);
  }
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