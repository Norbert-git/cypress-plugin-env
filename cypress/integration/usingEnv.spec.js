const nameOfTheWebsite = cypress.env("nameOfTheWebsite")

describe("proper name here", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  // the name of the website is in cypress.json file under env
  // the name is Abc
  it("correclty renders the name of the website", () => {
    cy.findByText("nameOfTheWebsite").should("exist")
  })
})
