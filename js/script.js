// Mobile Menu Toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuButton.setAttribute('aria-expanded', false);
            menuButton.innerHTML = '☰';
        }
    });
});

    // Form submission code
    const contactForm = document.getElementById('contactForm');
    const para = document.getElementById('para');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || phone === "" || email === "" || message === "") {
            para.innerText = "Invalid info! All fields are required.";
            para.style.color = "red";
        } else {
            para.innerText = "Your form has been submitted!";
            para.style.color = "green";
            contactForm.reset();
        }

        setTimeout(() => {
            para.innerText = "";
        }, 3000);
    });
