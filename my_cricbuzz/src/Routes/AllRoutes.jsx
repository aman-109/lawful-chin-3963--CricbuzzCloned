
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login/Login'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
    </Routes>
  )
}

export default AllRoutes