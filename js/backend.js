'use strict';

(function (){
  var DOWNLOAD_URL = 'https://js.dump.academy/kekstagram/data';

  var xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.open('GET', DOWNLOAD_URL);

  xhr.addEventListener('load', function () {
    console.log(xhr.response);
  })

  xhr.send();

})();
