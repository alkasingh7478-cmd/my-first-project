// ============================
// Typing Effect
// ============================

const typing = document.querySelector(".typing");

const words = [
    "Front-End Developer",
    "HTML Developer",
    "CSS Designer",
    "GitHub Learner",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {

        isDeleting = true;
        speed = 1500;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ============================
// Reveal Animation
// ============================

function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// ============================
// Scroll To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ============================
// Active Navigation Link
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});