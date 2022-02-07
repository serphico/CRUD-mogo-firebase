import express from 'express';
import dotenv from 'dotenv';
import prodRouter from './router/routerProd.js'

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static('./views'));

app.set('view engine', 'pug');
app.set('views', "./views");


app.use('/', prodRouter)

export default app;