'use strict';

(function () {
  var closeimageEditElement = window.utils.imageEditElement.querySelector('#upload-cancel');


  window.utils.imageSetupElement.addEventListener('change', function () {
    window.utils.showElement(window.utils.imageEditElement);

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.utils.ESC_KEY && evt.target.className !== 'text__hashtags' && evt.target.className !== 'text__description') {
        window.utils.imageSetupElement.value = '';
        window.effectScale.resetEffectScale();
        window.utils.hideElement(window.utils.imageEditElement);
      }
    });
  });

  closeimageEditElement.addEventListener('click', function () {
    window.utils.imageSetupElement.value = '';
    window.effectScale.resetEffectScale();
    window.utils.hideElement(window.utils.imageEditElement);
  });
})();
