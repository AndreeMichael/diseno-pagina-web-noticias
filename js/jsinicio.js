let animado=document.querySelectorAll("article");


function mostrarScroll(){
    let scrollTop=document.documentElement.scrollTop;  //cantidad de escroll que se va haciendo mientras bajas
    for(var i=0; i<animado.length; i++){
        let alturaAnimado=animado[i].offsetTop;
        if(alturaAnimado-480<scrollTop){
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarderecha");
        }
    }

}

window.addEventListener('scroll',mostrarScroll);