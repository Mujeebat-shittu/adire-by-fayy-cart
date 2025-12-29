import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Product from "./pages/product"
import Cart from "./pages/cart"
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import Description from "./pages/description"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./components/protectedRoute"


function App() {


  return (
    <>
      <BrowserRouter>
        <Toaster
        position="top-right"
          toastOptions={{
            // Default options for all toasts
            style: {
              border: '1px solid #713200',
              padding: '8px',
              color: '#713200',
              background: '#fefefe',
            },
            // Options for specific types
            success: {
              style: {
                background: 'green',
                color: 'white',
              },
              iconTheme: {
                primary: 'white',
                secondary: 'green',
              },
            },
            error: {
              style: {
                background: 'white',
                color: 'red',
                borderColor: 'red'
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/product/:id" element={<Description />} />

          {/* protected route that requires authentication and signing in */}

          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )


}

export default App
