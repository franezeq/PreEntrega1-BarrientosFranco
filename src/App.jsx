
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBarComponent from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import AboutComponent from './components/AboutView/AboutComponent'
import ContactComponent from './components/ContactView/ContactComponent'
import ItemDetailContainer from './components/ProductView/ItemDetailContainer'
import CartContext from './components/CartContext'



function App() {


  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBarComponent />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path='/about' element={<AboutComponent />} />
            <Route exact path="/contact" element={<ContactComponent />} />
          </Routes>
        </BrowserRouter>
      </CartContext>

    </>
  )
}

export default App
