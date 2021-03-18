import {Selector,t} from 'testcafe';
import {PRODUCTS} from "../data/Constants"

class ProductsPage{
    constructor(){
        this.productPageTittle= Selector('.product_label')
        this.burgerBtn =        Selector('div.bm-burger-button')
        this.getLogOutLink=     Selector('#logout_sidebar_link')
        this.getShoppingCar=    Selector('#shopping_cart_container > a > svg')
        this.getListOfProducts= Selector('div.inventory_item_name')
        this.getAddCarBtn =     Selector('button.btn_primary.btn_inventory')

    }

    async logOutUserForm(){
        await t
            .click(this.burgerBtn)
            .click(this.getLogOutLink)
    }

    async clickShoppingCart(){
        await t
        .click(this.getShoppingCar)
    }

    async selectOneProduct(){
        await t
        let nameOfProducts = this.getListOfProducts
        let count = await nameOfProducts.count
        let addCart=this.getAddCarBtn
        let productToAdd = PRODUCTS.PRODUCTS_LIST.FOURTHPRODUCT
        let j=0

        for (var i = 0; i <count ; i++) {
            let productsList = await nameOfProducts.nth(i).innerText
            
            if (productsList === productToAdd ) {
                console.log(productsList)
                await t
                .click(addCart.nth(i))
                j++
                if(j==1){
                    break
                }
            }
        }
    }
    
    /*async selectMultipleProducts(){
        await t
        let nameOfProducts = this.getListOfProducts
        let count = await nameOfProducts.count
        let addCart=this.getAddCarBtn
        let productToAdd = PRODUCTS.PRODUCTS_LIST.FOURTHPRODUCT
        let j=0

        for (var i = 0; i <count ; i++) {
            let productsList = await nameOfProducts.nth(i).innerText
            
            if (productsList === productToAdd ) {
                console.log(productsList)
                await t
                .click(addCart.nth(i))
                j++
                if(j==3){
                    break
                }
            }
        }
    }*/

}
export default new ProductsPage()