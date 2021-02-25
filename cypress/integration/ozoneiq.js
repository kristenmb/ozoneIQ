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
      cy.fixture('aqiData.json')
      .then((data) => {
        cy.intercept('GET','http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f', {
          statusCode: 201,
          body: data.currentLocation
        })
      })
    cy.visit('http://localhost:3000')
})

  it ('Should be able to click Current Location and navigate to dashboard with air quality information pertaining to that location', () => {
      cy.get('.currentLocal').click()
      cy.get('.main-dashboard').should('be.visible')
  })

  it ('Should have a footer with four possible icons to click', () => {
      cy
        .get('footer')
        .children('.footerIcon').should('have.length', 3)
        .get('footer')
        .children('p').contains('...')
  })
  
  it.skip ('Should be able to click the saved locations icon and be taken to the saved locations page', () => {

  })

  it.skip ('Should be able to click the question mark icon and be taken to the AQI information page', () => {
    
  })

  it.skip ('Should be able to click the \'more\' icon and be taken to the about/contact page', () => {
    
  })
})

  