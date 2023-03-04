function getWeather() {
    const cityName = document.getElementById('city-name').value;
    const apiKey = 'f640f63f1035aa1fcf46be12edd2c122';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherData = `
          <p>Temperature: ${data.main.temp} k</p>
          <p>Cloud description: ${data.weather[0].description}</p>
          <p>Wind speed: ${data.wind.speed} mph</p>
          <p>Pressure: ${data.main.pressure} hPa</p>
          <p>Humidity: ${data.main.humidity} %</p>
        `;
        document.getElementById('weather-data').innerHTML = weatherData;
      })
      .catch(error => {
        console.error(error);
        alert('Unable to get weather data. Please try again later.');
      });
  }