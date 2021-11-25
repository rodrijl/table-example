describe('Example', () => {
  it('Visit page and filter by apiKey in Auth dropdown', () => {
    cy.visit('http://localhost:3000/');
    cy.get("div").contains("Auth").type("apiKey")
    cy.get("button").contains("Update").click()
  })
})