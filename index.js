var weather = document.getElementById("weather");
var form = document.querySelector("form");
var input = document.getElementById("weather-search");
var api_key = "8ecac9ebfb54144eef31588a12e23a03";
//var location = "";

form.onsubmit = async (e) => {
  e.preventDefault();
  var query = input.value;
  let location = document.createElement("h2");
  console.log("outside fetch: ", weather);
  var URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${api_key}`;
  fetch(URL).then((response) => {
    //console.log(response);
    response.json().then((data) => {
      console.log("data", data);
      location = data.name + ", " + data.sys.country;
      console.log("location", location);
    });
  });
  //city.innerHTML = `${query}`;
  //console.log("city", city);
};
