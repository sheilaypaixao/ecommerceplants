
import ShoppingCart from './ShoppingCart'
import Modal from '../components/Modal'
import Utils from '../components/Utils';
import { useRef, useState } from 'react';

export default function LstProducts({lstProducts, limit}){
    //var lstProducts = useState(lst);
    var refModalAddSucesso = useRef(0);
    var addEventScroll = useRef(null);
    var [limitPag, setLimitPag] = useState(limit || 6);

    console.log(limit, !limit);

    if(!limit){
        document.removeEventListener("scroll", addEventScroll.current);

        addEventScroll.current = (event) => {        
            const scroll = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.offsetHeight;

            if(scroll >= documentHeight){
                //console.log("fim");
                let newLimit = limitPag + 6;
                
                newLimit = (lstProducts.length < newLimit)? lstProducts.length: newLimit;
                
                setLimitPag(newLimit);
            }

        }
    
        document.addEventListener("scroll", addEventScroll.current);
    }

    function addProduct(id:number,e){
        e.preventDefault();
        
        ShoppingCart.addProduct(id);

        refModalAddSucesso.current.open();
    }

    function renderLstProducts(){
        var html:any = [];

        lstProducts.slice(0,limitPag).map((product:{img:string, name: string, price:number, id:number}, index:number) => {    
                
            html.push(<li key={index} className="grid grid-cols-2 bg-white gap-3 shadow-xl">
                <figure>
                <img src={product.img} alt=""/>
                </figure>
                <div className="text-xs">
                <h4>{product.name}</h4>
                <p>R$ {Utils.formatReal(product.price)}</p>
                <a href="#" onClick={(e)=> addProduct(product.id, e)} className="text-yellow-400 mt-[15px] block">Comprar</a>
                </div>
            </li>)  
        })

        return html;
    }

    return(
        <>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {renderLstProducts()}
        

        </ul>
        <Modal ref={refModalAddSucesso}>
            <h4>Produto adicionado com sucesso!</h4>
        </Modal>
    </>
    );
}

LstProducts.defaultProps = {
    lstProducts: [],
    limit: null
  }