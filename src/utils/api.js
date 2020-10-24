class Api {
  constructor(options) {
    this._initialCardsUrl = options.initialCardsUrl;
    this._getUserDataUrl = options.getUserDataUrl;
    this._updateUserDataUrl = options.updateUserDataUrl;
    this._addNewCardUrl = options.addNewCardUrl;
    this._deleteCardUrl = options.deleteCardUrl;
    this._setLikeUrl = options.setLikeUrl;
    this._removeLikeUrl = options.removeLikeUrl;
    this._updateAvatarUrl = options.updateAvatarUrl;
    this._authorization = options.authorization;
  }

  getInitialCards() {
    return fetch(this._initialCardsUrl, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c загрузкой начальных карточек: ${res.status}`
      );
    });
  }

  getUserInfo() {
    return fetch(this._updateUserDataUrl, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c загрузкой данных пользователя: ${res.status}`
      );
    });
  }

  updateUserInfo(userName, userJob) {
    return fetch(this._updateUserDataUrl, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        about: userJob,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c обновлением данных пользователя: ${res.status}`
      );
    });
  }
  addNewCard(name, link) {
    return fetch(this._addNewCardUrl, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c добавлением новой карточки: ${res.status}`
      );
    });
  }
  deleteCard(cardId) {
    return fetch(`${this._deleteCardUrl}${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c удалением карточки: ${res.status}`
      );
    });
  }

  setLike(cardId) {
    return fetch(`${this._setLikeUrl}${cardId}`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c проставлением лайка: ${res.status}`
      );
    });
  }
  removeLike(cardId) {
    return fetch(`${this._removeLikeUrl}${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c удалением лайка: ${res.status}`
      );
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.removeLike(cardId);
    } else {
      return this.setLike(cardId);
    }
  }
  updateAvatar(link) {
    return fetch(this._updateAvatarUrl, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(
        `Что-то пошло не так c обновлением аватара: ${res.status}`
      );
    });
  }
}

const apiData = {
  initialCardsUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards",
  getUserDataUrl: "https://mesto.nomoreparties.co/v1/cohort-15/users/me",
  updateUserDataUrl: "https://mesto.nomoreparties.co/v1/cohort-15/users/me",
  addNewCardUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards",
  deleteCardUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards/",
  setLikeUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards/likes/",
  removeLikeUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards/likes/",
  updateAvatarUrl:
    "https://mesto.nomoreparties.co/v1/cohort-15/users/me/avatar",
  authorization: "f45e1c45-8a4a-4b79-8e68-5b3c6639fc71",
};

const api = new Api(apiData);

export default api;
