function getWeather() {
    const temperature = document.getElementById("temperature");
    const city = document.getElementById("city");
  
    const api = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "89a8c9b7fea1882017e9381cfc56ca1d";
  
    city.innerHTML = "Allow to locate...";
  
    function locSuccess (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
  
        const url =
            api +
            "?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=" +
            apiKey +
            "&units=metric";
  
        fetch(url)
            .then(response => response.json())
            .then(data => {
            const temp = data.main.temp;
            city.innerHTML = data.name + " / ";
            temperature.innerHTML = temp + "° C";
            });
    }
  
    function locError() {
        city.innerHTML = "Cannot be found. No weather can be provided.";
    }

    navigator.geolocation.getCurrentPosition(locSuccess, locError);
}
  
  
getWeather();