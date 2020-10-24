import React from "react";
import Card from "../card/Card";
import edit from "../../images/edit.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
  onCardLike,
  onCardDelete,
  cardsLoadStatus,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar-container" onClick={onEditAvatar}>
            <img
              className="profile__avatar"
              src={currentUser.avatar}
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
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__job">{currentUser.about}</p>
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
                <Card
                  card={card}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                  key={card._id}
                />
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
