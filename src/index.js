import WeatherService from './weatherService';

const App = (() => {

    const init = () => {
        WeatherService.getData().then(data => console.log(data));
    };

    return { init }
})();

App.init();