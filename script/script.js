/// Тут написан код для формы изменения имени
let popup = document.querySelector('.popup');
let popupMesto = document.querySelector('.popup_type_mesto');
let popupForm = document.querySelector('.popup__form');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelectorAll('.popup__close-icon');

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
    popup.classList.remove('popup_opened');
    popupMesto.classList.remove('popup_opened');
}

closeButton.forEach(closePopup);

function saveInfo(event) {
    event.preventDefault();
    profileName.textContent = formName.value;
    profileDescription.textContent = formDescription.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.forEach(function (closeButtonEl) {
    closeButtonEl.addEventListener('click', closePopup);
})

popupForm.addEventListener('submit', saveInfo);



///Тут написан код для первой генерации карточек на странице
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

function initialСardsGenerator(arrayEl) {
    elementName.textContent = arrayEl.name; //Меняет заголовок у карточки на данные из массива
    elementImage.setAttribute('alt', arrayEl.name); //Меняет alt у картинки
    elementImage.setAttribute('src', arrayEl.link); //Добавляет картинку
    let cardElement = elementTemplate.querySelector('.elements__element').cloneNode(true); // Клонирует заполненый шаблон элемента
    elements.prepend(cardElement);
};

initialCards.forEach(initialСardsGenerator);



///Тут написан код для открытия формы добавления карточки
let addButton = document.querySelector('.profile__add-button');

function openPopupMesto() {
    popupMesto.classList.add('popup_opened');
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;
}

addButton.addEventListener('click', openPopupMesto);

///Добавление карточки на сайте
let inputNameOfPlace = document.querySelector('input[name="inputNameOfPlace"]');
let inputImage = document.querySelector('input[name="inputImage"]');

let createButton = document.querySelector('input[name="createButton"]');

function newСardsGenerator(event) {
    event.preventDefault();
    elementName.textContent = inputNameOfPlace.value; //Меняет заголовок у карточки на данные из массива
    elementImage.setAttribute('alt', inputNameOfPlace.value); //Меняет alt у картинки
    elementImage.setAttribute('src', inputImage.value); //Добавляет картинку
    let cardElement = elementTemplate.querySelector('.elements__element').cloneNode(true); // Клонирует заполненый шаблон элемента
    elements.prepend(cardElement);
    closePopup();
};

createButton.addEventListener('click', newСardsGenerator);

///Лайк карточки
let elementsLike = document.querySelectorAll('.elements__like');
let likeStatus = 0
elementsLike.forEach(like);

function like(likeButton) {
    likeButton.addEventListener('click', function likeChange() {
        if (likeStatus === 0) {
            likeButton.classList.add('elements__like_active');
            likeStatus += 1;
        } else {
            likeButton.classList.remove('elements__like_active');
            likeStatus -= 1;
        }
    })
}

