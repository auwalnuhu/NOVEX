/* ==========================================
   NOVEX — JAVASCRIPT ENGINE
   Main interactive functionality
========================================== */

"use strict";

/* 1. SELECT WEBSITE ELEMENTS */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const navigationLinks = document.querySelectorAll(
    ".nav-links a"
);

/* 2. MOBILE NAVIGATION */

function toggleNavigation() {
    if (!menuToggle || !navLinks) return;

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
}

if (menuToggle) {
    menuToggle.addEventListener(
        "click",
        toggleNavigation
    );
}

/* 3. CLOSE MENU AFTER CLICKING A LINK */

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});

/* 4. ACTIVE NAVIGATION LINK */

function updateActiveNavigation() {

    const currentSection = window.scrollY + 150;

    navigationLinks.forEach(function(link) {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const section = document.querySelector(targetId);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            currentSection >= sectionTop &&
            currentSection < sectionBottom
        ) {
            navigationLinks.forEach(function(item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

/* 5. REVEAL ELEMENTS WHEN SCROLLING */

const revealElements = document.querySelectorAll(
    ".feature-card, .section-heading, .about"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function(entries, observer) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function(element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}

/* 6. BUTTON INTERACTION */

const exploreButton = document.querySelector(
    ".primary-btn"
);

if (exploreButton) {

    exploreButton.addEventListener("click", function() {

        console.log(
            "Welcome to the NOVEX digital universe."
        );

    });

}

/* 7. FEATURE CARD INTERACTIONS */

const featureCards = document.querySelectorAll(
    ".feature-card"
);

featureCards.forEach(function(card, index) {

    card.addEventListener("mouseenter", function() {

        console.log(
            "NOVEX feature selected:",
            index + 1
        );

    });

});

/* 8. WEBSITE STARTUP */

function initializeNOVEX() {

    console.log(
        "%c NOVEX INITIALIZED ",
        "background:#7165ff;color:white;padding:10px;font-weight:bold;"
    );

    console.log(
        "Your digital universe is ready."
    );

    updateActiveNavigation();

}

/* 9. RUN WEBSITE */

document.addEventListener(
    "DOMContentLoaded",
    initializeNOVEX
);
