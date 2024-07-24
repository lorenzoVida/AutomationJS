import cartPage from "../pages/cart/cartPage"
import placeOrderPage from "../pages/cart/placeOrderPage"
import homeMenuPage from "../pages/home/homeMenuPage"

describe('purchase products',() => {
    it('purchase firts product',()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        const home = new homeMenuPage()
        home.selectCart()
        const cart = new cartPage()
        cart.selectPlaceHoler()
        const order = new placeOrderPage()
        order.enterForm("Lorenzo")
        order.enterCountry("Peru")
    })
})