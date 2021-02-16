// Show max price from range

// let priceRange = document.querySelector('.price-range');
// let priceMaxRange = document.querySelector('.max-price');

// priceRange.addEventListener('change', correctInputMaxPrice);
// priceMaxRange.addEventListener('change', correctRangeMaxPrice);

// function correctInputMaxPrice() {
//     priceMaxRange.value = priceRange.value;
// }

// function correctRangeMaxPrice() {
//     priceRange.value = priceMaxRange.value;
// }



// Popup
const modal = document.querySelector('.modal-wrapper');
const modalButtonClose = document.querySelector('.modal-close-button');
const contactsButton = document.querySelector('.contacts-button');

modalButtonClose.addEventListener('click', closeModal);
contactsButton.addEventListener('click', openModal)

function closeModal() {
  modal.classList.add('display-none');
  modal.classList.remove('modal-visible');
}

function openModal() {
  modal.classList.add('modal-visible');
  modal.classList.remove('display-none');
}
