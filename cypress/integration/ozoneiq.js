describe('OzoneIQ Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should be able to visit the landing page with logo, an option to select current location or choose a location', () => {
      cy
        .get('.logoWrapper').find('img').should('have.attr','src').should('include', '/static/media/logo4.1ade1652.png')
        .get('form').children('.currentLocal').should('be.visible')
        .get('form').children('.chooseLocal').should('be.visible')
      // cy.url().should('include', '/')
  })

  it('Should have a footer with four possible icons to click', () => {
      cy
        .get('footer')
        .children('img').should('have.length', 3)
        .get('footer')
        .children('p').contains('...')
  })
})

describe('OzoneIQ Dashboard Page', () => {
  beforeEach(() => {
      cy.fixture('aqiData.json')
      .then((currentLocation) => {
        cy.intercept('GET','http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f', {
          statusCode: 201,
          body: currentLocation.data
        })
      })
    cy.visit('http://localhost:3000')
})

  it('Should be able to click Current Location and navigate to dashboard with air quality information pertaining to that location', () => {
      cy.get('form').children('.currentLocal').click()
      cy.get('.main-dashboard')
    // cy.url().should('include', '/')
  })

  // it('Should be able to click Current Location and navigate to dashboard with air quality information pertaining to that location', () => {
  //     cy.get('form').children('.currentLocal').click()
  //     cy.fixture('aqiData.json')
  //     .then((currentLocation) => {
  //       cy.intercept('GET','http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f', {
  //         statusCode: 201,
  //         body: currentLocation.current
  //       })
  //     })
  //   // cy.url().should('include', '/')
  // })
})

  