'use strict';

(function () {
  // масштабирование редактируемого изображения
  var MIN_RESIZE = 25;
  var MAX_RESIZE = 100;
  var STEP_RESIZE = 25;
  var resizeMinusElement = document.querySelector('.resize__control--minus');
  var resizePlusElement = document.querySelector('.resize__control--plus');
  var imagePreviewWrapperElement = document.querySelector('.img-upload__preview');
  var sizeValueElement = document.querySelector('.resize__control--value');

  window.utils.imageSetupElement.addEventListener('change', function () {
    sizeValueElement.value = 100 + '%';
    imagePreviewWrapperElement.style = 'transform: scale(1)';
  });

  var getCurentSizeNumber = function () {
    return Number(sizeValueElement.value.slice(0, -1));
  };

  var sizeMinusHandler = function () {
    var newSizeNumber = getCurentSizeNumber() - STEP_RESIZE;
    sizeValueElement.value = newSizeNumber + '%';
    imagePreviewWrapperElement.style = 'transform: scale(' + (newSizeNumber / 100) + ')';
  };

  var sizePlusHandler = function () {
    var newSizeNumber = getCurentSizeNumber() + STEP_RESIZE;
    sizeValueElement.value = newSizeNumber + '%';
    imagePreviewWrapperElement.style = 'transform: scale(' + (newSizeNumber / 100) + ')';
  };

  resizeMinusElement.addEventListener('click', function () {
    if (getCurentSizeNumber() > MIN_RESIZE) {
      sizeMinusHandler();
    }
  });

  resizePlusElement.addEventListener('click', function () {
    if (getCurentSizeNumber() < MAX_RESIZE) {
      sizePlusHandler();
    }
  });
})();
