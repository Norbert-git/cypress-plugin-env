describe("proper name here", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  // example using testing library with findBy.....
  it("typing into an email field", () => {
    cy.findByPlaceholderText("email").type("yourEmail@email.com")
  })
})
