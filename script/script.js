const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener("click", function openPopup() {
    document.querySelector('.edit-form').classList.add("edit-form_opened")
});

const closeButton = document.querySelector('.edit-form__close-icon');
closeButton.addEventListener("click", function closePopup() {
    document.querySelector('.edit-form').classList.remove("edit-form_opened")
});

const formName = document.querySelector('.edit-form__name');
const formDescription = document.querySelector('.edit-form__description');
const saveButton = document.querySelector('.edit-form__button');

const profileName = document.querySelector('.profile__username');
const profileDescription = document.querySelector('.profile__description');

saveButton.addEventListener("click", function saveInfo() {
    profileName.innerHTML = formName.value;
    profileDescription.innerHTML = formDescription.value;
    document.querySelector('.edit-form').classList.remove("edit-form_opened");
});