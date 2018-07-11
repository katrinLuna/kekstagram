'use strict';

(function () {

  var usersPhotos = [];
  var PHOTOS_COUNT = 25;
  var USER_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  var PHOTO_DESCRIPTIONS = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];
  var similarListElement = document.querySelector('.pictures');
  var similarPhotoTemplateElement = document.querySelector('#picture').content.querySelector('.picture__link');

  var getRandomComments = function () {
    var comments = [];
    var commentCount = window.utils.getRandomNumber(1, 2);

    for (var i = 0; i < commentCount; i++) {
      comments.push(USER_COMMENTS[window.utils.getRandomNumber(0, USER_COMMENTS.length - 1)]);
    }

    return comments;
  };

  var initPhotos = function () {
    for (var i = 0; i < PHOTOS_COUNT; i++) {
      var newPhotoBuild = {
        url: 'photos/' + (i + 1) + '.jpg',
        likes: window.utils.getRandomNumber(15, 200),
        comments: getRandomComments(),
        description: PHOTO_DESCRIPTIONS[window.utils.getRandomNumber(0, PHOTO_DESCRIPTIONS.length - 1)],
        dataId: i
      };
      usersPhotos.push(newPhotoBuild);
    }

    return usersPhotos;
  };

  var createNewPhoto = function (photo) {
    var photoElement = similarPhotoTemplateElement.cloneNode(true);

    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').dataset.idnum = photo.dataId;
    photoElement.querySelector('.picture__stat--likes').textContent = photo.likes;
    photoElement.querySelector('.picture__stat--comments').textContent = photo.comments.length;

    return photoElement;
  };


  var renderPhotos = function (photos) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < photos.length; i++) {
      fragment.appendChild(createNewPhoto(photos[i]));
    }

    similarListElement.appendChild(fragment);
  };


  var init = function () {
    usersPhotos = initPhotos();
    renderPhotos(usersPhotos);
    window.utils.visuallyHideElement(document.querySelector('.social__comment-count'));
    window.utils.visuallyHideElement(document.querySelector('.social__loadmore'));
  };

  init();

  // общение с бэкендом через callback
  var onSuccess = function (data) {
    console.log(data);
  };

  var serverDownloadError = function (errorMessage) {
    window.utils.errorHandler(errorMessage);
  };

  window.backend.download(onSuccess, serverDownloadError); // только это должно быть вызвано и обработано до функции генерации превьюшек чтобы было из чего их делать собственно

  // общение с бэкендом

  window.gallery = {
    usersPhotosAll: usersPhotos
  };

})();
