import { CREDENTIALS } from "../data/Constants"
import {PRODUCTS} from "../data/Constants"
import {USERINFORMATION} from "../data/Constants"
import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"
import CheckOutPage from "../pages/CheckOutPage"
import OverviewPage from "../pages/OverViewPage"


fixture('login feature testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await LoginPage.loginUser(CREDENTIALS.VALID_USER.USERID,CREDENTIALS.VALID_USER.PASSWORD)
        await ProductsPage.selectOneProduct()
        await ProductsPage.clickShoppingCart()
        await ShoppingCartPage.clickCheckOutBtn()
    })  

test('validation: Error Message is Displayed', async t =>{
   await CheckOutPage.clickContinueBtn()
   await t .expect(CheckOutPage.getErrorBtn.exists).ok()    
})

test('validation: User navigates to overview page', async t =>{
    await CheckOutPage.fillInformation(USERINFORMATION.USER_INFO.NAME,USERINFORMATION.USER_INFO.LASTNAME,USERINFORMATION.USER_INFO.ZIP)
    await CheckOutPage.clickContinueBtn()
    await t .expect(OverviewPage.getOVPageTitle.exists).ok()    
 })