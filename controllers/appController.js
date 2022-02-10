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

    async listById(id){
        try{
            let prodObj = await this.collection.find({'_id':id})
            return prodObj;

        }
        catch(err){
            console.log(err)
        }
    }

    async insertProd(obj){
        try{
            let newProd = {"title":obj.title,"price":parseInt(obj.price),"thumbnail":obj.thumbnail}
            const finalProd = new this.collection(newProd)
            await finalProd.save(function (err, res) {
                if (err){
                    console.log(err)
                }else{
                    console.log(res)
                }
                // saved!
              });
            

        }
        catch(err){
            console.log(err)
        }
    }

    async update(obj){
        try{
            await this.collection.updateOne({"_id": obj.id},{$set:{"title":obj.title,"price":parseInt(obj.price),"thumbnail":obj.thumbnail}});

        }
        catch(err){
            console.log(err)
        }
    }
    async delete(id){
        try{
            await this.collection.deleteOne({"_id": id})
            

        }
        catch(err){
            console.log(err)
        }
    }

    async addProdCart(obj){
        let cartExist = await this.collection.find({})
        if (cartExist.length == 0) {
            let date = new Date().toLocaleDateString();

            let newProdCart = {"timeStamp": date, "productos":{"_id":obj.id, "title":obj.title, "price":obj.price, "thumbnail":obj.thumbnail}};
            const finalCart = new this.collection(newProdCart)
            await finalCart.save(function (err, res) {
                if (err){
                    console.log(err)
                }else{
                    console.log(res)
                }
                // saved!
              });

        } else {
            let existColl = await this.collection.find();
            let existProd = existColl[0].productos;
           let newProdCart = {"_id":obj.id, "title":obj.title, "price":obj.price, "thumbnail":obj.thumbnail};
            existProd.push(newProdCart)
            await this.collection.updateOne({"_id":existColl[0]._id},{$set:{"productos":existProd}})

        }

    }
}


export default Crud;