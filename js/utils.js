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
    ESC_KEY: 27,
    imageSetupElement: document.querySelector('#upload-file'),
    imageEditElement: document.querySelector('.img-upload__overlay'),
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; padding-top: 11px; text-align: center; color: #f00; background-color: white; border: 3px solid #f00; border-radius: 5px;  ';
      node.style.position = 'absolute';
      node.style.margin =  '20px auto';
      node.style.width = '40%';
      node.style.height = '50px';
      node.style.fontSize = '30px';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };
})();
