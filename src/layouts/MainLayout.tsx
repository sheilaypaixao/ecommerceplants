import { Outlet,Link } from "react-router-dom";

export default function MainLayout(){

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

            <Outlet />
        </div>
    </div>
    );
}