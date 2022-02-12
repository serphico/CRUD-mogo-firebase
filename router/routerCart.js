import { Router } from 'express';
import cartDao from '../DAOs/daoCart.js';
import cartDaoFb from '../DAOs/daoCart-fb.js';
import prodDao from '../DAOs/daoProducts.js'
import prodDaoFb from '../DAOs/daoProducts-fb.js'


const cartRouter = Router();


cartRouter.get('/', (req, res) =>{
    try{
        let resCart = res;
        cartDao.show()
        .then( res => res[0].productos)
        .then(res => {
            return resCart.render('./layouts/carrito.pug',{res})
        })
    }catch(err){
        console.log(err)
    }

})

cartRouter.get('/carrito-fb/', (req, res) =>{
    try{
        let resCart = res;
        cartDaoFb.show()
        .then( res => res[0].productos)
        .then(res => {
            return resCart.render('./layouts/carrito-fb.pug',{res})
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

cartRouter.get('/agregarfb/:id', (req, res) =>{
    try{
        let resCart = res;
        prodDaoFb.showByID(req.params.id)
        .then( res => (
            cartDaoFb.add(res)
        ))

    
    }catch(err){
        console.log(err)
    }

})

cartRouter.put('/productos/update',(req, res) => {
    try{
        prodDao.updateProd(req.body);
    }catch(err){
        console.log(err)
    }
})

cartRouter.delete('/:id',(req, res) => {
    try {
        cartDao.deleteProd(req.params.id)
        res.redirect('/');

    } catch (err) {
        console.log(err)
    }
})

cartRouter.delete('/carrito-fb/:id',(req, res) => {
    try {
        cartDaoFb.deleteProd(req.params.id)
        res.redirect('/');

    } catch (err) {
        console.log(err)
    }
})
export default cartRouter;