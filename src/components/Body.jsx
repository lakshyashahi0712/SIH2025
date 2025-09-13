import React from 'react'
import Navbar from './Navbar'
import Choice from './Choice'
import LoginTeacher from './LoginTeacher'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'





const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Body