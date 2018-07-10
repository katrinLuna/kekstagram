'use strict';

(function (){
  var DOWNLOAD_URL = 'https://js.dump.academy/kekstagram/data';
  var SERVER_ANSWER_OK = 200;

  /*только это выносится в файл в котором будет использоваться результат работы функции
  и будет вызываться вот так window.backend.download(onSuccess);

  var onSuccess = function (data) {//поэтому без window объявляем
    console.log(data);
  }*/

  window.backend = {
    download: function (onLoad) {
      var xhr = new XMLHttpRequest;
      xhr.responseType = 'json';
      xhr.open('GET', DOWNLOAD_URL);

      xhr.addEventListener('load', function () {
        if (xhr.status === SERVER_ANSWER_OK) {
          onLoad(xhr.response);
        } else {
          console.log('error взаимодействия с сервером');
        }
      })

      xhr.send();
    }
  }

})();
