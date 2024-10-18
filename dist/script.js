"use strict";
// Function to create the typewriter effect
function createTypewriterEffect(elementId, texts) {
    const element = document.getElementById(elementId); // Cast to HTMLDivElement
    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function typeAnimation() {
        const currentText = texts[currentTextIndex];
        if (isDeleting) {
            element.textContent = currentText.slice(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(typeAnimation, 500); // Pause before typing the next text
                return;
            }
        }
        else {
            element.textContent = currentText.slice(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeAnimation, 1000); // Pause before starting to delete
                return;
            }
        }
        const speed = isDeleting ? 100 : 150; // Adjust speed for typing and deleting
        setTimeout(typeAnimation, speed);
    }
    typeAnimation(); // Start the animation
}
// Function to start the countdown timer
function startCountdown(durationInSeconds) {
    const timerElement = document.getElementById("timer");
    let timeRemaining = durationInSeconds;
    const updateTimerDisplay = () => {
        const days = Math.floor(timeRemaining / (3600 * 24));
        const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;
        // Format the display
        timerElement.innerHTML = `${days.toString().padStart(2, "0")} &nbsp;&nbsp; ${hours.toString().padStart(2, "0")} &nbsp;&nbsp; ${minutes.toString().padStart(2, "0")} &nbsp;&nbsp; ${seconds.toString().padStart(2, "0")}`;
    };
    const countdown = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining < 0) {
            clearInterval(countdown);
            timerElement.innerHTML = "00&nbsp;&nbsp;00&nbsp;&nbsp;00&nbsp;&nbsp;00"; // Display 0 when the countdown is complete
        }
    }, 1000); // Update every second
    updateTimerDisplay(); // Initial display update
}
// Start the typewriter effects and countdown timer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    createTypewriterEffect("animated-text", ["RADIANCE_"]); // Typewriter for RADIANCE_
    createTypewriterEffect("explore-innovate", ["#EXPLORE", "#INNOVATE", "#CELEBRATE_"]); // Typewriter for EXPLORE-INNOVATE
    createTypewriterEffect("2k24", ["2K24"]);
    startCountdown(3600); // Start countdown for 24 hours (86400 seconds)
});
document.addEventListener("DOMContentLoaded", () => {
    const csiImage = document.getElementById("csiImage");
    if (csiImage) {
        csiImage.addEventListener("click", () => {
            window.location.reload(); // Refreshes the page on click
        });
    }
});
