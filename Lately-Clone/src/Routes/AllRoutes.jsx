import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Product from "../Components/Product/Product"
import Resources from "../Components/Resources/Resources"
import Company from "../Components/Company/Company"
import Pricing from "../Components/Pricing/Pricing"
import Login from "../Components/Login/Login"
import SignUp from "../Components/SignUp/SignUp"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default AllRoutes