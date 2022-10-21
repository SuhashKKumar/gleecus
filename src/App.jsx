import React, {useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PendingOrders from './components/pendingOrders/PendingOrders'
import PreMain from './components/premain/PreMain'
import Sent from './components/sent/Sent'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' exact element={<PendingOrders/>} />
      <Route path='/sent' exact element={<Sent/>} />
      </Routes>
    </div>
  )
}

export default App
