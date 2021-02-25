describe('OzoneIQ Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the landing page with an option to select current location or choose a location', () => {
      cy.get('form').children('.currentLocal', '.chooseLocal')
      // cy.url().should('include', '/')
  })
})

describe('OzoneIQ Dashboard Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
})

  it('Should be able to click Current Location and navigate to dashboard with air quality information pertaining to that location', () => {
      cy.get('form').children('.currentLocal').click()
      cy.fixture('aqiData.json')
      .then((currentLocation) => {
        cy.intercept('GET','http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f', {
          statusCode: 201,
          body: currentLocation.current
        })
      })
    // cy.url().should('include', '/')
  })

  it('Should be able to click Current Location and navigate to dashboard with air quality information pertaining to that location', () => {
      cy.get('form').children('.currentLocal').click()
      cy.fixture('aqiData.json')
      .then((currentLocation) => {
        cy.intercept('GET','http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f', {
          statusCode: 201,
          body: currentLocation.current
        })
      })
    // cy.url().should('include', '/')
  })
})

  