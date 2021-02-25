describe('Movie Reelz', () => {
  beforeEach(() => {
    cy.fixture('movieData.json')
      .then((movies) => {
        cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
          statusCode: 201,
          body: movies
        })
      })
    cy.visit('http://localhost:3000')
  })