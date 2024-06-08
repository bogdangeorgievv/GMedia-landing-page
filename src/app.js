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

document.querySelector(".nav-btn").addEventListener("click", function () {
    this.classList.add("scaled");

    setTimeout(() => {
        this.classList.remove('scaled');
    }, 200)
})


document.querySelector(".logo").addEventListener("click", function () {
    this.classList.add("scaled");

    setTimeout(() => {
        this.classList.remove('scaled');
    }, 200)
})
