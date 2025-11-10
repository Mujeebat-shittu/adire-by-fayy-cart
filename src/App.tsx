import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Product from "./pages/product"
import Description from "./components/description"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:id" element={<Description/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
