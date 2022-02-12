import { Router } from 'express';
import prodDao from '../DAOs/daoProducts.js'
import prodDaoFb from '../DAOs/daoProducts-fb.js'

const prodRouter = Router();


prodRouter.get('/productos', (req, res) =>{
    try{
        let resProd = res;
        prodDao.show()
        .then( res => { return resProd.render('./layouts/index.pug',{res})})
    }catch(err){
        console.log(err)
    }

})

prodRouter.get('/productosfb', (req, res) =>{
    try{
        let resProd = res;
        prodDaoFb.show()
        .then( res => { return resProd.render('./layouts/index-fb.pug',{res})})
    }catch(err){
        console.log(err)
    }

})

prodRouter.get('/form-upload-productos',(req, res) =>{
    res.render('./layouts/form-prod.pug')
})

prodRouter.get('/form-upload-productos-fb',(req, res) =>{
    res.render('./layouts/form-prod-fb.pug')
})

prodRouter.post('/form-upload-productos', (req, res) =>{
    try{
        prodDao.upload(req.body);
        res.redirect('/productos');
    }catch(err){
        console.log(err)
    }

})

prodRouter.post('/form-upload-productos-fb', (req, res) =>{
    try{
        prodDaoFb.upload(req.body)
        .then( resp => {
            res.redirect('/productosfb')
        })
        
    }catch(err){
        console.log(err)
    }

})

prodRouter.post('/productos/update',(req, res) => {
    try{
        prodDao.updateProd(req.body);
        res.redirect('/productos');
    }catch(err){
        console.log(err)
    }
})

prodRouter.post('/productos/updatefb',(req, res) => {
    try{
        console.log(req.body);
        prodDaoFb.updateProd(req.body);
        res.redirect('/productosfb');
    }catch(err){
        console.log(err)
    }
})

prodRouter.delete('/productos/:id',(req, res) => {
    try {
        prodDao.deleteProd(req.params.id);
        

    } catch (err) {
        console.log(err)
    }
})

prodRouter.delete('/productosfb/:id',(req, res) => {
    try {
        prodDaoFb.deleteProd(req.params.id);
        

    } catch (err) {
        console.log(err)
    }
})

export default prodRouter;