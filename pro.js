
// Smooth Scrolling for Navigation Menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Back to Top Button Work
let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
