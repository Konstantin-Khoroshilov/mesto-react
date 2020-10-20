import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import ImagePopup from "./imagePopup/ImagePopup";
import PopupWithForm from "./popupWithForm/PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    ""
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isImageViewerPopupOpen, setIsImageViewerPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({});
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageViewerPopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImageViewerPopupOpen(true);
  }
  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile-editor"
        title="Редактировать профиль"
        buttonValue="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={[
          <label key="profileNameInput" className="popup__form-field">
            <input
              type="text"
              name="profile-name"
              className="popup__text-input"
              placeholder="Имя"
              required
              minLength="2"
              maxLength="40"
            />
            <span
              id="profile-name-error-container"
              className="popup__error-message-container"
            ></span>
          </label>,
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
            />
            <span
              id="profile-job-error-container"
              className="popup__error-message-container"
            ></span>
          </label>,
        ]}
      />
      <PopupWithForm
        name="cards-inputter"
        title="Новое место"
        buttonValue="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={[
          <label key="cardNameInput" className="popup__form-field">
            <input
              type="text"
              name="card-name"
              placeholder="Название"
              className="popup__text-input"
              required
              minLength="1"
              maxLength="30"
            />
            <span
              id="card-name-error-container"
              className="popup__error-message-container"
            ></span>
          </label>,
          <label
            key="cardLinkInput"
            className="popup__form-field popup__form-field_extra-height"
          >
            <input
              type="url"
              name="card-link"
              placeholder="Ссылка на картинку"
              className="popup__text-input"
              required
            />
            <span
              id="card-link-error-container"
              className="popup__error-message-container"
            ></span>
          </label>,
        ]}
      />
      <PopupWithForm
        name="avatar-renew"
        title="Обновить аватар"
        buttonValue="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={[
          <label key="avatarLinkInput" className="popup__form-field">
            <input
              type="url"
              name="avatar-link"
              placeholder="Ссылка на картинку"
              className="popup__text-input"
              required
            />
            <span
              id="avatar-link-error-container"
              className="popup__error-message-container"
            ></span>
          </label>,
        ]}
      />
      <PopupWithForm
        name="delete-confirmation"
        title="Вы уверены?"
        buttonValue="Да"
        children={[]}
      />
      <ImagePopup
        isOpen={isImageViewerPopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
