function showWeather(response) {
    console.log(response.data);
    let tenperature = response.data.temperature.current;
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
    let dateElement = document.querySelector("#date-element");
    let date = new Date(response.data.time * 1000);
    temperatureElement.innerHTML = Math.round(tenperature);

    let city = document.querySelector("#city");
    let cityData= response.data.city;
    city.innerHTML = cityData
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
    dateElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"/>`;

}

function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes},`;

}

function searchCity(city){
 let apiKey = "a27d320o50dd0fb63e6t6dc778bc438b";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(showWeather);
}




function changeCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-input");
  let cityName = cityInputElement.value;
  let city = document.querySelector("#city");
    city.innerHTML = cityName;
    searchCity(cityName);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

searchCity("New York");