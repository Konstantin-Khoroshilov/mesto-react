import React from "react";
import avatar from "../../images/avatar.gif";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import Card from "../card/Card";
import api from "../../utils/api";
import edit from "../../images/edit.svg";
import loadErrorImage from "../../images/load-error.gif";
import ImagePopup from "../ImagePopup/ImagePopup";

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEditAvatarPopupOpen,
  isImageViewerPopupOpen,
  onClose,
  card,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("Загрузка...");
  const [userDescription, setUserDescription] = React.useState("Загрузка...");
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);
  //записываем с сервера на страницу имя пользователя, род занятий, аватар
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      //в случае ошибки
      .catch((err) => {
        //на странице будет записан текст "Не удалось..."
        setUserName("Не удалось загрузить имя пользователя");
        setUserDescription("Не удалось загрузить должность пользователя");
        //вместо аватара будет загружена гифка с сообщением об ошибке
        setUserAvatar(loadErrorImage);
        //текст ошибки будет выведен в консоль
        console.log(err);
      });
  }, []);
  React.useEffect(() => {
    //загружаем с сервера начальные карточки
    const cardsLoadingIcon = document.querySelector(".cards__loading-icon");
    const cardsContainer = document.querySelector(".cards__container");
    api
      .getInitialCards()
      .then((data) => {
        cardsLoadingIcon.style.display = "none";
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
        cardsLoadingIcon.style.display = "none";
        cardsContainer.parentElement.style.color = "#ffffff";
        cardsContainer.parentElement.textContent =
          "Не удалось загрузить содержимое страницы.";
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="аватар пользователя"
            />
            <div className="profile__avatar-edit-block">
              <img
                src={edit}
                alt="ручка"
                className="profile__avatar-edit-image"
              />
            </div>
          </div>
          <div className="profile__text-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <div className="cards__loading-icon"></div>
        <ul className="cards__container">
          {cards.map((card) => {
            return (
              <Card card={card} onCardClick={onCardClick} key={card._id} />
            );
          })}
        </ul>
      </section>
      <PopupWithForm
        name="profile-editor"
        title="Редактировать профиль"
        buttonValue="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={onClose}
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
        onClose={onClose}
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
        onClose={onClose}
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
        card={card}
        onClose={onClose}
      />
    </main>
  );
}
export default Main;
