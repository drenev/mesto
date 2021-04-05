let editForm = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');

let formName = document.querySelector('.popup__input_name');
let formDescription = document.querySelector('.popup__input_description');

let profileName = document.querySelector('.profile__username');
let profileDescription = document.querySelector('.profile__description');

function openPopup() {
    editForm.classList.add('popup_opened');
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;
}

function closePopup() {
    editForm.classList.remove('popup_opened')
}

function saveInfo() {
    profileName.textContent = formName.value;
    profileDescription.textContent = formDescription.value;
    closePopup;
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
document.addEventListener('submit', saveInfo);