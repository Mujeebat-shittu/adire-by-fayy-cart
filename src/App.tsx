import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Product from "./pages/product"
import Cart from "./pages/cart"
import { Toaster } from "react-hot-toast"



function App() {

  return (
    <>
    <BrowserRouter>
      <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
