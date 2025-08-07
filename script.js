document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('exploreBtn');
  const background = document.getElementById('background');
  const footerBar = document.getElementById('footerBar');

  exploreBtn.addEventListener('click', () => {
    background.classList.add('zoomed');
    exploreBtn.classList.add('fade-out');
    footerBar.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = 'fabric.html'; // First transition scene
    }, 1300);
  });
});
