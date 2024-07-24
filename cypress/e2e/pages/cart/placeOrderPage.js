class placeOrderPage {

    nameTxt = "#name"
    countryTxt = "#country"

    enterForm(name){
        return cy.get(this.nameTxt).type(name)
    } 


    enterCountry(country){
        return cy.get(this.countryTxt).type(country)
    }
}
export default placeOrderPage