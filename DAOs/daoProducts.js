
import * as model from '../controllers/schema.js';
import Crud from '../controllers/appController.js';
import {baseDatos} from '../config.js'

class ProdDao extends Crud{

    constructor(){
        super(model.productos)
    }

    async show(){
        try{
            let prod = await this.listAll()
            return prod;
        }
        catch(err){
            console.log(err)
        }

    }

    async upload(obj){
        try {
            await this.insertProd(obj)
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
    async deleteProd(obj){
        try {
            await this.delete(obj)
        } catch (err) {
            console.log(err)
        }
    }
} 


const prodDao = new ProdDao();

export default prodDao;