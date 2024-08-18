import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
