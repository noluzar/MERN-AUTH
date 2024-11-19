// import React from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import { Register } from './pages/Register'
import { Footer } from './components/Footer'
import { MainLayout } from './layout/MainLayout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './pages/Login'
import { PrivateRoute } from './components/PrivateRoute'
import { Profile } from './pages/Profile';
import { Products } from './pages/Products'
import { CreateProduct } from './pages/CreateProduct'


const App = () => {
  return (
    <div className='bg-[#f5e8d9] overflow-y-hidden h-auto'>
    <Router>
        <Navbar />
        <ToastContainer/>
      <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='' element={<PrivateRoute />}>
      <Route path='/products' element={<Products />}/>
      <Route path='/create' element={<CreateProduct />}/>
      <Route path='/profile' element={<Profile />}/>
      </Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
