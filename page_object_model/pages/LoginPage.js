import {Selector, t} from 'testcafe';

class LoginPage{
    constructor(){
        this.botImage = Selector('.bot_column')
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginBtn = Selector('.btn_action')
        this.errorMsg = Selector('button.error-button')
    }

    async loginUser(userName, password){
        await t
        .typeText(this.userNameField, userName)
        .typeText(this.passwordField, password)
        .click(this.loginBtn)
    }


     /*loginUser2 = (...credentials) => {
        t
        .typeText(this.userNameField, credentials)
        .typeText(this.passwordField, credentials)
        .click(this.loginBtn)
    }*/

    

}
export default new LoginPage()