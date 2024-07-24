import fixturesPage from "../pages/exampleFixtures/fixturesPage"


describe('purchase products',() => {
    it('purchase firts product',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        const form = new fixturesPage()
        cy.fixture('cliente').then(function(data)
        {
            form.enterName(data.name)
        })
        
        
    })
})