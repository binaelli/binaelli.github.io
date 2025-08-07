function revealChoices() {
  document.querySelectorAll('.bubble, .continue-btn').forEach(el => el.style.display = 'none');
  document.getElementById('choiceButtons').style.display = 'flex';
  document.querySelector('.back-btn').style.display = 'block';
}

function skipVideo(destination) {
  document.getElementById('transitionVideo').pause();
  document.querySelector('.video-screen').style.display = 'none';
  document.getElementById('fabricInfo').style.display = 'block';
}

function showFabricInfo() {
  document.querySelector('.video-screen').style.display = 'none';
  document.getElementById('fabricInfo').style.display = 'block';
}

function toggleBubble(el) {
  el.classList.toggle("expanded");
}
