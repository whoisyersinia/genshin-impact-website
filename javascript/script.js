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

    const text_install = document.getElementById('text_install')
        inazuma.onclick = function(e){
            if (text_install.style.display !== 'none' && e.target.id !== 'inazuma') {
            text_install.style.display = 'none';
        } else {
            text_install.style.display = 'block'
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


const normalattack = document.getElementById('normalattack');
const dash = document.getElementById('dash');
const elementalskill = document.getElementById('elementalskill');
const elementalburst = document.getElementById('elementalburst');

const normalattackvid = document.getElementById('normalattackvid');
const dashvid = document.getElementById('dashvid');
const elementalskillvid = document.getElementById('elementalskillvid');
const elementalburstvid = document.getElementById('elementalburstvid');

normalatackonclick();
function normalatackonclick() {
    normalattack.onclick = function (e) {
        if (normalattackvid.style.display !== 'none' && e.target.id !== 'normalattack') {
            normalattackvid.style.display = 'none';
        } else {
            normalattackvid.style.display = 'block';
            dashvid.style.display = 'none';
            elementalskillvid.style.display = 'none';
            elementalburstvid.style.display = 'none';
        }
    };
}

dashonclick();
function dashonclick() {
    dash.onclick = function (e) {
        if (dashvid.style.display !== 'none' && e.target.id !== 'dash') {
            dashvid.style.display = 'none';
            
        } else {
            normalattackvid.style.display = 'none';
            dashvid.style.display = 'block';
            elementalskillvid.style.display = 'none';
            elementalburstvid.style.display = 'none';

            startVid();
        }
    };

    function startVid() {
        dashvid.addEventListener('loadedmetadata', function() {
            this.currentTime = 5;
          }, false);          
    }
}

elementalskillonclick();
function elementalskillonclick() {
    elementalskill.onclick = function (e) {
        if (elementalskillvid.style.display !== 'none' && e.target.id !== 'elementalskill') {
            elementalskillvid.style.display = 'none';
        } else {
            normalattackvid.style.display = 'none';
            dashvid.style.display = 'none';
            elementalskillvid.style.display = 'block';
            elementalburstvid.style.display = 'none';
        }
    };
}

elementalburstonclick();
function elementalburstonclick() {
    elementalburst.onclick = function (e) {
        if (elementalburstvid.style.display !== 'none' && e.target.id !== 'elementalburst') {
            elementalburstvid.style.display = 'none';
        } else {
            normalattackvid.style.display = 'none';
            dashvid.style.display = 'none';
            elementalskillvid.style.display = 'none';
            elementalburstvid.style.display = 'block';
        }
    };
}