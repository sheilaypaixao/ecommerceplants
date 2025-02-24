
import { useRef, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart'
import Utils from '../components/Utils'
import { useOutletContext } from "react-router-dom";

//Global variable
var totalShopping = 0;

export default function Cart(){
    const lstProducts: Array<object> = useOutletContext();
    var [products, setProducts] = useState(ShoppingCart.getProducts());

    function addProduct(id:number,e){
        e.preventDefault();

        ShoppingCart.addProduct(id);

        setProducts(ShoppingCart.getProducts() || []);
    }

    function removeProduct(id:number,e){
        e.preventDefault();

        ShoppingCart.removeProduct(id);

        setProducts(ShoppingCart.getProducts() || []);
    }

    function lstProductsCart(){

        //var productsCart = ShoppingCart.getProducts() || [];

        var mapProduct = new Map();

        products?.forEach((product)=>{
            mapProduct.set(product, (mapProduct.get(product) + 1) || 1);
        });

        //console.log(mapProduct);
        const sortedMap = new Map([...mapProduct.entries()].sort((a, b) => a[0] - b[0]));

        var html:any[] = [];
        totalShopping = 0;

        sortedMap.forEach((productCart, key)=>{
            let product = lstProducts.find((product)=>  product.id==key);

            html.push(<li key={key} className="flex py-2">
                <figure className="flex-1">
                    <img src={product.img} alt=""/>
                </figure>
                <div className="content-center flex-2">
                <h4>{product.name}</h4>
                <p>Preço: R$ {Utils.formatReal(product.price)}</p>
                <p>Quantidade: {productCart}</p>
                <p>Total: R$ {Utils.formatReal(productCart * product.price)}</p>
                </div>
                <div className="content-center flex-1 justify-center">
                    <a href="#" className="border-2 rounded-xl px-[10px] py-[5px] inline-block" onClick={(e) => removeProduct(product.id, e)}>Remover</a>
                    <br/><a href="#" className="mt-[10px] border-2 rounded-xl px-[10px] py-[5px] inline-block" onClick={(e) => addProduct(product.id, e)}>Adicionar</a>
                </div>
                </li>);

            totalShopping += productCart * product.price;
        });

        return html;
    }

    return(
        <>
            <h2>Carrinho de Compras</h2>

            <ul>
            {lstProductsCart()}
            </ul>

            <h4>Total de Compras: R$ {Utils.formatReal(totalShopping)}</h4>
        </>
    );
}