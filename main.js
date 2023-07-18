class ProductManager {
    constructor() {
        this.products = []
        this.esId = 1
    }

    addProduct(product){
        if (!this.isProductValid(product)){
            console.log("Error el producto no es valido")
            return
        }
    
        if (this.isCodeDuplicate(product.code)){
            console.log("Error el codigo del producto ya esta siendo utilizado")
            return
        }
    
        product.id = this.esId++
        this.products.push(product)
    }
    
    getProducts(){
     return this.products
    }
    
    getProductById(id){
        const product = this.products.find((p)=> p.id === id)
        if(product){
            return product
        } else {
            console.log("Not found")
        }
    }
    
    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code) {
        return this.products.some((p)=> p.code === code)
    }
}


const productManager = new ProductManager()

productManager.addProduct({
    title: "Articulo 2",
    description: "Conjunto blanco",
    price: 1500,
    thumbnail: "/imagenArticulo1",
    code: "A001",
    stock: 5
})

productManager.addProduct({
    title: "Articulo 2",
    description: "Conjunto negro",
    price: 1500,
    thumbnail: "/imagenArticulo2",
    code: "A002",
    stock: 10
})

const productsLista = productManager.getProducts()

console.log(productsLista)

