'use strict';

(function () {
  var MAX_HASHTAGS_COUNT = 5;
  var hashtagsInputElement = document.querySelector('.text__hashtags');
  var formSubmitElement = document.querySelector('.img-upload__submit');

  var hashtagsValidationHandler = function () {
    var hashtagsLowercase = hashtagsInputElement.value.toLowerCase();
    var hashtagsArray = hashtagsLowercase.split(' ');

    if (hashtagsArray.length > MAX_HASHTAGS_COUNT) {
      hashtagsInputElement.setCustomValidity('Хештегов может быть максимум 5 штук, думайте короче');
      return;
    }

    for (var i = 0; i < hashtagsArray.length; i++) {
      if (hashtagsArray[i] === '#' || hashtagsArray[i].length === 1) {
        hashtagsInputElement.setCustomValidity('Хеш тег не может состоять из одного символа. ' + (i + 1) + ' хештег не верен');
        break;
      } else if (hashtagsArray[i].length > 20) {
        hashtagsInputElement.setCustomValidity('Хештег номер' + (i + 1) + ' очень длинный, думайте короче');
        break;
      } else if (hashtagsArray[i].charAt(0) !== '#') {
        hashtagsInputElement.setCustomValidity('Хештег должен начинаться с решетки. Исправьте хештег номер ' + (i + 1));
        break;
      } else {
        hashtagsInputElement.setCustomValidity('');
      }

      for (var j = i + 1; j < hashtagsArray.length; j++) {
        if (hashtagsArray[j] === hashtagsArray[i]) {
          hashtagsInputElement.setCustomValidity('упс! один хештег написан дважды, регистр не важен, совпадает хештег номер ' + (i + 1) + ' и номер' + (j + 1));
          return;
        }
      }
    }
  };

  hashtagsInputElement.addEventListener('blur', hashtagsValidationHandler);

  formSubmitElement.addEventListener('click', function () {
    if (!hashtagsInputElement.validity.valid) {
      hashtagsInputElement.style = 'border: 2px solid red';
    }
  });
})();
