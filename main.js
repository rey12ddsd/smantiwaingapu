/* ============================================
   DARK MODE SWITCH
============================================= */
const body = document.body;
const toggle = document.getElementById("darkToggle");

// Set mode dari localStorage
if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
}

// Switch mode
toggle.onclick = () => {
    body.classList.toggle("dark");
    localStorage.setItem("mode", body.classList.contains("dark") ? "dark" : "light");

    // Efek transisi halus
    body.style.transition = "background 0.4s, color 0.4s";
};


/* ============================================
   PRELOADER ELEGAN
============================================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("preloader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity .6s ease";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);
});


/* ============================================
   GALERI SLIDER PREMIUM
============================================= */
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
let autoSlide;

function showSlide() {
    slides.forEach(s => s.classList.remove("active"));
    slides[slideIndex].classList.add("active");
}

// Next & Prev
document.querySelector(".next").onclick = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
};

document.querySelector(".prev").onclick = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
};

// Auto Slide setiap 4 detik
function startAutoSlide() {
    autoSlide = setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide();
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

showSlide();
startAutoSlide();

// Pause saat mouse hover
document.querySelector(".slider").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);


/* ============================================
   FORM PPDB – Notification
============================================= */
const ppdbForm = document.getElementById("ppdbForm");

if (ppdbForm) {
    ppdbForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const msg = document.getElementById("msg");
        msg.innerHTML = "✔ Pendaftaran berhasil dikirim! (Demo)";
        msg.style.padding = "12px";
        msg.style.background = "#10b981";
        msg.style.color = "white";
        msg.style.borderRadius = "10px";
        msg.style.marginTop = "15px";
        msg.style.textAlign = "center";
        msg.style.animation = "fadeIn .5s";
    });
}
/* ========== DROPDOWN CLICK ========== */
const aboutBtn = document.getElementById("aboutBtn");
const aboutMenu = document.getElementById("aboutMenu");

aboutBtn.onclick = () => {
    aboutMenu.style.display =
        aboutMenu.style.display === "block" ? "none" : "block";
};


/* Tutup menu jika klik di luar dropdown */
document.addEventListener("click", function(e) {
    if (!aboutBtn.contains(e.target) && !aboutMenu.contains(e.target)) {
        aboutMenu.style.display = "none";
    }
});
