
import hero from '../assets/img/hero.png'
import imgList from '../assets/img/imgList.png'

import LstProducts from '../components/LstProducts'

import lstProducts from '../model/jsonProducts'

import '../assets/css/global.css'

function Home() {
  return (
    <>
        <section className="grid lg:grid-cols-2 pt-2 px-[20px]">
          <div className="md:pt-20">
            <p>Sua casa com as</p>
            <h2>melhores
            plantas</h2>
            <p className="text-xs leading-5 md:mr-20">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            
            {/*<form className="grid grid-cols-3 my-10">
              <input placeholder="Insira seu e-mail" className="col-span-2" type="text" name="news" />
              <button>Assinar Newsletter </button>
            </form>*/}
          </div>

          <figure className="hidden lg:block"><img src={hero} alt=""/></figure>
        </section>

        <div className="grid justify-center">
        <section className="grid sm:grid-cols-5 max-w-[990px] shadow-xl bg-white">
          <div className="sm:order-2 sm:col-span-3 md:col-span-2 pt-10 px-5">
          <p>Como conseguir</p>
          <h3>minha planta</h3>

          <ul className="lst-common">
            <li><span className="icon"></span><span>Escolha suas plantas</span></li>
            <li><span className="icon"></span>Faça seu pedido</li>
            <li><span className="icon"></span>Aguarde na sua casa</li>
          </ul>

          </div>
          <figure className="content-center overflow-hidden sm:order-1 sm:col-span-2 md:col-span-3"><img width="auto" height="100%" className="" src={imgList} alt=""/></figure>
        </section>
        </div> 

        <div className="text-center pt-10"><p>Conheça nossas</p><h2>ofertas</h2></div>

        <LstProducts lstProducts={lstProducts} limit={6} />
    </>
  )
}

export default Home
