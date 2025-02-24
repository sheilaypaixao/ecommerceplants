
import './assets/css/global.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import MainLayout from './layouts/MainLayout'
import Products from './pages/Products'

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/produtos" element={<Products/>} />
        <Route path="/carrinho" element={<Cart/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
