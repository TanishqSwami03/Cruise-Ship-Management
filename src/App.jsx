import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"

import AdminApp from './dashboards/admin/App.jsx'

function App() {

  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  )
}

export default App
