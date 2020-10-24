"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api =
/*#__PURE__*/
function () {
  function Api(options) {
    _classCallCheck(this, Api);

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

  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch(this._initialCardsUrl, {
        headers: {
          authorization: this._authorization
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A: ".concat(res.status));
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch(this._updateUserDataUrl, {
        headers: {
          authorization: this._authorization
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ".concat(res.status));
      });
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(userName, userJob) {
      return fetch(this._updateUserDataUrl, {
        method: "PATCH",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: userName,
          about: userJob
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ".concat(res.status));
      });
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(name, link) {
      return fetch(this._addNewCardUrl, {
        method: "POST",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043D\u043E\u0432\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438: ".concat(res.status));
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._deleteCardUrl).concat(cardId), {
        method: "DELETE",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438: ".concat(res.status));
      });
    }
  }, {
    key: "setLike",
    value: function setLike(cardId) {
      return fetch("".concat(this._setLikeUrl).concat(cardId), {
        method: "PUT",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043B\u0430\u0439\u043A\u0430: ".concat(res.status));
      });
    }
  }, {
    key: "removeLike",
    value: function removeLike(cardId) {
      return fetch("".concat(this._removeLikeUrl).concat(cardId), {
        method: "DELETE",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435\u043C \u043B\u0430\u0439\u043A\u0430: ".concat(res.status));
      });
    }
  }, {
    key: "changeLikeCardStatus",
    value: function changeLikeCardStatus(cardId, isLiked) {
      if (isLiked) {
        return this.removeLike(cardId);
      } else {
        return this.setLike(cardId);
      }
    }
  }, {
    key: "updateAvatar",
    value: function updateAvatar(link) {
      return fetch(this._updateAvatarUrl, {
        method: "PATCH",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          avatar: link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } // если ошибка, отклоняем промис


        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A c \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(res.status));
      });
    }
  }]);

  return Api;
}();

var apiData = {
  initialCardsUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards",
  getUserDataUrl: "https://mesto.nomoreparties.co/v1/cohort-15/users/me",
  updateUserDataUrl: "https://mesto.nomoreparties.co/v1/cohort-15/users/me",
  addNewCardUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards",
  deleteCardUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards/",
  setLikeUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards/likes/",
  removeLikeUrl: "https://mesto.nomoreparties.co/v1/cohort-15/cards/likes/",
  updateAvatarUrl: "https://mesto.nomoreparties.co/v1/cohort-15/users/me/avatar",
  authorization: "f45e1c45-8a4a-4b79-8e68-5b3c6639fc71"
};
var api = new Api(apiData);
var _default = api;
exports["default"] = _default;