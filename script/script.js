let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');

let formName = document.querySelector('.popup__input_text_name');
let formDescription = document.querySelector('.popup__input_text_description');

let profileName = document.querySelector('.profile__username');
let profileDescription = document.querySelector('.profile__description');

function openPopup() {
    popup.classList.add('popup_opened');
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function saveInfo(event) {
    event.preventDefault();
    profileName.textContent = formName.value;
    profileDescription.textContent = formDescription.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', saveInfo);