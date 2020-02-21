'use strict';

(function () {
  // раскрытие/закрытие большого изображения и его создание
  var MAX_RENDER_COMMENTS = 5;
  var closeBigPhotoElement = document.querySelector('.big-picture__cancel');
  var bigPhotoElement = document.querySelector('.big-picture');
  var socialCommentListElement = document.querySelector('.social__comments');
  var socialCommentElement = document.querySelector('.social__comment');

  var createSocialComments = function (photo) {
    var comment;
    var newComments = [];

    for (var i = 0; i < photo.comments.length; i++) {
      comment = socialCommentElement.cloneNode(true);
      comment.querySelector('.social__picture').src = photo.comments[i].avatar;
      comment.querySelector('.social__text').textContent = photo.comments[i].message;

      newComments.push(comment);
    }

    return newComments;
  };

//   comments: [{avatar: "img/avatar-6.svg",…},…]
// 0: {avatar: "img/avatar-6.svg",…}
// avatar: "img/avatar-6.svg"
// message: "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально."
// name: "Степан"

  var createBigPhoto = function (photo) {
    window.utils.showElement(bigPhotoElement);
    bigPhotoElement.querySelector('.big-picture__img img').src = photo.url;
    bigPhotoElement.querySelector('.likes-count').textContent = photo.likes;
    bigPhotoElement.querySelector('.comments-count').textContent = photo.comments.length;
    bigPhotoElement.querySelector('.social__caption').textContent = photo.description;

    var commentsToRemoveElement = document.querySelectorAll('.social__comment');
    commentsToRemoveElement.forEach(function (comment) {
      socialCommentListElement.removeChild(comment);
    });

    var commentsArrayLength = photo.comments.length > MAX_RENDER_COMMENTS ? MAX_RENDER_COMMENTS : photo.comments.length;

    var socialComments = createSocialComments(photo);
    for (var i = 0; i < commentsArrayLength; i++) {
      socialCommentListElement.appendChild(socialComments[i]);
    }

    return bigPhotoElement;
  };

  window.bigPhoto = {
    makePicPreviewClicable: function (previewPic, photoArray) {
      for (var i = 0; i < previewPic.length; i++) {
        previewPic[i].addEventListener('click', function (evt) {
          createBigPhoto(photoArray[evt.currentTarget.dataset.idnum]);
          document.body.classList.add('modal-open');

          document.addEventListener('keydown', function (keyEvent) {
            if (keyEvent.keyCode === window.utils.ESC_KEY) {
              document.body.classList.remove('modal-open');
              window.utils.hideElement(bigPhotoElement);
            }
          });
        });
      }
    }
  };

  closeBigPhotoElement.addEventListener('click', function () {
    document.body.classList.remove('modal-open');
    window.utils.hideElement(bigPhotoElement);
  });
})();
