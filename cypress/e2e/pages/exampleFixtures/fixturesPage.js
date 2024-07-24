class fixturesPage {

    enterName(name){
        return cy.get("div[class='form-group'] input[name='name']").type(name)
    } 

}
export default fixturesPage