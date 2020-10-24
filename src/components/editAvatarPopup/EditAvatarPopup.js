import React from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const imageLinkRef = React.createRef();
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(imageLinkRef.current.value);
    imageLinkRef.current.value = "";
  }
  return (
    <PopupWithForm
      name="avatar-renew"
      title="Обновить аватар"
      buttonValue="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label key="avatarLinkInput" className="popup__form-field">
        <input
          type="url"
          name="avatar-link"
          placeholder="Ссылка на картинку"
          className="popup__text-input"
          ref={imageLinkRef}
          required
        />
        <span
          id="avatar-link-error-container"
          className="popup__error-message-container"
        ></span>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
