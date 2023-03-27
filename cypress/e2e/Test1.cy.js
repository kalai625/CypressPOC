describe('template spec', () => {
 
  beforeEach(() => {
    cy.visit('https://abs-ops-portal-test.azurewebsites.net/')
    console.log("print 1")
  })

  it('should display the homepage', () => {
   console.log("print 2") 
  })

})