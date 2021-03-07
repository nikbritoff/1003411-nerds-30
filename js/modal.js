// Popup
const modal = document.querySelector('.modal-wrapper');
const modalName = modal.querySelector('[name=name]');
const modalEmail = modal.querySelector('[name=email]');
const modalLetter = modal.querySelector('[name=letter]')
const modalButtonClose = modal.querySelector('.modal-close-button');
const contactsButton = document.querySelector('.contacts-button');
const feedbackLink = modal.querySelector('.modal-form');
let allInputs = [modalName, modalEmail, modalLetter];

console.log(modalName);

modalButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  closeModal();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-visible') ) {
      evt.preventDefault();
      closeModal();
    }
  }
});

contactsButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  openModal();
});

feedbackLink.addEventListener('submit', function(evt) {
  if(!modalName.value) {
    evt.preventDefault();
    feedbackLink.classList.remove('modal-error');
    feedbackLink.offsetWidth = feedbackLink.offsetWidth;
    feedbackLink.classList.add('modal-error');
    modalName.classList.add('input-error');
  }

  if(!modalEmail.value) {
    evt.preventDefault();
    feedbackLink.classList.remove('modal-error');
    feedbackLink.offsetWidth = feedbackLink.offsetWidth;
    feedbackLink.classList.add('modal-error');
    modalEmail.classList.add('input-error');
  }

  if(!modalLetter.value) {
    evt.preventDefault();
    feedbackLink.classList.remove('modal-error');
    feedbackLink.offsetWidth = feedbackLink.offsetWidth;
    feedbackLink.classList.add('modal-error');
    modalLetter.classList.add('input-error');
  }
});


for (let i = 0; i < allInputs.length; i++) {
  function tempFunction (item, action) {
    item.addEventListener('click', action)
  }
  currentInput = allInputs[i];
  tempFunction(currentInput, clearErrorStyle);
}


function openModal() {
  modal.classList.add('modal-visible');
  modal.classList.remove('display-none');
  modalName.focus();
}

function closeModal() {
  modal.classList.add('display-none');
  modal.classList.remove('modal-visible');
  feedbackLink.classList.remove('modal-error');
}

function clearErrorStyle() {
  modalName.classList.remove('input-error');
  modalEmail.classList.remove('input-error');
  modalLetter.classList.remove('input-error');
}



