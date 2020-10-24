import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `cards__delete-button${
    !isOwn ? " cards__delete-button_hidden" : ""
  }`;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `cards__like-button${
    isLiked ? " cards__like-button_active" : ""
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <li>
      <figure className="cards__card">
        <img
          className="cards__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        ></button>
        <figcaption className="cards__caption">
          <span className="cards__heading">{card.name}</span>
          <div className="cards__like">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleCardLike}
            ></button>
            <span className="cards__likes-number">{card.likes.length}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
export default Card;
