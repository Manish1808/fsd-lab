const ctx = document.getElementById('myChart');
const API_KEY = "25b5d51f0221767ca7aad908df540fdd";
let myChart;

function fetchWeather() {
    const city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.list[0].main.temp; 
            const temperatureCelsius = temperature - 273.15;
            console.log(`Temperature in ${city}: ${temperatureCelsius.toFixed(2)}°C`);
        })
        .catch(err => {
            console.log("Error fetching weather data:", err);
        });
}
