// this is the http library
function EasyHTTP() {
  this.xhr = new XMLHttpRequest();
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function(url, callBack) {
  this.xhr.open('GET', url, true);
  // this cannot be passed into the onload call back
  let self = this;
  this.xhr.onload = function() {
    if (self.xhr.status === 200) {
      callBack(null, self.xhr.responseText);
    } else {
      callBack('Error: ' + self.xhr.status);
    }
  }
  this.xhr.send();
}

// Make an HTTP POST Request
EasyHTTP.prototype.post = function(url, data, callBack) {
  this.xhr = new XMLHttpRequest();
  this.xhr.open('POST', url, true);
  let self = this;
  this.xhr.onload = function() {
    if (self.xhr.status === 201) {
      callBack(null, self.xhr.responseText);
    } else {
      callBack('Error: ' + self.xhr.status);
    }
  }
  this.xhr.send(JSON.stringify(data));
}

// Make an HTTP PUT Request

// Make an HTTP DELETE Request