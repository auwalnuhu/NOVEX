"use strict";

/* ======================================
   NOVEX — DIGITAL UNIVERSE ENGINE
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    /* MOBILE NAVIGATION */

    if (menuToggle && navLinks) {

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("show");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

    }

    /* CLOSE MENU AFTER NAVIGATION */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks?.classList.remove("show");

            if (menuToggle) {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }

        });

    });

    /* ACTIVE NAVIGATION */

    const sections = document.querySelectorAll("main section");
    const links = document.querySelectorAll(".nav-links a");

    function updateNavigation() {

        let current = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                current = section.id;
            }

        });

        links.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );

        });

    }

    window.addEventListener("scroll", updateNavigation);

    /* SCROLL REVEAL */

    const revealElements = document.querySelectorAll(
        ".feature-card, .section-heading, .about"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        }, { threshold: 0.12 });

        revealElements.forEach(element => {

            element.classList.add("reveal");
            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("revealed");
        });

    }

    /* BUTTON FEEDBACK */

    document.querySelectorAll(".primary-btn").forEach(button => {

        button.addEventListener("click", () => {
            console.log("Welcome to NOVEX!");
        });

    });

    /* STARTUP */

    updateNavigation();

    console.log("NOVEX DIGITAL ENGINE ONLINE.");

});