const btn = document.getElementById('rotateBtn');
const image = document.getElementById('image');

btn.addEventListener('click', () => {
  image.classList.toggle('rotate');
});
// This script toggles the 'rotate' class on the image when the button is clicked