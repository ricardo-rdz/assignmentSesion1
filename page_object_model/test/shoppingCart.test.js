import { CREDENTIALS } from "../data/Constants"
import {PRODUCTS} from "../data/Constants"
import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"


fixture('login feature testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await LoginPage.loginUser(CREDENTIALS.VALID_USER.USERID,CREDENTIALS.VALID_USER.PASSWORD)
        await ProductsPage.selectOneProduct()
        await ProductsPage.clickShoppingCart()
    })  

/*test('validation: User navigates to Login Page', async t =>{
   await ShoppingCartPage.clickCheckOutBtn()

   //await t .expect(LoginPage.botImage.exists).ok()    
})*/