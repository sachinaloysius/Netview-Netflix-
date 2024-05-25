import React from 'react'
import LoginPage from './LoginPage'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './SignupPage'
import CreateAcoount from './CreateAcoount'
import Footer from './Footer copy'

export default function app() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/Signup' element={<SignupPage/>}/>
      <Route path='/Create' element={<CreateAcoount/>} />
    </Routes>
    <Footer />
    </>
  )
}
