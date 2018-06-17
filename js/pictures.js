//variables
var usersPhoto = [];
var countElement = 25;
var userComments = ['Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var photoDescription = ['Тестим новую камеру!',
'Затусили с друзьями на море',
'Как же круто тут кормят',
'Отдыхаем...',
'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
'Вот это тачка!'];

//functions
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//loop for creative new user photo element
for (var i = 1; i <= countElement; i++) {
  var newPhotoItem = {
    url: 'photos/' + i  + '.jpg',
    likes: getRandom(15, 200),
    comments: userComments[getRandom(0, userComments.length-1)],
    description: photoDescription[getRandom(0, photoDescription.length-1)]
  }

  usersPhoto[i-1] = newPhotoItem;
};
