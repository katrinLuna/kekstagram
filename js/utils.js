'use strict';

(function () {
  window.utils = {
    ESC_KEY: 27,
    imageSetupElement: document.querySelector('#upload-file'),
    imageEditElement: document.querySelector('.img-upload__overlay'),
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
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; padding-top: 11px; text-align: center; color: #f00; background-color: white; border: 3px solid #f00; border-radius: 5px;  ';
      node.style.position = 'absolute';
      node.style.margin = '20px auto';
      node.style.width = '40%';
      node.style.height = '50px';
      node.style.fontSize = '30px';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
      window.setTimeout(function () {
        node.remove();
      }, 5000);
    },
    debounce: function (fun) {
      var DEBOUNCE_INTERVAL = 500;
      var lastTimeout = null;

      return function () {
        var args = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          fun.apply(null, args);
        }, DEBOUNCE_INTERVAL);
      };
    }
  };
})();
