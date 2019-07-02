fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // The JSON data will arrive here
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
  })
