// Slider
let sliders = document.querySelectorAll('.slide');

let slideSection = document.querySelector('.features');
let currentSlide = 'features-slide-1';


let controlButtons = document.querySelectorAll('.slider-control-button');

for (let i = 0; i < controlButtons.length; i++) {
  // controlButtons[i].addEventListener('click', () => changeSlider(i));
  controlButtons[i].addEventListener('click', function() {changeSlider(i)});
}

function changeSlider(number) {
  changeSLiderImage(number);
  changeCurrentControlButton(number);
  changeSliderText(number);
}

function changeCurrentControlButton(currentButtonNumber) {
  for (let i = 0; i < controlButtons.length; i++) {
    controlButtons[i].classList.remove('current');
  }
  controlButtons[currentButtonNumber].classList.add('current');
}

function changeSLiderImage(currentImageNumber) {
  let newSlide = 'features-slide-' + (currentImageNumber + 1);
  slideSection.classList.replace(currentSlide, newSlide);
  currentSlide = newSlide;
}

function changeSliderText(currentSliderNumber) {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove('slide-current');
  }
  sliders[currentSliderNumber].classList.add('slide-current');
}
