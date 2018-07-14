'use strict';

(function () {
  var PHOTOS_RAND_COUNT = 10;
  var photoFilterElement = document.querySelector('.img-filters');
  var photoFilterFormElement = photoFilterElement.querySelector('.img-filters__form');
  var photoFiltersButtonElements = photoFilterElement.querySelectorAll('.img-filters__button');

  window.photoSorting = function () {
    photoFilterElement.classList.remove('img-filters--inactive');

    photoFilterFormElement.addEventListener('click', window.utils.debounce(function (evt) {
      for (var i = 0; i < photoFiltersButtonElements.length; i++) {
        photoFiltersButtonElements[i].classList.remove('img-filters__button--active');
      }

      evt.target.classList.add('img-filters__button--active');
      makeGalleryClear();

      if (evt.target.id === 'filter-new') {
        var usersPhotosRandom = sortPhotoByRamdom(window.gallery.usersPhotosAll, PHOTOS_RAND_COUNT);
        window.gallery.renderPhotosFunction(usersPhotosRandom);
        var renewPicturePreviewElement = document.querySelectorAll('.picture__link');
        window.bigPhoto.makePicPreviewClicable(renewPicturePreviewElement, usersPhotosRandom);
      } else if (evt.target.id === 'filter-popular') {
        window.gallery.renderPhotosFunction(window.gallery.usersPhotosAll);
        var picturePreviewPopularElement = document.querySelectorAll('.picture__link');
        window.bigPhoto.makePicPreviewClicable(picturePreviewPopularElement, window.gallery.usersPhotosAll);
      } else if (evt.target.id === 'filter-discussed') {
        var usersPhotosByParametr = sortByParametr(window.gallery.usersPhotosAll);
        window.gallery.renderPhotosFunction(usersPhotosByParametr);
        var picturePreviewByParametrElement = document.querySelectorAll('.picture__link');
        window.bigPhoto.makePicPreviewClicable(picturePreviewByParametrElement, usersPhotosByParametr);
      }

    }));
  };

  var makeGalleryClear = function () {
    var photoContainerElement = document.querySelector('.pictures');
    var picturesToRemove = document.querySelectorAll('.picture__link');
    picturesToRemove.forEach(function (photo) {
      photoContainerElement.removeChild(photo);
    });
  };

  var sortPhotoByRamdom = function (data, quantity) {
    var temporaryArr = data.slice();

    var newphotoArr = [];
    for (var i = 0; i < quantity; i++) {
      var newPhotoRandom = temporaryArr[window.utils.getRandomNumber(0, temporaryArr.length)];
      var randomNumberCurrent = temporaryArr.indexOf(newPhotoRandom);
      newphotoArr.push(newPhotoRandom);
      temporaryArr.splice(randomNumberCurrent, 1);
    }

    return newphotoArr;
  };


  var sortByParametr = function (data) {
    var temporary = data.slice();
    temporary.sort(function (left, right) {
      return right.comments.length - left.comments.length;
    });
    return temporary;
  };

})();
