import { CREDENTIALS } from "../data/Constants"
import {PRODUCTS} from "../data/Constants"
import {USERINFORMATION} from "../data/Constants"
import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingCartPage from "../pages/ShoppingCartPage"
import CheckOutPage from "../pages/CheckOutPage"
import OverviewPage from "../pages/OverViewPage"
import FinishPage from "../pages/FinishPage"


fixture('login feature testing')
    .page`https://www.saucedemo.com/`
    .beforeEach(async t =>{
        await LoginPage.loginUser(CREDENTIALS.VALID_USER.USERID,CREDENTIALS.VALID_USER.PASSWORD)
        await ProductsPage.selectOneProduct()
        await ProductsPage.clickShoppingCart()
        await ShoppingCartPage.clickCheckOutBtn()
        await CheckOutPage.fillInformation(USERINFORMATION.USER_INFO.NAME,USERINFORMATION.USER_INFO.LASTNAME,USERINFORMATION.USER_INFO.ZIP)
        await CheckOutPage.clickContinueBtn()
    })  

test('validation: items in the OverviewPage match with the items added ', async t =>{
    /*const productAdded = ShoppingCartPage.getItemName.innerText
    const itemsAdded =  OverviewPage.getItemAdded.innerText*/
   await t.expect(ShoppingCartPage.getItemName.innerText).eql('Sauce Labs Fleece Jacket')
      
})

test('validation: User navigates Finish Page ', async t =>{
    await OverviewPage.clickFinishButon()
    await t.expect(FinishPage.getFinishTittle.innerText).eql('Finish')
      
})
