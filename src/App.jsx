import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import PendingOrders from './components/pendingOrders/PendingOrders'
import Sent from './components/sent/Sent'
import './App.css'

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
