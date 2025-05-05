let apiKey = "a27d320o50dd0fb63e6t6dc778bc438b";
let query = document.getElementById("city-input").value
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

function showCityTemperature(response){
    let h1 = document.querySelector("h1")
    h1.innerHTML = response.data.city


    let number = document.querySelector(".number-temperature")
    number.innerHTML= Math.round(response.data.temperature.current)
}

axios.get(apiUrl).then(showCityTemperature)




function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector(".search");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);