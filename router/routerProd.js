import express from 'express';
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

prodRouter.post('/upload-productos', (req, res) =>{
    try{
        prodDao.insertProd(req.body)
    }catch(err){
        console.log(err)
    }

})

export default prodRouter;