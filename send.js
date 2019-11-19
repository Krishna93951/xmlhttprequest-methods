exports.send = function send() {
  //GET
//   var xhr = new XMLHttpRequest();
//   console.log('UNSENT:',xhr.status);

//   xhr.open('GET','/server',true);
//   console.log('OPENED:',xhr.status);

//   xhr.onload = function (){
//     console.log('DONE:',xhr.status);
//   }
  
//   // xhr.send();
//   // xhr.send(null);
//   // xhr.send('string');
//   // xhr.send(new Blob());
//   // xhr.send(new Int8Array());
//   xhr.send(document);

//POST
var xhr = new XMLHttpRequest();
xhr.open("POST", 'https://www.google.com/', true);

xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { 
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log('KK')
    }
}
// xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array()); 
xhr.send(document);
 };
