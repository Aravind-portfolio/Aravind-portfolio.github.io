const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
});
document.querySelectorAll('.animate').forEach(element => observer.observe(element));

const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500); 
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

emailjs.init('ekKGkOkEGo62YgrlD');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userEmail = document.getElementById('email').value;
    const userMessage = document.getElementById('message').value;
    const userName = document.getElementById('name').value;    

    const templateParams = {
        to_email: userEmail,
        message: userMessage,
        from_name: userName,
        from_mail: userEmail,
        to_name: 'Aravind'
    };

    emailjs.send('service_w58b0wy', 'template_snjecdv', templateParams)
        .then(function(response) {
            document.getElementById('response-message').textContent = "Message Sent Successfully!";
            document.getElementById('response-message').style.color = "green";
            console.log('Success!', response);
        }, function(error) {
            console.error('Error occurred:', error);
            document.getElementById('response-message').textContent = "Oops! Something went wrong. Please try again.";
            document.getElementById('response-message').style.color = "red";
        });

    document.getElementById('contact-form').reset();
});
