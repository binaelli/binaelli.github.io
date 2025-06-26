// Get references to the HTML elements
const body = document.body;
const characterSelect = document.getElementById("character-select");
const captionInput = document.getElementById("caption-input");
const characterImage = document.getElementById("character-image");
const captionText = document.getElementById("caption-text");

// Create a mapping of character names to image filenames and alt text
const characterMap = {
  kuromi: { src: "kuromi.png", alt: "Kuromi" },
  mymelody: { src: "mymelody.png", alt: "My Melody" }
};

// Set initial character image and theme on page load
const selected = characterSelect.value;
if (characterMap[selected]) {
  characterImage.src = characterMap[selected].src;
  characterImage.alt = characterMap[selected].alt;
  body.classList.add(`${selected}-theme`);
} else {
  characterImage.src = "default.png";
  characterImage.alt = "Unknown character";
}

// Update image and theme when dropdown changes
characterSelect.addEventListener("change", () => {
  const selected = characterSelect.value;

  if (characterMap[selected]) {
    // Start fade out
    characterImage.classList.add("fade-out");

    // Wait for fade-out to finish
    setTimeout(() => {
      characterImage.src = characterMap[selected].src;
      characterImage.alt = characterMap[selected].alt;
      characterImage.classList.remove("fade-out");

      // Update theme class
      body.classList.remove("kuromi-theme", "mymelody-theme");
      body.classList.add(`${selected}-theme`);
    }, 300);
  }
});

// Update caption live with optional fade
captionInput.addEventListener("input", () => {
  captionText.classList.add("hidden");
  setTimeout(() => {
    captionText.textContent = captionInput.value;
    captionText.classList.remove("hidden");
  }, 150);
});


