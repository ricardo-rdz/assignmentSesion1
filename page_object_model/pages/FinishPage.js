import {Selector, t} from 'testcafe'

class FinishPage{
    constructor(){
        this.getFinishTittle =Selector('div.subheader')
      
    }


}
export default new FinishPage()