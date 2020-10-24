import React from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');

  function handlePlaceNameChange(evt) {
    setPlaceName(evt.target.value);
  }
  function handlePlaceLinkChange(evt) {
    setPlaceLink(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    });
  }
  return (
    <PopupWithForm
      name="cards-inputter"
      title="Новое место"
      buttonValue="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label key="cardNameInput" className="popup__form-field">
        <input
          type="text"
          name="card-name"
          placeholder="Название"
          className="popup__text-input"
          required
          minLength="1"
          maxLength="30"
          onChange={handlePlaceNameChange}
        />
        <span
          id="card-name-error-container"
          className="popup__error-message-container"
        ></span>
      </label>
      <label
        key="cardLinkInput"
        className="popup__form-field popup__form-field_extra-height"
      >
        <input
          type="url"
          name="card-link"
          placeholder="Ссылка на картинку"
          className="popup__text-input"
          onChange={handlePlaceLinkChange}
          required
        />
        <span
          id="card-link-error-container"
          className="popup__error-message-container"
        ></span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
