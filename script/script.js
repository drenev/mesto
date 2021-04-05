let editForm = document.querySelector('.edit-form');
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener("click", function openPopup() {
    editForm.classList.add("edit-form_opened")
});

let closeButton = document.querySelector('.edit-form__close-icon');

closeButton.addEventListener("click", function closePopup() {
    editForm.classList.remove("edit-form_opened")
});

let formName = document.querySelector('.edit-form__name');
let formDescription = document.querySelector('.edit-form__description');
let saveButton = document.querySelector('.edit-form__button');

let profileName = document.querySelector('.profile__username');
let profileDescription = document.querySelector('.profile__description');

formName.value = profileName.textContent;
formDescription.value = profileDescription.textContent;

saveButton.addEventListener("click", function saveInfo() {
    profileName.innerHTML = formName.value;
    profileDescription.innerHTML = formDescription.value;
    editForm.classList.remove("edit-form_opened");
});