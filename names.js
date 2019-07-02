



var div = document.createElement("div");

div.innerHTML = 'Name: ' + data[i].name;

mainContainer.appendChild(div);

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

function appendData(data) {
  var mainContainer = document.getElementById("names");

  for (var i = 0; i < data.length; i++) {
    // append each person to our page
  }
}