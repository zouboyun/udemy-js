// this is the http library
function EasyHTTP() {
  this.xhr = new XMLHttpRequest();
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function(url) {
  this.xhr.open('GET', url, true);
  // this cannot be passed into the onload call back
  let self = this;
  this.xhr.onload = function() {
    if (self.xhr.status === 200) {
      return self.xhr.responseText;
    }
  }
  this.xhr.send();
}
// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request