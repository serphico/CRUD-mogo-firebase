import app from './main.js'




const server =app.listen(process.env.PORT, () =>{
    console.log('servidor conectado')
})

server.on('error', error => { console.log(error)})