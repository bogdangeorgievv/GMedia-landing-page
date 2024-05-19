const faqsRef = document.querySelectorAll('.faq');

faqsRef.forEach(faq => {
    faq.addEventListener("click", () => { 
        faq.classList.toggle("active")
    });
});

// for logos

const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy)

