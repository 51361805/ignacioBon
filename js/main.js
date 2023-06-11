const verMasBtn = document.getElementById('ver-mas');
const aboutSection = document.querySelector('.about-section');

verMasBtn.addEventListener('click' , function () {
  
aboutSection.classList.toggle('expand');

})

const sliderCheckbox = document.getElementById("slider-checkbox");
const aplicarModo = document.querySelector('.dark');

// Función para aplicar o quitar la clase 'dark'
function aplicarClaseDark() {
  if (sliderCheckbox.checked) {

    
    aplicarModo.classList.add('dark');

  } else {
    aplicarModo.classList.remove('dark');


  }
}

// Verificar el estado del botón al cargar la página
aplicarClaseDark();

sliderCheckbox.addEventListener("change", aplicarClaseDark);


