// Fuzzy page: show choices after CONTINUE
function revealChoices() {
  document.querySelectorAll('.bubble, .continue-btn').forEach(el => el.style.display = 'none');
  const choices = document.getElementById('choiceButtons');
  if (choices) choices.classList.remove('hidden');
}

// Fabric page: listen for video end, then show info bubbles and CONTINUE button
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('transitionVideo');
  const videoSection = document.getElementById('videoSection');
  const fabricSection = document.getElementById('fabricSection');
  const backBtn = document.getElementById('backBtn');
  const choiceButtons = document.getElementById('choiceButtons');

  if (video) {
    video.addEventListener('ended', () => {
      if (videoSection) videoSection.style.display = 'none';
      if (fabricSection) fabricSection.classList.remove('hidden');
    });
  }

  // Show mesh/ceiling options and back button
  window.revealOptions = function () {
    document.querySelectorAll('.bubble, .continue-btn').forEach(el => el.style.display = 'none');
    if (choiceButtons) choiceButtons.classList.remove('hidden');
    if (backBtn) backBtn.classList.remove('hidden');
  };
});