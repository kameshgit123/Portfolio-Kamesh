let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:200, origin: 'top'});
sr.reveal('.menu-btn',{delay:200, origin: 'right'});

sr.reveal('.home-tetx span',{delay:600, origin: 'top'});
sr.reveal('.home-tetx h1',{delay:680, origin: 'left'});
sr.reveal('.home-tetx p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});
sr.reveal('.share a',{delay:950, origin: 'right'});
sr.reveal('.home-img',{delay:1000, origin: 'rigth'});
sr.reveal('.share p',{delay:950, origin: 'left'});

sr.reveal('.top-header',{delay:600, origin: 'top'});
sr.reveal('.project-container',{delay:680, origin: 'left'});
sr.reveal('.project-box h3',{delay:750, origin: 'right'});
sr.reveal('.project-box i',{delay:600, origin: 'left'});
sr.reveal('.project-box lable',{delay:950, origin: 'left'});


sr.reveal('.contact-info',{delay:1000, origin: 'rigth'});
sr.reveal('.contact-info h2',{delay:600, origin: 'top'});
sr.reveal('.contact-info i',{delay:780, origin: 'left'});
sr.reveal('.contact-info p',{delay:750, origin: 'right'});
sr.reveal('.form-inputs',{delay:600, origin: 'left'});
sr.reveal('.text-area',{delay:600, origin: 'left'});
sr.reveal('.form-button',{delay:780, origin: 'left'});
sr.reveal('.middle-footer',{delay:750, origin: 'right'});
sr.reveal('.top-footer p',{delay:600, origin: 'left'});
sr.reveal('.bottom-footer',{delay:780, origin: 'left'});


sr.reveal('.main-text',{delay:600, origin: 'top'});
sr.reveal('.skill-left h3',{delay:680, origin: 'left'});
sr.reveal('.info',{delay:750, origin: 'right'});
sr.reveal('.bar',{delay:860, origin: 'left'});
sr.reveal('.skill-right h3',{delay:950, origin: 'right'});
sr.reveal('.box',{delay:200, origin: 'rigth'});
sr.reveal('.share p',{delay:950, origin: 'left'});



sr.reveal('.heading',{delay:600, origin: 'top'});
sr.reveal('.education-column',{delay:680, origin: 'left'});
sr.reveal('.education-box',{delay:750, origin: 'right'});
sr.reveal('.content',{delay:860, origin: 'left'});
sr.reveal('.education-column title',{delay:950, origin: 'right'});
sr.reveal('.box',{delay:200, origin: 'rigth'});
sr.reveal('.share p',{delay:950, origin: 'left'});



//circlr skill////////////////////////////////////////////////////////////////////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points ="";
    var rotate = 360 / dots;


    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})

//contact to Email////////////////////////////////////////////////////////////////////////////////////////
