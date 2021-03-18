import {Selector, t} from 'testcafe'

class CheckOutPage{
    constructor(){
        this.getYIPageTitle =Selector('div.subheader')
        this.getFirstNameInput= Selector('#first-name')
        this.getSecondNameInput=Selector('#last-name')
        this.getZipCInput= Selector('#postal-code')
        this.getContinueBtn=Selector('.btn_primary.cart_button')
        this.getErrorBtn=Selector('.error-button')
    }


    async fillInformation(name,lastName,ZIP){
        await t
        .typeText(this.getFirstNameInput,name)
        .typeText(this.getSecondNameInput,lastName)
        .typeText(this.getZipCInput,ZIP)
    }

    async clickContinueBtn(){
        await t .click(this.getContinueBtn)
    }

}
export default new CheckOutPage()