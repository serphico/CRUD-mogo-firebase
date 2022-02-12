import Crud from '../controllers/firebaseController.js';
import {queryCart} from '../config.js'

class CartDaoFb extends Crud{

    constructor(){
        super(queryCart)
    }

    async show(){
        try{
            let cart = await this.listAll()
            return cart;
        }
        catch(err){
            console.log(err)
        }

    }

    async add(obj){
        try {
            await this.addProdCart(obj)
        } catch (err) {
            console.log(err)
        }
    }

    async updateProd(obj){
        try {
            await this.update(obj)
        } catch (err) {
            console.log(err)
        }
    }

    async deleteProd(id){
        try {
            await this.deleteCart(id)
        } catch (err) {
            console.log(err)
        }
    }
} 


const cartDaoFb = new CartDaoFb();

export default cartDaoFb;