const header = document.getElementById('header');
    const toggle = document.getElementById('toggle');
    const navbar = document.getElementById('navbar');

    document.onclick = function(e){      
        if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
        }
    }
    toggle.onclick = function(){
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');
    }

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const inazuma = document.getElementById('inazuma');

    let div = document.getElementById('text_install')
        inazuma.onclick = function(e){
            if (div.style.display !== 'none' && e.target.id !== 'inazuma') {
            div.style.display = 'none';
        } else {
            div.style.display = 'block'
            inazuma.style.display = 'none'
        }
    }

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}); 

const arrow = document.getElementById('arrow')

arrow.onclick = function(e){      
            if(e.target.id !== 'arrow'){
            arrow.classList.remove('active')
            }
        }
        arrow.onclick = function(){
            arrow.classList.toggle('active');

        }

