// Smooth scrolling for anchor links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


// Highlight active navigation link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navigationLink = document.querySelector(`nav a[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navigationLink.classList.add('active');
        } else {
            navigationLink.classList.remove('active');
        }
    });
});


// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contact-form').reset();
    }, 1000);
});


// Function to load page content dynamically
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            animatePage(); // Call animation function after content is loaded
        })
        .catch(error => console.error('Error loading page:', error));
}

// Function to animate page content
function animatePage() {
    // Add animations to elements within the loaded content
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        // Apply animation classes (e.g., fade-in, slide-up) based on scroll position or other triggers
        section.classList.add('fade-in');
    });
}
