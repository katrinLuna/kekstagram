'use strict';
var COUNT_ELEMENT = 25;
var USER_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var PHOTO_DESCRIPTION = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

var usersPhotos = [];

//functions
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//loop for creative new user photo element
var initPhotos = function () {
  for (var i = 0; i < COUNT_ELEMENT; i++) {
    var newPhotoBuild = {
      url: 'photos/' + (i + 1) + '.jpg',
      likes: getRandomNumber(15, 200),
      comments: USER_COMMENTS[getRandomNumber(0, USER_COMMENTS.length-1)],
      description: PHOTO_DESCRIPTION[getRandomNumber(0, PHOTO_DESCRIPTION.length-1)]
    };

    usersPhotos.push(newPhotoBuild);
  };

  return usersPhotos;
};

var similarListElement = document.querySelector('.pictures');
var similarPhotoTemplates = document.querySelector('#picture').content.querySelector('.picture__link');

var createNewPhoto = function () {
  var photoElement = similarPhotoTemplates.cloneNode(true);

  photoElement.querySelector('.picture__img').src = usersPhotos.url;
  /*photoElement.querySelector('picture__stat--likes').textContent = usersPhotos.likes.toString(10);
  photoElement.querySelector('picture__stat--comments').textContent = usersPhotos.comments;*/

  return photoElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < usersPhotos.length; i++) {
  fragment.appendChild(createNewPhoto(usersPhotos[i]));
};

similarListElement.appendChild(fragment);


