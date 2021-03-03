# OzoneIQ

This app allows users to view the air quality and current weather conditions for either their current location or a location of their choosing. It also serves as a source of information about air quality in general. Our technological focus for building this app was creating a PWA so a user can install it on their device and use it in offline mode. We also focused on the implementation of React Hooks.

## Usage

### Landing Page
When the application is launched, the user will be shown the landing page of the application.

![gif of opening app](https://media.giphy.com/media/GlBFHUTjuKfCraKPDl/giphy.gif)

From here, the user is provided with two ways to view a location’s AQI information. If the user clicks the ‘Current Location’ button, they will be prompted to the main dashboard with current air quality and weather conditions from the closest weather station (based on their IP address).

![gif of clicking current location](https://media.giphy.com/media/5MuzfuAb2RRQbrac4t/giphy.gif)

Otherwise, the user can input a City, State, and Country (e.g. Denver, Colorado, USA) of their choosing, and be shown the air quality and weather conditions for that location. Should the user enter an invalid location, they will see an error message for potential troubleshooting solutions. PLEASE NOTE: Currently Users MUST press the search button to the right of the input for the search to function correctly.

![gif of inputting custom location](https://media.giphy.com/media/oztH0062HyVbTfwb09/giphy.gif)

Also available on the main landing page is a footer the user can access to navigate the app without choosing a location. The user has access to their saved locations, a resources page which provides general information about the air quality index and how to stay safe in poor air quality conditions, an about page which provides information about our team and the inspiration behind the production of this app.

![gif of navigating from landing page](https://media.giphy.com/media/GjMkhgZA2fTLaIE0gd/giphy.gif)

### Saving a Location
When viewing a specific city’s AQI information and weather conditions, a user has the ability to save that location by clicking the star next to the city’s name at the top of the page. These favorite locations are stored on the Saved Locations tab, where a user can remove the city from their saved list, or click the city to be shown the most recent data for that city’s AQI and weather conditions.  

![gif deleting and clicking a saved location](https://media.giphy.com/media/ZAsMh5gGYjq3jtEtVT/giphy.gif)

### Dashboard
Once on the dashboard, the user will be displayed with the given information:
Top of screen: the location name that they chose on the landing page, the current temperature, icon indicating current weather conditions, a star indicating if the user has favorited the location or not, and an option to choose a different location.
Middle of screen: the air quality level, the air quality index, a colored circle around the index (resources page has legend on what the different colors mean), and a brief message describing the effects that air quality level can have.
Middle-bottom of screen: a smoke stack icon indicating the main pollutant, a rain drop indicating the % of humidity, a gauge indicating the air pressure, and a wind icon indicating the wind speed/direction.
Bottom/footer of screen: navigation buttons for the user to go to the dashboard, their saved locations, the resources page, and the about page.

![screenshot of dashboard](https://media.giphy.com/media/fAsvEwF8fbvK5fM7PB/giphy.gif)

## How to Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`
5. Run `npm start`

OR

Visit live site [here](https://ozone-iq.vercel.app/)

## Planning
We utilized GitHub Projects for project management, that board can be found [here](https://github.com/kristenmb/ozoneIQ/projects/1) <br/>
The detailed spec for this project can be found [here](https://frontend.turing.io/projects/module-3/stretch.html) <br/>
Our planning and wireframing can be found [here](https://miro.com/app/board/o9J_lSjvjP8=/)

## Challenges
* Learning about, implementing, and deploying a PWA within a week.
* Local Storage - accessing local storage through Hooks.
* React Hooks - implementing Hooks for the first time in a project. 

## Wins
* Successfully implementing and deploying a PWA in a week!
* Neumorphic design implementation.
* Teamwork and collaboration. Our team worked flawlessly together and communicated extremely well finding great compromises that led to a final product we are all happy with.

## Technologies Used
1. React
2. React Router
3. React Hooks 
4. SASS/SCSS
5. PWA
6. Cypress

## Future Iterations
* Creating a carousel of resources pages for the user to swipe between.
* Further PWA usage: implementing push notifications for level changes in local AQI, or an ability for a user to set a time each day to get notified of their current area's local AQI. 
* Further resources on how to get involved in the fight for environmental protection and reform.
* Add more information about the main pollutants provided by the api.  

## Project Members
This project was designed and implemented by [Rachel Buchta](https://github.com/rachelbuchta), [Luke Mason](https://github.com/LukeMason33), and [Kristen Bair](https://github.com/kristenmb)


