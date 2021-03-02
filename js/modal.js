// Popup
const modal = document.querySelector('.modal-wrapper');
const nameInput = modal.querySelector('[name=name]');
const modalButtonClose = modal.querySelector('.modal-close-button');
const contactsButton = document.querySelector('.contacts-button');


modalButtonClose.addEventListener('click', closeModal);


contactsButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal-visible');
  modal.classList.remove('display-none');
  nameInput.focus();
  }
)

function closeModal() {
  modal.classList.add('display-none');
  modal.classList.remove('modal-visible');
}


