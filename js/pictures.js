'use strict';
var COUNT_ELEMENT = 25;
var USER_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var PHOTO_DESCRIPTIONS = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];
var usersPhotos = [];
var similarListElement = document.querySelector('.pictures');
var similarPhotoTemplateElement = document.querySelector('#picture').content.querySelector('.picture__link');
var bigPhotoElement = document.querySelector('.big-picture');
var socialCommentElement = document.querySelector('.social__comment');
var socialCommentListElement = document.querySelector('.social__comments');

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var hideElement = function (elem) {
  elem.classList.add('visually-hidden');
};

var getRandomComments = function () {
  var commentsGenerate = [];
  var commentCount = getRandomNumber(1, 2);

  for (var i = 0; i < commentCount; i++) {
    commentsGenerate.push(USER_COMMENTS[getRandomNumber(0, USER_COMMENTS.length - 1)]);
  }

  return commentsGenerate;
};


var initPhotos = function () {
  for (var i = 0; i < COUNT_ELEMENT; i++) {
    var newPhotoBuild = {
      url: 'photos/' + (i + 1) + '.jpg',
      likes: getRandomNumber(15, 200),
      comments: getRandomComments(),
      description: PHOTO_DESCRIPTIONS[getRandomNumber(0, PHOTO_DESCRIPTIONS.length - 1)]
    };
    usersPhotos.push(newPhotoBuild);
  }

  return usersPhotos;
};


var createNewPhoto = function (photo) {
  var photoElement = similarPhotoTemplateElement.cloneNode(true);

  photoElement.querySelector('.picture__img').src = photo.url;
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

var createSocialComment = function (photo) {
  var comment = socialCommentElement.cloneNode(true);
  var newComments = [];

  for (var i = 0; i < photo.comments.length; i++) {
    comment.querySelector('.social__picture').src = 'img/avatar-' + getRandomNumber(1, 6) + '.svg';
    comment.querySelector('.social__text').textContent = photo.comments[i];

    newComments.push(comment);
  }

  return newComments;
};

var createBigPhoto = function (photo) {
  bigPhotoElement.classList.remove('hidden');
  bigPhotoElement.querySelector('.big-picture__img img').src = photo.url;
  bigPhotoElement.querySelector('.likes-count').textContent = photo.likes;
  bigPhotoElement.querySelector('.comments-count').textContent = photo.comments.length;
  bigPhotoElement.querySelector('.social__caption').textContent = photo.description;

  var socialComments = createSocialComment(photo);
  for (var i = 0; i < socialComments.length; i++) {
    socialCommentListElement.appendChild(socialComments[i]);
  }

  return bigPhotoElement;
};

hideElement(document.querySelector('.social__comment-count'));
hideElement(document.querySelector('.social__loadmore'));


var init = function () {
  usersPhotos = initPhotos();
  renderPhotos(usersPhotos);
  createBigPhoto(usersPhotos[0]);
};

init();
