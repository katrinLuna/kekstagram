'use strict';

(function () {
  var imageEditElement = document.querySelector('.img-upload__overlay');
  var closeimageEditElement = imageEditElement.querySelector('#upload-cancel');


  window.utils.imageSetupElement.addEventListener('change', function () {
    window.utils.showElement(imageEditElement);

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.utils.ESC_KEY && evt.target.className !== 'text__hashtags' && evt.target.className !== 'text__description') {
        window.utils.hideElement(imageEditElement);
      }
    });
  });

  closeimageEditElement.addEventListener('click', function () {
    window.utils.hideElement(imageEditElement);
  });
})();
