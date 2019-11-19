exports.allResponseHeaders = function allResponseHeaders (){
  var xhr = new XMLHttpRequest();
xhr.open("GET", "./foo.txt", true);
xhr.send();

xhr.onreadystatechange = function() {
  
  if(this.readyState == this.HEADERS_RECEIVED) {

    var headers = xhr.getAllResponseHeaders();

    var array = headers.trim().split(/[\r\n]+/);

    var headerMap = {};

    array.forEach(function (line) {
      var parts = line.split(': ');
      var header = parts.shift();
      var value = parts.join(': ');
      headerMap.header = value;
    });
  }
  
}
var contentType = headerMap["content-type"];
  console.log(contentType)
}