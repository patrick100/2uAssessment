import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar/Sidebar'

import Home from './pages/Home'
import Invoices from './pages/Invoice'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </Router>
      ,
    </>
  )
}

export default App
