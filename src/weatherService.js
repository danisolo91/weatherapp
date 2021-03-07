const WeatherService = (() => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?APPID=3374f07f34f654b5b0cdc1faca7f5db0&units=metric&q=';
    let weather = {};

    const getData = async (city) => {
        try {
            const response = await fetch(url + city, { mode: 'cors' });
            const data = await response.json();

            if (data.cod === 200) {
                weather.city = data.name;
                weather.country = data.sys.country;
                weather.tempC = Math.round(data.main.temp);
                weather.tempMaxC = Math.round(data.main.temp_max);
                weather.tempMinC = Math.round(data.main.temp_min);
                weather.tempF = celsiusToFahrenheit(data.main.temp);
                weather.tempMaxF = celsiusToFahrenheit(data.main.temp_max);
                weather.tempMinF = celsiusToFahrenheit(data.main.temp_min);
                weather.description = data.weather[0].main;
                weather.icon = data.weather[0].icon;
            }

            weather.cod = data.cod;
        } catch (error) {
            console.log(error);
        }
        return weather;
    };

    const celsiusToFahrenheit = (celsius) => {
        return Math.round((celsius * 9 / 5) + 32)
    };

    return { getData }
})();

export default WeatherService;