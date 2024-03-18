
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from "./components/CartWidget";
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import { Cart } from './components/Cart'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from "./components/NotFound"
import { CarritoProvider } from './context/CartContext.jsx'
// import './App.css'


function App() {

  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria_prod/:cid' element={<ItemListContainer />} />

          <Route path='/product/:pid' element={<ItemDetailsContainer />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        
      </CarritoProvider>
    </BrowserRouter>
      {/* <ProductsStore/> */}
    </>
  )
}

export default App
