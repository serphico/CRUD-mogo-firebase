import mongoose from 'mongoose';
import admin from 'firebase-admin'

import dotenv from 'dotenv';

dotenv.config();

export const baseDatos = mongoose.connect(process.env.DB_HOST)
    .then(dbCon => console.log('base de datos conectada'))
    .catch(err => console.log(err));



let serviceAccount = require("./controllers/serviceAccountKey.json");

export const dbFirebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


