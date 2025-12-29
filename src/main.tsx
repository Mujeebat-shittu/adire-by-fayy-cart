import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context-and-reducer/AuthContext.tsx'
// import { ProductProvider } from "@/context/ProductContext.tsx";
import { CartProvider } from "@/context-and-reducer/CartContext.tsx"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <AuthProvider>
    {/* <ProductProvider> */}
    <App />
    {/* </ProductProvider> */}
    </AuthProvider>
    </CartProvider>

  </StrictMode>
)
