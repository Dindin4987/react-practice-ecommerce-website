import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartSlice from './store/CartSlice.jsx'
import ProductSlice from './store/ProductSlice.jsx'
import { BrowserRouter } from 'react-router-dom'

const store = configureStore({
  reducer : {
    cart: CartSlice,  
    products: ProductSlice
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
