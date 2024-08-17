import React from "react"
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from "./components/Cart"
import RootLayout from "./components/RootLayout" 

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
