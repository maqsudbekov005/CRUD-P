import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SubmitUserForm from './pages/Create'
import Update from './Update'
import ShowUser from './pages/ShowUser'
import Navbar from './pages/Navbar'

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<SubmitUserForm />} />
        <Route path='/edit/:id' element={<Update />} />
        <Route path='/showuser' element={<ShowUser />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
