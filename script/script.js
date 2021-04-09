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




let elementTemplate = document.querySelector('.elements__template').content;
let elements = document.querySelector('.elements');


let elementName = elementTemplate.querySelector('.elements__header');
let elementImage = elementTemplate.querySelector('.elements__image');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function cardsGenerator(arrayEl) {
    elementName.textContent = arrayEl.name; //Меняет заголовок у карточки на данные из массива
    elementImage.setAttribute('alt', arrayEl.name); //Меняет alt у картинки
    elementImage.setAttribute('src', arrayEl.link); //Добавляет картинку
    let cardElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
    elements.prepend(cardElement);
};

initialCards.forEach(cardsGenerator);