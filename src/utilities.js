/* eslint-disable quotes */
/* eslint-disable semi */
import clearSkyDayIcon from './assets/clear-sky-day.png';
import clearSkyNightIcon from './assets/clear-sky-night.png';
import fewCloudsDayIcon from './assets/few-clouds-day.png';
import fewCloudsNightIcon from './assets/few-clouds-night.png';
import scatteredCloudsIcon from './assets/scattered-clouds.png';
import brokenCloudsIcon from './assets/broken-clouds.png';
import showerRainIcon from './assets/shower-rain.png';
import rainDayIcon from './assets/rain-day.png';
import rainNightIcon from './assets/rain-night.png';
import snowIcon from './assets/snowy.png';
import windyIcon from './assets/windy.png';
import tempIcon from './assets/tempicon.png';

export const fetchUserLocation = () => {
    return fetch('https://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f')
        .then(response => {
            handleFetchErrors(response)
            return response.json();
        });
};

export const fetchInputLocation = (city, state, country) => {
    return fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=26e9573a-6960-4337-b548-ec068499ad9f`)
        .then(response => {
            handleFetchErrors(response)
            return response.json();
        });
};

const handleFetchErrors = (response) => {
    if (response.status >= 400 && response.status < 500) {
        throw new Error ("We can't grab info for this location. Choose 'Current Location' OR ensure you are using CITY, STATE, COUNTRY format. (e.g. 'Denver, Colorado, USA')");
    }
    else if(response.status >= 500) {
        throw new Error ("Our server seems to be having difficulties at this time. Please try refreshing the page.");
    }
    return response;
};

export const convertToFahrenheit = (temp) => {
    const fahrenheit = (temp * 1.8) + 32;
    return Math.round(fahrenheit);
};

export const convertWindToCardinalDirection = (windDegree) => {
    if (windDegree > 337 || windDegree < 22 ) {
        return 'N';
    }
    else if (windDegree > 22 && windDegree < 67) {
        return 'NE';
    }
    else if (windDegree > 67 && windDegree < 112) {
        return 'E';
    }
    else if (windDegree > 112 && windDegree < 157) {
        return 'SE';
    }
    else if (windDegree > 157 && windDegree < 202) {
        return 'S';
    }
    else if (windDegree > 202 && windDegree < 248) {
        return 'SW';
    }
    else if (windDegree > 248 && windDegree < 293) {
        return 'W';
    }
    else if (windDegree > 293 && windDegree < 337) {
        return 'NW';
    }
};

export const convertMsToMph = (windSpeed) => {
    windSpeed * 2.237;
    return Math.round(windSpeed);
};

export const displayCorrectWeatherIcon = (icon) => {
    if (icon === '01d') {
        return [clearSkyDayIcon, 'Clear skies with sun'];
    }
    else if (icon === '01n') {
        return [clearSkyNightIcon, 'Clear skies with moon and stars'];
    }
    else if (icon === '02d') {
        return [fewCloudsDayIcon, 'Few clouds with sun'];
    }
    else if (icon === '02n') {
        return [fewCloudsNightIcon, 'Few clouds with moon and stars'];
    }
    else if (icon === '03d') {
        return [scatteredCloudsIcon, 'A cloud'];
    }
    else if (icon === '04d') {
        return [brokenCloudsIcon, 'Multiple clouds'];
    }
    else if (icon === '09d') {
        return [showerRainIcon, 'Cloud with rain'];
    }
    else if (icon === '10d') {
        return [rainDayIcon, 'Cloud with rain and sun'];
    }
    else if (icon === '10n') {
        return [rainNightIcon, 'Cloud with ran and moon'];
    }
    else if (icon === '13d') {
        return [snowIcon, 'Cloud with snow'];
    }
    else if (icon === '50d') {
        return [windyIcon, 'Wind blowing'];
    } else {
        return [tempIcon, 'Temperature Gauge'];
    }
};

export const airQualityMessages = (aqi) => {
    if (aqi <= 50) {
        return [
            'GOOD',
            'Air quality is satisfactory, and air pollution poses little or no risk.'
        ];
    }
    else if (aqi > 50 && aqi <= 100) {
        return [
            'MODERATE',
            'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.'
        ];
    }
    else if (aqi > 100 && aqi <= 150) {
        return [
            'UNHEALTHY FOR SENSITIVE GROUPS',
            'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
        ];
    }
    else if (aqi > 150 && aqi <= 200) {
        return [
            'UNHEALTHY',
            'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
        ];
    }
    else if (aqi > 200 && aqi <= 300) {
        return [
            'VERY UNHEALTHY',
            'Health alert: The risk of health effects is increased for everyone.'
        ];
    } else {
        return [
            'HAZARDOUS',
            'Health warning of emergency conditions: everyone is more likely to be affected.'
        ];
    }
};
