
import Crud from '../controllers/firebaseController.js';
import {queryProd} from '../config.js'

class ProdDaoFb extends Crud{

    constructor(){
        super(queryProd)
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

    async showByID(id){
        try {
            let prodById = await this.listById(id)
            return prodById
        } catch (err) {
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
    async deleteProd(id){
        try {
            await this.delete(id)
        } catch (err) {
            console.log(err)
        }
    }
} 


const prodDaoFb = new ProdDaoFb();

export default prodDaoFb;