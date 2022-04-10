import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import AdminLayouts from './pages/layouts/AdminLayouts'
import Dashboard from './pages/admin/Dashboard'
import ListProduct from './pages/admin/products/ListProduct'
import AddProduct from './pages/admin/products/AddProduct'
import EditProduct from './pages/admin/products/EditProduct'
import ListCate from './pages/admin/category/ListCategory'
import AddCate from './pages/admin/category/AddCategory'
import EditCate from './pages/admin/category/EditCategory'
import Signup from './pages/auth/Signup'
import WebsiteLayouts from './pages/layouts/WebsiteLayout'
import 'antd/dist/antd.css'
import Home from './pages/home/Home'
import Demo from './pages/admin/Demo'
import Signin from './pages/auth/Signin'
import PrivateRouter from './components/admin/PrivateRouter'
import NotFoundPage from './components/home/NotFoundPage'
import Product from './pages/home/Product'



function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="">
      <Routes>
        <Route path='/' element={<WebsiteLayouts />}>
          <Route index element={<Navigate to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='product' element={<Product />} />
        </Route>
        <Route path='admin' element={<PrivateRouter><AdminLayouts /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='demo' element={<Demo />} />
          <Route path='product'>
            <Route index element={<ListProduct />} />
            <Route path='add' element={<AddProduct />} />
            <Route path='edit/:id' element={<EditProduct />} />
          </Route>
          <Route path='category'>
            <Route index element={<ListCate />} />
            <Route path='add' element={<AddCate />} />
            <Route path='edit/:id' element={<EditCate />} />
          </Route>
        </Route>
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
