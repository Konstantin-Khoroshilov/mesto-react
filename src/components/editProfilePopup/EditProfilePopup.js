import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import PopupWithForm from "../popupWithForm/PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name || '');
  const [description, setDescription] = React.useState(currentUser.about || '');
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="profile-editor"
      title="Редактировать профиль"
      buttonValue="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label key="profileNameInput" className="popup__form-field">
        <input
          type="text"
          name="profile-name"
          className="popup__text-input"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          onChange={handleNameChange}
          value={name || ''}
        />
        <span
          id="profile-name-error-container"
          className="popup__error-message-container"
        ></span>
      </label>
      <label
        key="profileJobInput"
        className="popup__form-field popup__form-field_extra-height"
      >
        <input
          type="text"
          name="profile-job"
          className="popup__text-input"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          onChange={handleDescriptionChange}
          value={description || ''}
        />
        <span
          id="profile-job-error-container"
          className="popup__error-message-container"
        ></span>
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
