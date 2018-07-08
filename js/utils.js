'use strict';

(function () {
  window.utils = {
    showElement: function (elem) {
      elem.classList.remove('hidden');
    },

    hideElement: function (elem) {
      elem.classList.add('hidden');
    },

    visuallyHideElement: function (elem) {
      elem.classList.add('visually-hidden');
    },
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    ESC_KEY: 27
  };
})();
