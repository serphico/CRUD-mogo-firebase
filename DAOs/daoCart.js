import * as model from '../controllers/schema.js';
import Crud from '../controllers/appController.js';
import {baseDatos} from '../config.js'

class CartDao extends Crud{

    constructor(){
        super(model.carrito)
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
            await this.addProdCart(obj[0])
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
            await this.delete(id)
        } catch (err) {
            console.log(err)
        }
    }
} 


const cartDao = new CartDao();

export default cartDao;