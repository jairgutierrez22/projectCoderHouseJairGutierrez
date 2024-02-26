
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from "./components/CartWidget";
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from "./components/NotFound"


function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria_prod/:cid' element={<ItemListContainer />} />

          <Route path='/product/:pid' element={<ItemDetailsContainer />} />

          {/* <Route path='/CartWidget' element={<CartWidget />} /> */}

          <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
      {/* <ProductsStore/> */}
    </>
  )
}

export default App
