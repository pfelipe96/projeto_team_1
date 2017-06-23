window.onload = function(){
	var botoes = [document.getElementById('botaohome'), document.getElementById('botaoloja'), document.getElementById('botaosobre'), document.getElementById('botaocontatos')];
	var texto;


	function ativar(){
		texto = this.innerHTML;

		if(texto == "Home"){
			this.innerHTML = "";
			this.classList.add('glyphicon');
			this.classList.add('glyphicon-home');
		} else if(texto == "Loja"){
			this.innerHTML = "";
			this.classList.add('glyphicon');
			this.classList.add('glyphicon-shopping-cart');
		} else if(texto == "Sobre"){
			this.innerHTML = "";
			this.classList.add('glyphicon');
			this.classList.add('glyphicon-earphone');
		} else if(texto == "Contatos"){
			this.innerHTML = "";
			this.classList.add('fa');
			this.classList.add('fa-birthday-cake');
		}
	}

	function desativar(){

		if(texto == "Home"){
			this.innerHTML = "";
			this.classList.remove('glyphicon');
			this.classList.remove('glyphicon-home');
		} else if(texto == "Loja"){
			this.innerHTML = "";
			this.classList.remove('glyphicon');
			this.classList.remove('glyphicon-shopping-cart');
		} else if(texto == "Sobre"){
			this.innerHTML = "";
			this.classList.remove('glyphicon');
			this.classList.remove('glyphicon-earphone');
		} else if(texto == "Contatos"){
			this.innerHTML = "";
			this.classList.remove('fa');
			this.classList.remove('fa-birthday-cake');
		}

		this.innerHTML = texto;
	}

	function icon(texto){

	}


    for(var i = 0; i < botoes.length; i++){
      botoes[i].onmouseenter = ativar;
      botoes[i].onmouseleave = desativar;
      }
}

/*glyphicon glyphicon-shopping-cart
  glyphicon glyphicon-earphone
  fa fa-bithday-cake*/











/*$(document).ready(function() {
    $('nav').click(function() {
        $('nav a').removeClass("active"); //aqui removemos a class do item anteriormente clicado para que possamos adicionar ao item clicado
        $(this).addClass("active"); //aqui adicionamos a class ao item clicado*/

        /*$("navagation").hover(function() {
  		$(this).addClass("glyphicon glyphicon-home");
			}, function() {
 		$(this).removeClass("home_nav");
		});
    });
});

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})*/

