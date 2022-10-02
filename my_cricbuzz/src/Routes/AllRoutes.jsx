
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login/Login'
import Schedule from '../Components/Schedule/Schedule'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
        <Route path="/schedule" element={ <Schedule/>}></Route>
    </Routes>
  )
}

export default AllRoutes