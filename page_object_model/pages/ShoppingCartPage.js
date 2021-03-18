import {Selector,t} from 'testcafe';

class ShoppingCartPage{
    constructor(){
        this.getSCPageTitle = Selector('.subheader')
        this.getItemName = Selector('div.inventory_item_name')
        this.getChkBttn = Selector('.btn_action.checkout_button')

    }


    async clickCheckOutBtn(){
        await t
        .click(this.getChkBttn)
    }
    
    

}
export default new ShoppingCartPage()