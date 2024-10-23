const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('nav-active');
});

const element = document.getElementById('element');
const words = ["App Developer", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;  // Default speed for smooth typing

function type() {
  const currentWord = words[wordIndex];

  // Update the element's text content
  element.textContent = currentWord.substring(0, charIndex + 1); // Include the last character

  // Adjust the speed for smoothness
  if (isDeleting) {
    typingSpeed = 50; // Faster for deleting
    charIndex--; // Remove characters
  } else {
    typingSpeed = 100; // Slower for typing
    charIndex++; // Add characters
  }

  // When the word is fully typed out
  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1000; // Pause before deleting
    isDeleting = true;
  }

  // When the word is fully deleted
  else if (isDeleting && charIndex === -1) { // When charIndex reaches -1, move to next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    charIndex = 0; // Reset charIndex for next word
    typingSpeed = 500; // Pause before typing the next word
  }

  // Recursively call the function for the typing effect
  setTimeout(type, typingSpeed);
}

// Start the typing effect
type();

