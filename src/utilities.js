export const fetchUserLocation = () => {
  return fetch('http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f')
    .then(response => response.json())
}

export const fetchInputLocation = (city, state, country) => {
  return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=26e9573a-6960-4337-b548-ec068499ad9f`)
    .then(response => response.json())
}

export const convertToFahrenheit = (temp) => {
  const fahrenheit = (temp * 1.8) + 32;
  return Math.round(fahrenheit);
}

export const convertWindToCardinalDirection = (windDegree) => {
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
