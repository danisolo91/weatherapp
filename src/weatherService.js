const WeatherService = (() => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?APPID=3374f07f34f654b5b0cdc1faca7f5db0&q=';

    const getData = async (city) => {
        const response = await fetch(url + city, { mode: 'cors' });
        const data = await response.json();
        return data;
    };

    return { getData }
})();

export default WeatherService;