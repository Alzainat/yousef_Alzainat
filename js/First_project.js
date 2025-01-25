/*toggle icon navbar*/



const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*scroll section actic link*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    /*sticky navbar*/

    let header = document.querySelector('header');
    header.classlist.toggle('sticky', window.scrollY > 100);
    
    /*remove toggle icon and when click navbar link (scroll)*/
    menuIcon.classlist.remove('bx-x');
    navbar.classlist.remove('active');
};

/*scroll reveal*/

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200,

 });

 ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
 ScrollReveal().reveal('.home-img,.services-container, .project-box,.contact form', { origin:'bottom' });
 ScrollReveal().reveal('.home-content h1,.About-img', { origin:'left' });
 ScrollReveal().reveal('.home-content p,.About-content', { origin:'right' });

 /*typed js*/
 const typed = new Typed('.multiple-text',{
    strings:['Full Stack Web Developer','Streamer','Body Builder'],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop:true
 });