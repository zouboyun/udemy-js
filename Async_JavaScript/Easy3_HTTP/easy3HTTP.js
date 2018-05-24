class EasyHTTP {
  // Make HTTP GET request
  async get(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      })
    const data = await response.json();
    return data;
  }

  // Make HTTP POST request
  async post(url, post) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })
    const data = await response.json();
    return data;
  }

  // Make HTTP PUT request
  async put(url, post) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })
    const data = await response.json();
    return data;
  }

  // Make HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
    })
    const data = await 'post deleted.';
    return data;
  }
}