import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS ={
    VALID_USER:{
        USERID: 'standard_user',
        PASSWORD: 'secret_sauce'
    },
    INVALID_USER:{
        USERID: 'invalidUser',
        PASSWORD: 'invalidPassword'
    }
    
}
export const PRODUCTS ={
    PRODUCTS_LIST:{
        FIRSTPRODUCT:'Sauce Labs Backpack',
        SECONDPRODUCT:'Sauce Labs Bike Light',
        THIRDPRODUCT:'Sauce Labs Bolt T-Shirt',
        FOURTHPRODUCT:'Sauce Labs Fleece Jacket',
        FIFTHPRODUCT:'Sauce Labs Onesie',
        SIXTHPRODUCT:'Test.allTheThings() T-Shirt (Red)'
    }
}
export const USERINFORMATION ={
    USER_INFO:{
        NAME: 'standard_user',
        LASTNAME: 'secret_sauce',
        ZIP:'75315'
    }
}