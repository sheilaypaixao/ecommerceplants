export default class ShoppingCart {
    constructor() {
        
    }

    static addProduct(id:number){
        let getProduct:string[] = ShoppingCart.getProducts();
        
        if(getProduct.length > 0){
            getProduct.push(String(id));

            var products = getProduct.join();
        }else{
            var products = [id].join();
        }

        sessionStorage.setItem("products", products);

       // console.log(sessionStorage.getItem("products"));
    }

    static removeProduct(id:number){
        let getProduct = ShoppingCart.getProducts();

        if(getProduct.length > 0){
            let indexOf = getProduct.indexOf(String(id));
            var newProducts:string[] = getProduct.slice(0, indexOf).concat(getProduct.slice(indexOf+1, getProduct.length));
            
            sessionStorage.setItem("products", newProducts.join());
        }
        //console.log(sessionStorage.getItem("products"));
    }
    static getProducts(){
        var productsCart = sessionStorage.getItem("products")?.split(",");

        if(!productsCart) return [];

        return productsCart;
    }
}