import {queryCart,queryProd} from '../config.js'

class Crud{
    constructor(collection){
        this.collection = collection;
    }



    async listAll(){

        if(this.collection ==  queryProd){
            try{
                let querySnapshot = await this.collection.get();
                let prodObj = querySnapshot.docs;
                const response = prodObj.map( (res) => ({
                    id: res.id,
                    title: res.data().title,
                    price:res.data().price,
                    thumbnail:res.data().thumbnail
                }))
                return response;
    
            }
            catch(err){
                console.log(err)
            }
        }else if(this.collection ==  queryCart){
            try{
                let querySnapshot = await this.collection.get();
                let prodObj = querySnapshot.docs;
                const response = prodObj.map( (res) => ({
                    id: res.id,
                    productos: res.data().productos
                }))
                return response;
    
            }
            catch(err){
                console.log(err)
            }
        }

    }

    async listById(id){
        try{
            let prodObj = await this.collection.doc(`${id}`).get();
            const prodRes = prodObj.data()
            const response = {...prodRes, "id": id}
            return response;

        }
        catch(err){
            console.log(err)
        }
    }

    async insertProd(obj){
        try{
            let newProd = {"title":obj.title,"price":parseInt(obj.price),"thumbnail":obj.thumbnail}
            await this.collection.doc().create(newProd)

            

        }
        catch(err){
            console.log(err)
        }
    }

    async update(obj){
        try{
            await this.collection.doc(`${obj.id}`).update({"title":obj.title,"price":parseInt(obj.price),"thumbnail":obj.thumbnail});

        }
        catch(err){
            console.log(err)
        }
    }
    async delete(id){
        try{
            await this.collection.doc(`${id}`).delete()
            

        }
        catch(err){
            console.log(err)
        }
    }

    async addProdCart(obj){
        let cartExist = await this.collection.get()
        let prodObj = cartExist.docs;
        const response = prodObj.map( (res) => ({
            id: res.id,
            title: res.data().title,
            price:res.data().price,
            thumbnail:res.data().thumbnail
        }))
        if (response.length == 0) {
            let date = new Date().toLocaleDateString();

            let newProdCart = {"timeStamp": date, "productos":{"id":obj.id, "title":obj.title, "price":obj.price, "thumbnail":obj.thumbnail}};
            await this.collection.doc().create(newProdCart)


        } else {
            const response2 = prodObj.map( (res) => ({
                id: res.id,
                productos: res.data().productos
            }))
            let prodFinal = response2[0].productos;
            let newProdCart = {"id":obj.id, "title":obj.title, "price":obj.price, "thumbnail":obj.thumbnail};
            prodFinal.push(newProdCart)
            await this.collection.doc(`${response2[0].id}`).update({"productos":prodFinal})

        }

    }

    async deleteCart(id){
        try{
            let cartExist = await this.collection.get()
            let delProd = cartExist.docs;
            const responseDel = delProd.map( (res) => ({
                id: res.id,
                productos: res.data().productos
            }))
            let indexProd = responseDel[0].productos.findIndex(prod => prod.id === id)
            let resDel= responseDel[0].productos;
            resDel.splice(indexProd, 1)
            await this.collection.doc(`${responseDel[0].id}`).update({"productos":resDel})
            //await cartID[0].productos.deleteOne({"_id":id})*/
            //console.log(cartID[0]._id);

        }
        catch(err){
            console.log(err)
        }
    }
}


export default Crud;