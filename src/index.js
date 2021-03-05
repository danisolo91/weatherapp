import WeatherService from './weatherService';

const App = (() => {

    const init = () => {
        WeatherService.getData('Barcelona').then(data => console.log(data));
    };

    return { init }
})();

App.init();