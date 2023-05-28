const verMasBtn = document.getElementById('ver-mas');
const aboutSection = document.querySelector('.about-section');

verMasBtn.addEventListener('click', function() {
  aboutSection.classList.toggle('expand');
});
