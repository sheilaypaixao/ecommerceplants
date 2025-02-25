
import { useState } from 'react';
import ShoppingCart from '../components/ShoppingCart'
import Utils from '../components/Utils'
//import { useOutletContext } from "react-router-dom";


import product1 from '../assets/img/product1.png'
import product2 from '../assets/img/product2.png'
import product3 from '../assets/img/product3.png'
import product4 from '../assets/img/product4.png'
import product5 from '../assets/img/product5.png'
import product6 from '../assets/img/product6.png'

//Global variable
var totalShopping = 0;

interface Product {
    img: string,
    name: string,
    price: number,
    id: number
}

export default function Cart(){
    //const lstProducts: Array<object> = useOutletContext();
    const lstProducts:Product[] = [{name: 'Cordyline fruticosa', price:20, img: product1, id: 1},
        {name: 'Crassula ovata', price:20, img: product2, id: 2},
        {name: 'Cyperus rotundus', price:40, img: product3, id: 3},
        {name: 'Crassula ovata', price:20, img: product4, id: 4},
        {name: 'Crassula ovata', price:60, img: product5, id: 5},
        {name: 'CPrassula ovata', price:20, img: product6, id: 6},
        {name: 'Crassula ovata', price:20, img: product2, id: 7},
        {name: 'Cyperus rotundus', price:40, img: product3, id: 8},
        {name: 'Crassula ovata', price:20, img: product4, id: 9},
        {name: 'Crassula ovata', price:60, img: product5, id: 10},
        {name: 'CPrassula ovata', price:20, img: product6, id: 11},
        {name: 'Crassula ovata', price:20, img: product2, id: 12},
        {name: 'Cyperus rotundus', price:40, img: product3, id: 13},
        {name: 'Crassula ovata', price:20, img: product4, id: 14},
        {name: 'Crassula ovata', price:60, img: product5, id: 15},
        {name: 'CPrassula ovata', price:20, img: product6, id: 16}        
    ];
    var [products, setProducts] = useState(ShoppingCart.getProducts());

    function addProduct(id:number,e:React.MouseEvent){
        e.preventDefault();

        ShoppingCart.addProduct(id);

        setProducts(ShoppingCart.getProducts() || []);
    }

    function removeProduct(id:number, e: React.MouseEvent){
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
            //console.log(productCart, key);

            let product: Product = lstProducts.find((prod:any) => prod.id==key) as Product;

            //if(product){
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
                        <a href="#" className="border-2 rounded-xl px-[10px] py-[5px] inline-block" onClick={(e: React.MouseEvent) => removeProduct(product.id, e)}>Remover</a>
                        <br/><a href="#" className="mt-[10px] border-2 rounded-xl px-[10px] py-[5px] inline-block" onClick={(e: React.MouseEvent) => addProduct(product.id, e)}>Adicionar</a>
                    </div>
                    </li>);

                totalShopping += productCart * product.price;
               // }
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