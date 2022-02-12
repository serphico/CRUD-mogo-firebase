import mongoose from 'mongoose';
import admin from 'firebase-admin'
import path from 'path'

import dotenv from 'dotenv';

dotenv.config();

export const baseDatos = mongoose.connect(process.env.DB_HOST)
    .then(dbCon => console.log('base de datos conectada'))
    .catch(err => console.log(err));



let serviceAccount = path.resolve("./controllers/serviceAccountKey.json");

export const dbFirebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

console.log('Firebase conectada');

const db = admin.firestore();
export const queryProd = db.collection('productos')
export const queryCart = db.collection('carrito')

