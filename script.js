function revealChoices() {
  document.querySelectorAll('.bubble, .continue-btn').forEach(el => el.style.display = 'none');
  document.getElementById('choiceButtons').style.display = 'flex';
}