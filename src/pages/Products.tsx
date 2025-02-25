import LstProducts from '../components/LstProducts'
import Product from '../model/Product'

import product1 from '../assets/img/product1.png'
import product2 from '../assets/img/product2.png'
import product3 from '../assets/img/product3.png'
import product4 from '../assets/img/product4.png'
import product5 from '../assets/img/product5.png'
import product6 from '../assets/img/product6.png'

export default function Products(){

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

    return(
        <>
        <h3>Products</h3>

        <LstProducts lstProducts={lstProducts} />
        </>
    );
}