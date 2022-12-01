const URL_PRODUCTOS = 'https://633eca1d83f50e9ba3b84b17.mockapi.io/prueba/'

async function obtenerProductosService() {
    let productos = await get(URL_PRODUCTOS)
    return productos
}

async function guardarProductoService(producto) {
    const productoGuardado = await post(URL_PRODUCTOS, producto)
    // console.log(productoGuardado)
    return productoGuardado
}

async function actualizarProductoService(id, producto) {
    const productoActualizado = await put(URL_PRODUCTOS, id, producto)
    // console.log(productoActualizado)
    return productoActualizado
}

async function borrarProductoService(id) {
    const productoBorrado = await del(URL_PRODUCTOS, id)
    // console.log(productoBorrado)
    return productoBorrado
}

/* -------------------------------------------- */
/* TESTES                                       */
/* -------------------------------------------- */

// guardarProductoService(producto)

//actualizarProductoService(14, producto)

// borrarProductoService(1)