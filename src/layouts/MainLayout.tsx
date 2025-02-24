import { Outlet,Link } from "react-router-dom";

import product1 from '../assets/img/product1.png'
import product2 from '../assets/img/product2.png'
import product3 from '../assets/img/product3.png'
import product4 from '../assets/img/product4.png'
import product5 from '../assets/img/product5.png'
import product6 from '../assets/img/product6.png'

export default function MainLayout(){
    const lstProducts = [{name: 'Cordyline fruticosa', price:20, img: product1, id: 1},
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
    <div className="bg">
      <div className="container">
        <header>
          <nav>
            <ul className="flex justify-end py-6">
              <li><Link to="/" className="px-2 text-xs">Home</Link>/</li>
              <li><Link to="/produtos" className="px-2 text-xs">Produtos</Link>/</li>
              <li><a className="px-2 text-xs" href="#" title="Ofertas">Ofertas</a>/</li>
              <li><a className="px-2 text-xs" href="#" title="Depoimentos">Depoimentos</a> /</li>
              <li><Link to="/carrinho" className="px-2 text-xs">Carrinho</Link>/</li>
            </ul>
            
          </nav>
        </header>

            <Outlet context={lstProducts} />
        </div>
    </div>
    );
}