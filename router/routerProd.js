import { Router } from 'express';
import prodDao from '../DAOs/daoProducts.js'

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

prodRouter.get('/form-upload-productos',(req, res) =>{
    res.render('./layouts/form-prod.pug')
})

prodRouter.post('/form-upload-productos', (req, res) =>{
    try{
        prodDao.upload(req.body);
        res.redirect('/productos');
    }catch(err){
        console.log(err)
    }

})

prodRouter.put('/productos/update',(req, res) => {
    try{
        prodDao.updateProd(req.body);
        res.redirect('/productos');
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

export default prodRouter;