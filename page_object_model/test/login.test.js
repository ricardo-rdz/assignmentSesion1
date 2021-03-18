import { CREDENTIALS } from "../data/Constants"
import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"

fixture('login feature testing')
    .page`https://www.saucedemo.com/`


test('validation: The User navigates to Products Page', async t =>{
    await LoginPage.loginUser(CREDENTIALS.VALID_USER.USERID,CREDENTIALS.VALID_USER.PASSWORD)
    await t .expect(ProductsPage.productPageTittle.exists).ok()
})

test('validation: Error Message is Displayed', async t =>{
    await LoginPage.loginUser(CREDENTIALS.INVALID_USER.USERID, CREDENTIALS.INVALID_USER.PASSWORD)
    await t .expect(LoginPage.errorMsg.exists).ok()
})

/*test('validation: The User navigates to Products Page', async t =>{
    await LoginPage.loginUser2('standard_user', 'secret_sauce' CREDENTIALS.VALID_USER.USERID,CREDENTIALS.VALID_USER.PASSWORD)
    await t .expect(ProductsPage.productPageTittle.exists).ok()
})*/