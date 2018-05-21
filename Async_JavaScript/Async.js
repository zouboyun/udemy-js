document.getElementById('get-data').addEventListener('click', loadData);

function loadData() {
  // instantiate an XmlHttpRequest object
  const xhr = new XMLHttpRequest();
  // initializes a newly-created request, method GET, async is true, can also pass in user and password but we don't need those for now
  xhr.open('GET', 'data.txt', true);
  // this is a callback to be executed when the request is completed successfully
  xhr.onload = function() {
    // check status code to make sure it is 200 (OK)
    if (this.status === 200) {
      document.getElementById('output-data').textContent = this.responseText;
      document.getElementById('output-data').style.color = 'red';
    }
  }
  //The XMLHttpRequest method send() sends the request to the server
  xhr.send();

}