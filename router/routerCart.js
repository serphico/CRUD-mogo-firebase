import { Router } from 'express';
import cartDao from '../DAOs/daoCart.js';
import prodDao from '../DAOs/daoProducts.js'


const cartRouter = Router();


cartRouter.get('/', (req, res) =>{
    try{
        let resCart = res;
        cartDao.show()
        .then( res => res[0].productos)
        .then(res => {
            console.log(res)
            return resCart.render('./layouts/carrito.pug',{res})
        })
    }catch(err){
        console.log(err)
    }

})

cartRouter.get('/agregar/:id', (req, res) =>{
    try{
        let resCart = res;
        prodDao.showByID(req.params.id)
        .then( res => (
            cartDao.add(res)
        ))

        //cartDao.add(req.params.id);
        //res.redirect('/carrito');
    }catch(err){
        console.log(err)
    }

})

cartRouter.put('/productos/update',(req, res) => {
    try{
        prodDao.updateProd(req.body);
        res.redirect('/productos');
    }catch(err){
        console.log(err)
    }
})

cartRouter.delete('/productos/:id',(req, res) => {
    try {
        prodDao.deleteProd(req.params.id);
        

    } catch (err) {
        console.log(err)
    }
})

export default cartRouter;