import { CREDENTIALS } from "../data/Constants"
import {PRODUCTS} from "../data/Constants"
import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"



fixture('login feature testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await LoginPage.loginUser(CREDENTIALS.VALID_USER.USERID,CREDENTIALS.VALID_USER.PASSWORD)
        
    })  
    
test('validation: User navigates to Login Page', async t =>{
   await ProductsPage.logOutUserForm()
   await t .expect(LoginPage.botImage.exists).ok()    
})

test('validation: user navigates to the shoping cart page', async t =>{
    await ProductsPage.clickShoppingCart()
    await t .expect(ShoppingCartPage.getSCPageTitle.exists).ok()
})

test ('validation: user Select One Product', async t =>{
    await ProductsPage.selectOneProduct()
    await ProductsPage.clickShoppingCart()
    var productAdded = ShoppingCartPage.getItemName.innerText
    await t .expect( productAdded).eql('Sauce Labs Fleece Jacket')

})

/*test ('validation: user Select Multiple Products', async t =>{
    await ProductsPage.selectMultipleProducts()
    await ProductsPage.clickShoppingCart()
    await t .expect(ShoppingCartPage.getItemName.innerText).eql('Sauce Labs Fleece Jacket')

})*/



