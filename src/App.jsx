
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBarComponent from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import AboutComponent from './components/AboutView/AboutComponent'
import ContactComponent from './components/ContactView/ContactComponent'
import SingleProduct from './components/ProductView/SingleProd'



function App() {


  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path="/product/:prodID" element={<SingleProduct />} />
          <Route exact path='/about' element={<AboutComponent />} />
          <Route exact path="/contact" element={<ContactComponent />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
