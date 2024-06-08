const faqsRef = document.querySelectorAll('.faq');

faqsRef.forEach(faq => {
    faq.addEventListener("click", () => { 
        faq.classList.toggle("active")
    });
});

// for logos

const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy)

const partnersCopy = document.querySelector(".partners-slide").cloneNode(true);
document.querySelector('.partners').appendChild(partnersCopy);

// change color of button when pressed on mobile or tablet

document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('nav-btn');

    // Event listener for touchstart (mobile/tablet)
    navButton.addEventListener('touchstart', function() {
        navButton.classList.add('pressed');
    });

    // Event listener for touchend (mobile/tablet)
    navButton.addEventListener('touchend', function() {
        navButton.classList.remove('pressed');
    });

    navButton.addEventListener('mouseleave', function() {
        navButton.classList.remove('pressed');
    });
});