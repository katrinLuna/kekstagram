'use strict';

(function () {
  // раскрытие/закрытие большого изображения и его создание
  var picturePreviewElement = document.querySelectorAll('.picture__link');
  var closeBigPhotoElement = document.querySelector('.big-picture__cancel');
  var bigPhotoElement = document.querySelector('.big-picture');
  var socialCommentListElement = document.querySelector('.social__comments');
  var socialCommentElement = document.querySelector('.social__comment');

  var createSocialComments = function (photo) {
    var comment;
    var newComments = [];

    for (var i = 0; i < photo.comments.length; i++) {
      comment = socialCommentElement.cloneNode(true);
      comment.querySelector('.social__picture').src = 'img/avatar-' + window.utils.getRandomNumber(1, 6) + '.svg';
      comment.querySelector('.social__text').textContent = photo.comments[i];

      newComments.push(comment);
    }

    return newComments;
  };

  var createBigPhoto = function (photo) {
    window.utils.showElement(bigPhotoElement);
    bigPhotoElement.querySelector('.big-picture__img img').src = photo.url;
    bigPhotoElement.querySelector('.likes-count').textContent = photo.likes;
    bigPhotoElement.querySelector('.comments-count').textContent = photo.comments.length;
    bigPhotoElement.querySelector('.social__caption').textContent = photo.description;

    var socialComments = createSocialComments(photo);
    for (var i = 0; i < socialComments.length; i++) {
      socialCommentListElement.appendChild(socialComments[i]);
    }

    return bigPhotoElement;
  };


  var makePicPreviewClicable = function () {
    for (var i = 0; i < picturePreviewElement.length; i++) {
      picturePreviewElement[i].addEventListener('click', function (evt) {
        createBigPhoto(window.gallery.usersPhotosAll[evt.target.dataset.idnum]);

        document.addEventListener('keydown', function (event) {
          if (event.keyCode === window.utils.ESC_KEY) {
            window.utils.hideElement(bigPhotoElement);
          }
        });
      });
    }
  };

  makePicPreviewClicable();
  closeBigPhotoElement.addEventListener('click', function () {
    window.utils.hideElement(bigPhotoElement);
  });
})();
