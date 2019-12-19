//menu stiky
///*alert(menu.offsetTop);*/ /*calcualar distancia en pixeles*/
///*alert(window.pageYOffset);*/ /*calcula cuanto se ha hecho de scroll*/
var menu = document.getElementById("menu");
var altura = menu.offsetTop;
window.addEventListener("scroll", function(){
if(window.pageYOffset > altura)	{
	menu.classList.add("fixed");
} else {
	menu.classList.remove("fixed");
}
})