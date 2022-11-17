const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock:Number,
    marca:String,
    categoria:String,
    detalles:String,
    foto:String,
    envio: Boolean,
})

const ProductoModel = mongoose.model('productos', productoSchema)

class ProductoModelMongoDB {

    async conectarDB(){
        try {
            await mongoose.connect(process.env.URI_MONGODB_LOCAL)
            console.log('Base de datos conectada!')

        } catch (error) {
            console.log(`MongoDB error al conectar ${error}`)
        }
    }

    /* CRUD -> C: Create -> htt method POST */
    
    async createProducto(producto){
        try {
            const productoSave = new ProductoModel(producto)
            await productoSave.save()
            
            return productoSave

            } catch (error) {
            console.log(`Error en el createProducto: ${error}`)
        }
    }
    
    /* CRUD -> R: Read -> http method GET ALL*/
    async readProductos(){

        const productos = await ProductoModel.model.find({})
        return productos
    }
    
    /* CRUD -> R: Read -> http method GET ONE */
    async readProducto(id){
        const producto = await ProductoModel.findById(id)
        return producto
    }

    /* CRUD -> U: update -> http method PUT */
    async updateProducto(){
        
    }
    
    /* CRUD -> D: Delete -> http method DELETE */
    async deleteProducto(){
        
    }

}

module.exports = ProductoModelMongoDB