const ProductoModelFile = require('./productosFiles')
const ProductoModelMongoDB = require('./productosMongoDB')

class ProductoModel {
    static get(tipo){

        switch(tipo){
            case 'MONGODB':
                console.log('**** PRESISTENCIA EN MONGODB (productos) ***')
                const mongodb = new ProductoModelMongoDB()
                mongodb.conectarDB()
                return mongodb

            case 'FILE':
                console.log('**** PRESISTENCIA EN FILE SYSTEM (productos) ***')
                const file = new ProductoModelFile()
                return file

            default:
                console.log('No paso ningun tipo')
                break

        }
    }
}

module.exports = ProductoModel