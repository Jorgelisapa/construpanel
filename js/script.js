//Slider en la variable
var slider=$("#slider");
//Almacenar botones
var next = $("#btn-next");
var prev = $("#btn-prev");

//Move ultima imagen al primer lugar
$("#slider section:last").insertBefore("#slider section:first");

//Mostrar primera imagen con margen de -100%
slider.css("margin-left","-"+100+"%");

function moverR() {
	slider.animate({
	marginLeft:"-"+200+"%"
	} ,700, function(){
	$("#slider section:first").insertAfter("#slider section:last"); slider.css("margin-left", "-"+100+"%");		   
});
}


function moverL() {
	slider.animate({
	marginLeft:0
	} ,700, function(){
	$("#slider section:last").insertBefore("#slider section:first"); slider.css("margin-left", "-"+100+"%");		   
});
}

next.on("click", function() {
	moverR();
});


prev.on("click", function() {
	moverL();
});

//Autoplay


function autoplay() {
	interval = setInterval(function(){
		moverR();					  
}, 4000);
}
	
autoplay();



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




