export const fetchUserLocation = () => {
  return fetch('http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f')
    .then(response => response.json())
}

export const fetchInputLocation = (city, state, country) => {
  return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=26e9573a-6960-4337-b548-ec068499ad9f`)
    .then(response => response.json())
}
