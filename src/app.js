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