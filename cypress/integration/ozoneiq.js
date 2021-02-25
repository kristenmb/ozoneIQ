describe('OzoneIQ', () => {
  beforeEach(() => {
    cy.fixture('movieData.json')
      .then((data) => {
        cy.intercept('GET','http://api.airvisual.com/v2/nearest_city?key=26e9573a-6960-4337-b548-ec068499ad9f', {
          statusCode: 201,
          body: data
        })
      })
    cy.visit('http://localhost:3000')
  })