
class ProductManager {

    static ultId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail,code, stock) {

        if(!title || !description || !price || !thumbnail || !code || !stock)
        {
            console.log("Todos los campos son requeridos, compltalos o hasta la vista beibi");
            return;
        }

        if(this.products.some(item => item.code === code)){
            console.log("Que sea un codigo unico por favor");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(newProduct);
    }

    getProducts(){
        console.log(this.products)
    }

    getPruductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Not Found");
        }else {
            console.log("Lo hemos encontrado:", product );
        }
        return product;
    }
}



const manager = new ProductManager();

manager.getProducts();

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc123", 25);

manager.getProducts();

manager.addProduct("Fornite", "Vamos a construir y a matarlos desde las alturas", 200, "sin imagen", "abc12345", 25);

manager.addProduct("Minecraft", "Vive una aventura cuadrada", 200, "sin imagen", "abc123456", 25);

manager.getProducts();

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "abc1234",);

manager.getPruductById(2);

manager.getPruductById(7);