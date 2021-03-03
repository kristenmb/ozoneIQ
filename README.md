# OzoneIQ

This app allows users to view the air quality and current weather conditions for either their current location or a location of their choosing. It also serves as a source of information about air quality in general. Our technological focus for building this app was creating a PWA so a user can install it on their device and use it in offline mode. We also focused on the implementation of React Hooks.

## Usage

### Landing Page
When the application is launched, the user will be shown the landing page of the application.
![gif of opening app](http://www.giphy.com/gifs/GlBFHUTjuKfCraKPDl)

From here, the user is provided with two ways to view a location’s AQI information. If the user clicks the ‘Current Location’ button, they will be prompted to the main dashboard with current air quality and weather conditions from the closest weather station (based on their IP address).
![gif of clicking current location](http://www.giphy.com/gifs/5MuzfuAb2RRQbrac4t)

Otherwise, the user can input a City, State, and Country (e.g. Denver, Colorado, USA) of their choosing, and be shown the air quality and weather conditions for that location. Should the user enter an invalid location, they will see an error message for potential troubleshooting solutions. 
![gif of inputting custom location](http://www.giphy.com/gifs/oztH0062HyVbTfwb09)

Also available on the main landing page is a footer the user can access to navigate the app without choosing a location. The user has access to their saved locations, a resources page which provides general information about the air quality index and how to stay safe in poor air quality conditions, an about page which provides information about our team and the inspiration behind the production of this app.
![gif of navigating from landing page](http://www.giphy.com/gifs/GjMkhgZA2fTLaIE0gd)

### Saving a Location
When viewing a specific city’s AQI information and weather conditions, a user has the ability to save that location by clicking the star next to the city’s name at the top of the page. These favorite locations are stored on the Saved Locations tab, where a user can remove the city from their saved list, or click the city to be shown the most recent data for that city’s AQI and weather conditions.  
