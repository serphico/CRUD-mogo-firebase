class Crud{
    constructor(collection){
        this.collection = collection;
    }



    async listAll(){
        try{
            let prodObj = await this.collection.find()
            return prodObj;

        }
        catch(err){
            console.log(err)
        }
    }

    async insertProd(obj){
        try{
            await this.collection.save({obj})
            

        }
        catch(err){
            console.log(err)
        }
    }
}


export default Crud;