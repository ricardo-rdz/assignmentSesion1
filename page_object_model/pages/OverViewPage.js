import {Selector, t} from 'testcafe'

class OverviewPage{
    constructor(){
        this.getOVPageTitle=Selector('.subheader')
        this.getItemAdded=Selector('.inventory_item_name')
        this.getFinishBtn=Selector('a.btn_action.cart_button')
    }

    async clickFinishButon(){
        await t.click(this.getFinishBtn)
    }


}
export default new OverviewPage()