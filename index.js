// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
    // body...
})

// typing effect 
let typed = new Typed('.auto-input', {
    strings: ["UI/UX Designer", "Frontend Developer","Android Mobile Developer", "PowerPoint Designer","Fast Learner"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 200,
    loop: true,
})

//active links 


//get all links
let navLinks = document.querySelectorAll('nav ul li a')
//get all sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY + 20
    section.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
    // body...
});