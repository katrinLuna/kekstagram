'use strict';

(function () {

  var usersPhotos = [];
  var similarListElement = document.querySelector('.pictures');
  var similarPhotoTemplateElement = document.querySelector('#picture').content.querySelector('.picture__link');

  var serverDownloadSuccess = function (data) {
    usersPhotos = data;
    renderPhotos(usersPhotos);
    window.utils.visuallyHideElement(document.querySelector('.social__comment-count'));
    window.utils.visuallyHideElement(document.querySelector('.social__loadmore'));
    window.gallery = {
      usersPhotosAll: usersPhotos
    };
  };

  var serverDownloadError = function (errorMessage) {
    window.utils.errorHandler(errorMessage);
  };

  window.backend.download(serverDownloadSuccess, serverDownloadError);

  /* var getRandomComments = function () {
    var comments = [];
    var commentCount = window.utils.getRandomNumber(1, 2);

    for (var i = 0; i < commentCount; i++) {
      comments.push(USER_COMMENTS[window.utils.getRandomNumber(0, USER_COMMENTS.length - 1)]);
    }

    return comments;
  }; */

  var renderPhotos = function (photos) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < photos.length; i++) {
      var photoElement = similarPhotoTemplateElement.cloneNode(true);

      photoElement.querySelector('.picture__stat--likes').textContent = photos[i].likes;
      photoElement.querySelector('.picture__img').src = photos[i].url;
      photoElement.querySelector('.picture__img').dataset.idnum = i + 1;
      photoElement.querySelector('.picture__stat--comments').textContent = photos[i].comments.length;

      fragment.appendChild(photoElement);
    }

    similarListElement.appendChild(fragment);
  };
})();
