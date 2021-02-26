describe('OzoneIQ Landing Page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it ('Should be able to visit the landing page with logo, an option to select current location or choose a location', () => {
      cy
        .get('.logoWrapper').find('img').should('have.attr','src').should('include', '/static/media/logo4.1ade1652.png')
        .get('form').children('.currentLocal').should('be.visible')
        .get('form').children('.chooseLocal').should('be.visible')
      // cy.url().should('include', '/')
  })

})

describe('OzoneIQ Dashboard Page - Current Location', () => {
  before(() => {
    cy.visit('http://localhost:3000')
      cy.fixture('aqiData.json')
      .then((data) => {
        cy.intercept('GET','http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f', {
          statusCode: 201,
          body: data.currentLocation
        })
      })
})

  it ('Should be able to click Current Location and navigate to dashboard with air quality information pertaining to that location', () => {
      cy.get('.currentLocal').click()
      cy.get('.main-dashboard').should('be.visible')
  })

  it ('Should display the current city and temperature', () => {
    cy.get('.location-name-temp-container').find('.location-name').should('contain', 'Centennial, Colorado')
    cy.get('.temp-container').find('.temperature').should('contain', '30 F')
  })

  it ('Should display the current AQI', () => {
    cy.get('.aqi-container').find('.aqi-level').should('contain', 'GOOD')
    cy.get('.aqi-container').find('.aqi-number').should('contain', '27')
    cy.get('.aqi-container').find('.aqi-description').should('contain', 'satisfactory')

  })

  it ('Should display the current main pollutant, humidity, pressure, and wind speed', () => {
    cy.get('.additional-info-container').get('.additional-info').find('.pollutant-icon').should('have.attr', 'alt', 'Outline of smoke stack')
    cy.get('.additional-info-container').get('.additional-info').find('.pollutant').should('contain', 'o3')
  
    cy.get('.additional-info-container').get('.additional-info').find('.humidity-icon').should('have.attr', 'alt', 'Outline of rain drop')
    cy.get('.additional-info-container').get('.additional-info').find('.humidity').should('contain', 69)

    cy.get('.additional-info-container').get('.additional-info').find('.pressure-icon').should('have.attr', 'alt', 'Outline of a pressure guage')
    cy.get('.additional-info-container').get('.additional-info').find('.pressure').should('contain', '1020hPa')

    cy.get('.additional-info-container').get('.additional-info').find('.wind-icon').should('have.attr', 'alt', 'Outline of wind blowing')
    cy.get('.additional-info-container').get('.additional-info').find('.wind').should('contain', '7 mph N')
  })

  it ('Should have a footer with four possible icons to click', () => {
      cy
        .get('footer')
        .children('.footerIcon').should('have.length', 3)
        .get('footer')
        .children('p').should('contain', '...')
  })
  
  it.skip ('Should be able to click the saved locations icon and be taken to the saved locations page', () => {

  })

  it.skip ('Should be able to click the question mark icon and be taken to the AQI information page', () => {
    
  })

  it.skip ('Should be able to click the \'more\' icon and be taken to the about/contact page', () => {
    
  })
})

describe('OzoneIQ Dashboard Page - Chosen Location', () => {
  before(() => {
    cy.visit('http://localhost:3000')
      cy.fixture('aqiData.json')
      .then((data) => {
        cy.intercept('GET','http://api.airvisual.com/v2/city?city=lafayette&state=louisiana&country=usa&key=26e9573a-6960-4337-b548-ec068499ad9f', {
          statusCode: 201,
          body: data.chosenLocation
        })
      })
})

  it ('Should be able to input a Chosen Location and navigate to dashboard with air quality information pertaining to that location', () => {
      cy.get('form input').type('lafayette, louisiana, usa')
      cy.get('.chooseLocal .searchButton').click()
      cy.get('.main-dashboard').should('be.visible')
  })

  
})

  