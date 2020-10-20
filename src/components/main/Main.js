import React from "react";
import avatar from "../../images/avatar.gif";
import Card from "../card/Card";
import api from "../../utils/api";
import edit from "../../images/edit.svg";
import loadErrorImage from "../../images/load-error.gif";

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("Загрузка...");
  const [userDescription, setUserDescription] = React.useState("Загрузка...");
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);
  const [cardsLoadStatus, setCardsLoadStatus] = React.useState("inProcess");
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
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
        setCardsLoadStatus("success");
      })
      .catch((err) => {
        console.log(err);
        setCardsLoadStatus("fail");
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
        {cardsLoadStatus === "inProcess" ? (
          <div className="cards__loading-icon"></div>
        ) : cardsLoadStatus === "success" ? (
          <ul className="cards__container">
            {cards.map((card) => {
              return (
                <Card card={card} onCardClick={onCardClick} key={card._id} />
              );
            })}
          </ul>
        ) : (
          <div style={{ color: "#fff" }}>
            Не удалось загрузить содержимое страницы.
          </div>
        )}
      </section>
    </main>
  );
}
export default Main;
