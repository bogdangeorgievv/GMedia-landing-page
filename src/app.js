const faqsRef = document.querySelectorAll('.faq');

faqsRef.forEach(faq => {
    faq.addEventListener("click", () => { 
        faq.classList.toggle("active")
    });
});

const logoRef = document.querySelector('.logo')

logoRef.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// for logos

const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy)

const partnersCopy = document.querySelector(".partners-slide").cloneNode(true);
document.querySelector('.partners').appendChild(partnersCopy);


// change color of button when pressed on mobile or tablet

document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.getElementById('nav-btn');

    navButton.addEventListener('touchstart', function() {
        navButton.classList.add('pressed');
    });

    navButton.addEventListener('touchend', function() {
        navButton.classList.remove('pressed');
    });

    navButton.addEventListener('mouseleave', function() {
        navButton.classList.remove('pressed');
    });
});