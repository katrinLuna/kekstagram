'use strict';

(function () {

  var usersPhotos = [];
  var similarListElement = document.querySelector('.pictures');
  var similarPhotoTemplateElement = document.querySelector('#picture').content.querySelector('.picture__link');


  var serverDownloadSuccessHandler = function (data) {
    usersPhotos = data;
    renderPhotos(usersPhotos);
    window.utils.visuallyHideElement(document.querySelector('.social__comment-count'));
    window.utils.visuallyHideElement(document.querySelector('.social__loadmore'));
    var picturePreviewElements = document.querySelectorAll('.picture__link');
    window.bigPhoto.makePicPreviewClicable(picturePreviewElements, usersPhotos);
    gallery.usersPhotosAll = usersPhotos;
    gallery.picturePreviewElements = picturePreviewElements;
    window.photoSorting();
  };

  var serverDownloadErrorHandler = function (errorMessage) {
    window.utils.errorHandler(errorMessage);
  };

  window.backend.download(serverDownloadSuccessHandler, serverDownloadErrorHandler);

  var renderPhotos = function (photos) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < photos.length; i++) {
      var photoElement = similarPhotoTemplateElement.cloneNode(true);

      photoElement.querySelector('.picture__stat--likes').textContent = photos[i].likes;
      photoElement.querySelector('.picture__img').src = photos[i].url;
      photoElement.querySelector('.picture__img').dataset.idnum = i;
      photoElement.querySelector('.picture__stat--comments').textContent = photos[i].comments.length;

      fragment.appendChild(photoElement);
    }

    similarListElement.appendChild(fragment);
  };

  var gallery = window.gallery = {
    usersPhotosAll: [],
    picturePreviewElements: [],
    renderPhotos: renderPhotos
  };

})();
