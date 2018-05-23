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
  this.xhr.open('POST', url, true);
  this.xhr.setRequestHeader('Content-type', 'application/JSON');
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
EasyHTTP.prototype.put = function(url, data, callBack) {
  this.xhr.open('PUT', url, true);
  this.xhr.setRequestHeader('Content-type', 'application/JSON');
  let self = this;
  this.xhr.onload = function() {
    callBack(null, self.xhr.responseText);
  }
  this.xhr.send(JSON.stringify(data));
}
// Make an HTTP DELETE Request