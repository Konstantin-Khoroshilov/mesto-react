import React from "react";

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type_image-viewer${
        isOpen ? " popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
        <button
          type="button"
          className="popup__close-button popup__close-button_type_image-viewer"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
export default ImagePopup;
