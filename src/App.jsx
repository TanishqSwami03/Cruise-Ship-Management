import { useState } from 'react'
import './App.css'
import { Routes, Route, Router } from "react-router-dom"

import AdminApp from './dashboards/admin/App.jsx'
import HeadCookApp from './dashboards/head_cook/App.jsx'

function App() {

  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/headCook/*" element={<HeadCookApp />} />
    </Routes>
  )
}

export default App
