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
![gif deleting and clicking a saved location](http://www.giphy.com/gifs/ZAsMh5gGYjq3jtEtVT)

### Dashboard
Once on the dashboard, the user will be displayed with the given information:
Top of screen: the location name that they chose on the landing page, the current temperature, icon indicating current weather conditions, a star indicating if the user has favorited the location or not, and an option to choose a different location.
Middle of screen: the air quality level, the air quality index, a colored circle around the index (resources page has legend on what the different colors mean), and a brief message describing the effects that air quality level can have.
Middle-bottom of screen: a smoke stack icon indicating the main pollutant, a rain drop indicating the % of humidity, a gauge indicating the air pressure, and a wind icon indicating the wind speed/direction.
Bottom/footer of screen: navigation buttons for the user to go to the dashboard, their saved locations, the resources page, and the about page.
![screenshot of dashboard](http://www.giphy.com/gifs/fAsvEwF8fbvK5fM7PB)

## How to Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Add any further steps (install dependencies, run servers, etc)

OR

Visit live site [here]()

## Planning
We utilized GitHub Projects for project management, that board can be found [here](https://github.com/kristenmb/ozoneIQ/projects/1) <br/>
The detailed spec for this project can be found [here](https://frontend.turing.io/projects/module-3/stretch.html) <br/>
Our planning and wireframing can be found [here](https://miro.com/app/board/o9J_lSjvjP8=/)

### Testing development
Can include details re: the testing you developed if necessary 

## Challenges
* Learning about and implementing PWAs in a week
* Local Storage
* React Hooks

## Wins
* implementing a PWA in a week!
* neumorphic design
* teamwork/collaboration


## Technologies Used
1. React
2. React Router
3. React Hooks 
4. SASS/SCSS
5. PWAs
6. Cypress

## Future Iterations
* Carousel pages to swipe between dashboard and both resources pages
* Ability to click on a saved location card and be taken back to the dashboard for that specific location
* Further PWA usage: push notifications for level changes in aqi, or ability as a user to set a time each day to get notified of your current areas’ local AQI via a push notification. 
* Further resources on how to get involved in the fight for environmental protection/reform
* Add more information about/a legend for the AQI info on the main dash -- not clear what main pollutants are from api docs 

## Project Members
This project was designed and implemented by [Rachel Buchta](https://github.com/rachelbuchta), [Luke Mason](https://github.com/LukeMason33), and [Kristen Bair](https://github.com/kristenmb)


