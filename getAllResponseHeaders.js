exports.allResponseHeaders = function allResponseHeaders (){
  var xhr = new XMLHttpRequest();
xhr.open("GET", "https://stackblitz.com/", true);
xhr.send();
xhr.HEADERS_RECEIVED;
xhr.getAllResponseHeaders();
}