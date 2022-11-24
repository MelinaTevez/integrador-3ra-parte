const express = require('express')
/* const routerProductos = require('./routers/productos') */

const app = express()
require('dotenv').config()

//configuraciones
app.get('/', (req, res) => {
    res.send('HOLAA')
})
//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ruteo de mi aplicacion //prestar atencion al order de los app.use
app.use('/api/productos', require('./routers/productos'))
app.use('/api/carrito', require('./routers/carrito'))
app.use('/api/upload', require('./routers/upload'))

const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if(err) throw new Error(`Sucedio un error en el puerto: ${err}`)

    console.log(`Servidor arriba en el puerto: ${PORT}`)
})