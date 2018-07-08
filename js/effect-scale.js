'use strict';

(function () {
  // наложение фильтров на редактируемоге изображение
  var SCALE_WIDTH = 453;
  var MAX_PHOBOS_FILTER = 3;
  var MAX_HEAT_FILTER = 3;
  var imageEffectsElement = document.querySelector('.img-upload__effects');
  var effectScaleElement = document.querySelector('.img-upload__scale');
  var effectScalePinElement = effectScaleElement.querySelector('.scale__pin');
  var effectScaleValueElement = effectScaleElement.querySelector('.scale__value');
  var effectScaleLevelElement = effectScaleElement.querySelector('.scale__level');
  var imagePreviewElement = document.querySelector('.img-upload__preview img');

  var resetEffectScale = function () {
    imagePreviewElement.className = '';
    imagePreviewElement.style = '';
    effectScalePinElement.style.left = SCALE_WIDTH + 'px';
    effectScaleLevelElement.style.width = SCALE_WIDTH + 'px';
  };

  window.utils.imageSetupElement.addEventListener('change', function () {
    window.utils.hideElement(effectScaleElement);
  });

  imageEffectsElement.addEventListener('click', function (evt) {
    if (evt.target.value === 'none') {
      window.utils.hideElement(effectScaleElement);
    } else {
      window.utils.showElement(effectScaleElement);
    }

    resetEffectScale();
    imagePreviewElement.className = 'effects__preview--' + evt.target.value;
  });

  // определение глубины накладываемого фильтра, степень наложение эфекта на изображение и драгндроп управление ползунком
  var getEffectScaleProportion = function (input) {
    return {
      'effects__preview--chrome': 'grayscale(' + ((input.value * 100) / (SCALE_WIDTH * 100)).toFixed(2) + ')',
      'effects__preview--sepia': 'sepia(' + ((input.value * 100) / (SCALE_WIDTH * 100)).toFixed(2) + ')',
      'effects__preview--marvin': 'invert(' + ((input.value * 100) / SCALE_WIDTH).toFixed(2) + '%)',
      'effects__preview--phobos': 'blur(' + Math.round((input.value * MAX_PHOBOS_FILTER) / SCALE_WIDTH) + 'px)',
      'effects__preview--heat': 'brightness(' + (((input.value * (MAX_HEAT_FILTER - 1)) / SCALE_WIDTH) + 1) + ')'
    };
  };

  var applyFilterDepth = function () {
    var scaleProportion = getEffectScaleProportion(effectScaleValueElement);
    imagePreviewElement.style = 'filter:' + scaleProportion[imagePreviewElement.className];
  };

  var effectScaleDownHandler = function (evt) {
    evt.preventDefault();
    var startCordsX = evt.clientX;

    var effectScaleMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      var shiftX = startCordsX - moveEvt.clientX;
      startCordsX = moveEvt.clientX;
      var newPinPosition = (effectScalePinElement.offsetLeft - shiftX);

      if (newPinPosition < 0 || newPinPosition > SCALE_WIDTH) {
        return;
      }
      effectScalePinElement.style.left = newPinPosition + 'px';
      effectScaleLevelElement.style.width = newPinPosition + 'px';
      effectScaleValueElement.value = newPinPosition;
      applyFilterDepth();
    };

    var effectScaleMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', effectScaleMouseMoveHandler);
      document.removeEventListener('mouseup', effectScaleMouseUpHandler);
    };

    document.addEventListener('mousemove', effectScaleMouseMoveHandler);
    document.addEventListener('mouseup', effectScaleMouseUpHandler);
  };

  effectScalePinElement.addEventListener('mousedown', effectScaleDownHandler);
})();
