/// Тут написан код для формы изменения имени
const popup = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_type_profile");
const popupMesto = document.querySelector(".popup_type_mesto");
const popupImage = document.querySelector(".popup_type_image");

const popupForm = document.querySelector(".popup__form");

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelectorAll(".popup__close-icon");

const formName = document.querySelector(".popup__input_text_name");
const formDescription = document.querySelector(
  ".popup__input_text_description"
);

const profileName = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__description");

const addButton = document.querySelector(".profile__add-button");

function openModal(modal) {
  modal.classList.add("popup_opened");
}

function openPopupProfile() {
  openModal(popupProfile);
  formName.value = profileName.textContent;
  formDescription.value = profileDescription.textContent;
}

function openPopupMesto() {
  openModal(popupMesto);
}

function closeModal(modal) {
  modal.classList.remove("popup_opened");
}

function saveInfo(event) {
  event.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  closeModal(popupProfile);
}

closeButton.forEach(function (closeButtonEl) {
  const popupParent = closeButtonEl.parentNode.parentNode;
  closeButtonEl.addEventListener("click", () => closeModal(popupParent));
});
editButton.addEventListener("click", openPopupProfile);
popupForm.addEventListener("submit", saveInfo);
addButton.addEventListener("click", openPopupMesto);

///Тут написан код для первой генерации карточек на странице
const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

///Тут написан код для генерации карточек
const elementTemplate = document.querySelector(".elements__template").content;
const elements = document.querySelector(".elements");

const elementName = elementTemplate.querySelector(".elements__header");
const elementImage = elementTemplate.querySelector(".elements__image");

function createCard(cardName, cardImage) {
  const elementClone = elementTemplate
    .querySelector(".elements__element")
    .cloneNode(true); /// Клонирует пустой шаблок
  const removeButton = elementClone.querySelector(".elements__remove");
  const cloneImage = elementClone.querySelector(".elements__image");
  const cloneLke = elementClone.querySelector(".elements__like");
  const cloneName = elementClone.querySelector(".elements__header");

  cloneName.textContent = cardName; ///Меняет заголовок у карточки
  cloneImage.setAttribute("alt", cardName); ///Меняет alt у картинки
  cloneImage.setAttribute("src", cardImage); ///Добавляет картинку

  removeButton.addEventListener("click", function () {
    removeButton.parentNode.remove(); /// Функция удаления карточки/добавление слушаетеля
  });
  cloneImage.addEventListener("click", () => openPopupImage(cloneImage)); /// Слушатель для открытия попапа
  cloneLke.addEventListener("click", function () {
    cloneLke.classList.toggle("elements__like_active"); /// Функция лайка
  });
  return elementClone;
}

function renderCard(card) {
  elements.prepend(card);
}

///Добавление карточки на сайте
const inputNameOfPlace = document.querySelector(
  'input[name="inputNameOfPlace"]'
);
const inputImage = document.querySelector('input[name="inputImage"]');
const createButton = document.querySelector('input[name="createButton"]');
document.forms.formEditMesto.addEventListener("submit", submitCardForm);

function submitCardForm(event) {
  event.preventDefault();
  let newCard = createCard(inputNameOfPlace.value, inputImage.value);
  renderCard(newCard);
  closeModal(popupMesto);
}
/// Первая генерация карточек
function initialСardsGenerator(arrayEl) {
  let newCard = createCard(arrayEl.name, arrayEl.link);
  renderCard(newCard);
}
initialCards.forEach(initialСardsGenerator);

/// Кликабельная картинка
const popupHeader = document.querySelector(".popup__image-header");
const popupImagePic = document.querySelector(".popup__image");

function openPopupImage(image) {
  const header = image.parentNode.querySelector(".elements__header");
  const imageLink = image.getAttribute("src");
  popupHeader.textContent = header.textContent;
  popupImagePic.setAttribute("alt", header.textContent);
  popupImagePic.setAttribute("src", imageLink);
  popupCloned = document.querySelector(".popup_type_image");
  openModal(popupCloned);
}
