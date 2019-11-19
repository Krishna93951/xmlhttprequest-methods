exports.responseHeader = function responseHeader (){
  var xhr = new XMLHttpRequest();
xhr.open("GET", "https://stackblitz.com/", true);
xhr.send();
xhr.getAllResponseHeaders();
}