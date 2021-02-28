$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});

//overlayyyyyyyy popup
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});


//////estilosssssssss hover 
$("a").hover(function(){
	$(this).css("opacity", "88%");
	}, function(){
	$(this).css("opacity", "100%");
  });
  $("section").hover(function(){
	$(this).css("opacity", "88%");
	
	}, function(){
	$(this).css("opacity", "100%");
	
  });
  $("h4").hover(function(){
	$(this).css("text-decoration", "underline");
	}, function(){
		$(this).css("text-decoration", "none");
  });



  $("button").hover(function(){
	$(this).css("opacity", "88%");
	//$(this).css("color", "black");
	}, function(){
		$(this).css("opacity", "100%");
		//$(this).css("color", "white");
	
  });

  

  	
 
