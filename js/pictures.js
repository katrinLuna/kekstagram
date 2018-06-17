var usersPhoto = [];
var countElement = 25;

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 1; i <= countElement; i++) {
  var newPhotoItem = {
    url: 'photos/' + i  + '.jpg',
    likes: getRandom(15, 200)
  }

  usersPhoto[i-1] = newPhotoItem;

};

console.log(usersPhoto);
