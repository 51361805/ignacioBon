const verMasBtn = document.getElementById('ver-mas');
const aboutSection = document.querySelector('.about-section');

verMasBtn.addEventListener('click' , function () {
  
aboutSection.classList.toggle('expand');

})

const sliderCheckbox = document.getElementById("slider-checkbox");
const modoOscuro = document.getElementById('darkBody');
const aplicarModo = document.querySelector('.dark');

sliderCheckbox.addEventListener("change", function() {
  if (this.checked) {
    // El botón está activado
    aplicarModo.classList.add('dark');
  } else {
    // El botón está desactivado
    aplicarModo.classList.remove('dark');
  }
});

