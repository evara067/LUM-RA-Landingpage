const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a"). 
forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const subscribeForm = document.getElementById("subscribeForm");
const message = document.getElementById("message");

subscribeForm.addEventListener("submit", (e) => {
     e.preventDefault();

     message.textContent = "Thank you for subscribing!";
     subscribeForm.reset();

     setTimeout(() => {
    message.textContent = "";
}, 4000);

});



lucide.createIcons();