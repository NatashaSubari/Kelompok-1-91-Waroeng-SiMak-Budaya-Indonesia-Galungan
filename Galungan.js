document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".ddhorizontal");

    dropdowns.forEach((dropdown) => {
        const content = dropdown.querySelector(".dd-content");

        content.style.opacity = "0";
        content.style.visibility = "hidden";
        content.style.transform = "translateY(-10px)";
        content.style.transition = "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease";

        dropdown.addEventListener("mouseenter", () => {
            content.style.opacity = "1";
            content.style.visibility = "visible";
            content.style.transform = "translateY(0)";
        });

        dropdown.addEventListener("mouseleave", () => {
            content.style.opacity = "0";
            content.style.visibility = "hidden";
            content.style.transform = "translateY(-10px)";
        });
    });
});


window.onscroll = function() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll('.perkenalananggota').forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.classList.add('active');
    });

    member.addEventListener('mouseleave', () => {
        member.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxContainer = document.getElementById("box");
    const closedBox = document.getElementById("closedBox");
    const openBox = document.getElementById("openBox");
    const popup = document.getElementById("popup");

    let isOpen = false; // Track state

    boxContainer.addEventListener("click", function () {
        if (!isOpen) {
            closedBox.style.opacity = "0";  // Hide closed box
            openBox.style.opacity = "1";  // Show open box
            popup.classList.add("show-popup"); // Show popup
        } else {
            closedBox.style.opacity = "1"; // Show closed box
            openBox.style.opacity = "0";  // Hide open box
            popup.classList.remove("show-popup"); // Hide popup
        }
        isOpen = !isOpen; // Toggle state
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if it's the homepage
    if (window.location.pathname === "/" || window.location.pathname === "indexgalungan.html") {
        if (!localStorage.getItem("visited")) {
            document.body.classList.add("fade-in"); // Apply fade-in effect
            localStorage.setItem("visited", "true"); // Mark as visited
        }
    }
});

