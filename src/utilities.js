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


export const fetchUserLocation = () => {
  return fetch('http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f')
    .then(response => {
      handleFetchErrors(response)
      return response.json()
  })
}

export const fetchInputLocation = (city, state, country) => {
  return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=26e9573a-6960-4337-b548-ec068499ad9f`)
    .then(response => {
      handleFetchErrors(response)
      return response.json()
  })
}


const handleFetchErrors = (response) => {
  if (response.status >= 400 && response.status < 500) {
    throw new Error ("We can't grab info for this location. Choose 'Current Location' OR ensure you are using CITY, STATE, COUNTRY format. (e.g. 'Denver, Colorado, USA')")
  }
  else if(response.status >= 500) {
    console.log(response)
    throw new Error ("Our server seems to be having difficulties at this time. Please try refreshing the page.")
  }
  return response;
}

export const convertToFahrenheit = (temp) => {
  const fahrenheit = (temp * 1.8) + 32;
  return Math.round(fahrenheit);
}

export const convertWindToCardnialDirection = (windDegree) => {
  if (windDegree > 337 || windDegree < 22 ) {
    return 'N'
  }
  else if (windDegree > 22 && windDegree < 67) {
    return 'NE'
  }
  else if (windDegree > 67 && windDegree < 112) {
    return 'E'
  }
  else if (windDegree > 112 && windDegree < 157) {
    return 'SE'
  }
  else if (windDegree > 157 && windDegree < 202) {
    return 'S'
  }
  else if (windDegree > 202 && windDegree < 248) {
    return 'SW'
  }
  else if (windDegree > 248 && windDegree < 293) {
    return 'W'
  }
  else if (windDegree > 293 && windDegree < 337) {
    return 'NW'
  }
}

export const convertMsToMph = (windSpeed) => {
  const mph = windSpeed * 2.237;
  return Math.round(windSpeed);
}

export const displayCorrectWeatherIcon = (icon) => {
  if (icon === '01d') {
    return [clearSkyDayIcon, 'Clear skies with sun']
  }
  else if (icon === '01n') {
    return [clearSkyNightIcon, 'Clear skies with moon and stars']
  }
  else if (icon === '02d') {
    return [fewCloudsDayIcon, 'Few clouds with sun']
  }
  else if (icon === '02n') {
    return [fewCloudsNightIcon, 'Few clouds with moon and stars']
  }
  else if (icon === '03d') {
    return [scatteredCloudsIcon, 'A cloud']
  }
  else if (icon === '04d') {
    return [brokenCloudsIcon, 'Multiple clouds']
  }
  else if (icon === '09d') {
    return [showerRainIcon, 'Cloud with rain']
  }
  else if (icon === '10d') {
    return [rainDayIcon, 'Cloud with rain and sun']
  }
  else if (icon === '10n') {
    return [rainNightIcon, 'Cloud with ran and moon']
  }
  else if (icon === '13d') {
    return [snowIcon, 'Cloud with snow']
  }
  else if (icon === '50d') {
    return [windyIcon, 'Wind blowing']
  }
}
