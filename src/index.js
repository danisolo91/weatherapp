import WeatherService from './weatherService';

const App = (() => {
    const form = document.querySelector('form');
    const cityName = document.getElementById('city-name');
    const errorMessages = form.querySelector('.error-messages');
    const weather = document.querySelector('.weather');
    const location = weather.querySelector('.location');
    const mainInfo = weather.querySelector('.main-info');
    const icon = mainInfo.querySelector('.icon');
    const image = icon.querySelector('img');
    const description = icon.querySelector('.description');
    const temp = mainInfo.querySelector('.temp');
    const tempValue = temp.querySelector('.value');
    const celsius = temp.querySelector('.units').querySelector('.celsius');
    const fahrenheit = temp.querySelector('.units').querySelector('.fahrenheit');
    const minMax = weather.querySelector('.min-max');
    const minValue = minMax.querySelector('.min');
    const maxValue = minMax.querySelector('.max');
    let weatherData = {};
    let units = 'C';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        load(cityName.value);
    });

    celsius.addEventListener('click', (e) => {
        if(units != 'C') {
            units = 'C';
            renderTemp();
        }
    });

    fahrenheit.addEventListener('click', (e) => {
        if(units != 'F') {
            units = 'F';
            renderTemp();
        }
    });

    const renderData = () => {
        location.textContent = weatherData.city + ', ' + weatherData.country;
        image.src = 'http://openweathermap.org/img/wn/' + weatherData.icon + '@2x.png';
        description.textContent = weatherData.description;
        renderTemp();
    };

    const renderTemp = () => {
        if(units === 'C') {
            celsius.classList.add('selected');
            fahrenheit.classList.remove('selected');
        }
        if(units === 'F') {
            fahrenheit.classList.add('selected');
            celsius.classList.remove('selected');
        }
        tempValue.textContent = weatherData['temp' + units];
        minValue.textContent = weatherData['tempMin' + units] + '°';
        maxValue.textContent = weatherData['tempMax' + units] + '°';
    };

    const load = async (city = 'Barcelona') => {
        try {
            weatherData = await WeatherService.getData(city);
            if(weatherData.cod === '404') {
                errorMessages.textContent = 'Location not found';
            } else {
                errorMessages.textContent = '';
            }
            renderData();
        } catch(error) {
            console.log(error);
        }
    };

    return { load }
})();

App.load();