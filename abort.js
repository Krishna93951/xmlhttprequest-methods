exports.abort = function abort(){
  var xhr = new XMLHttpRequest();
  var method = 'GET';
  var url = 'https://stackblitz.com/edit/xmlhttprequest-methods?file=index.js';
  xhr.open(method,url,true);
  xhr.send(null)
  if(xhr.LOADING ===3){
    xhr.abort(); //check network tab in Dev tools to know about it 
  }

}