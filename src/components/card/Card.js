import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
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
        <button type="button" className="cards__delete-button"></button>
        <figcaption className="cards__caption">
          <span className="cards__heading">{card.name}</span>
          <div className="cards__like">
            <button type="button" className="cards__like-button"></button>
            <span className="cards__likes-number">{card.likes.length}</span>
          </div>
        </figcaption>
      </figure>
    </li>
  );
}
export default Card;
