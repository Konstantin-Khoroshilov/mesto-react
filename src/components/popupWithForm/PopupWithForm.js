import React from "react";

function PopupWithform({
  name,
  title,
  buttonValue,
  children,
  isOpen,
  onClose,
}) {
  return (
    <div className={`popup popup_type_${name}${isOpen ? " popup_opened" : ""}`}>
      <form className="popup__form" name={name} noValidate>
        <h2 className="popup__title">{title}</h2>
        {children}
        <input
          type="submit"
          className="popup__save-button popup__save-button_type_profile-editor"
          value={buttonValue}
        />
        <button
          type="button"
          className="popup__close-button popup__close-button_type_profile-editor"
          onClick={onClose}
        ></button>
      </form>
    </div>
  );
}
export default PopupWithform;
