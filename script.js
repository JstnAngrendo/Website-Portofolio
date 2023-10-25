var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

links.forEach(function (link) {
    link.addEventListener("click", function () {
        hamburger.classList.remove("click");
        navlist.classList.remove("open");
    });
})

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".input", {
        strings: ["Justin Luvian Angrendo", "Front-End Developer", "UI/UX Designer", "Back-End Developer"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });
});


document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top;
            window.scrollTo({
                top: offsetTop + window.scrollY,
                behavior: 'smooth'
            });
        }
    });
});

// skills

const items = [
    { image: "./image/problem solving.png", text: "Problem Solving" , details:"Critical Thinking, Analytical Thinking, Decision-making"},
    { image: "./image/teamwork.png", text: "Teamwork", details: "Collaboration, Delegation, Cooperation" },
    { image: "./image/leadership.png", text: "Leadership", details: "Motivation, Communication, Integrity" },
    { image: "./image/web developer.png", text: "Web Developer", details: "HTML, CSS, JavaScript, Front-end, Back-end" },
    { image: "./image/project-management.png", text: "Project Management", details: "Planning,  Scheduling, Team Management" }
];

let currentIndex = 0;

function displayItem(index) {
    const displayedImage = document.getElementById("displayedImage");
    const displayedTitle = document.getElementById("displayedTitle");
    const displayedText = document.getElementById("displayedText");
    
    displayedImage.src = items[index].image;
    displayedTitle.textContent = items[index].text;
    displayedText.textContent = items[index].details;
}

function nextItem() {
    displayItem(currentIndex);
    currentIndex = (currentIndex + 1) % items.length;
}

for (let i = 0; i < 2; i++) {
    displayItem(i);
}

setInterval(nextItem, 3000); 
nextItem();


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkInView() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isOdd = section.classList.contains("odd");

           
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                if (isOdd) {
                    section.classList.add("show-me");
                } else {
                    section.classList.add("show-me-left"); 
                }
            }
        });
    }


    checkInView();


    window.addEventListener("scroll", checkInView);
});





