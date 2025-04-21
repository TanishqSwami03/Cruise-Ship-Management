import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import StationeryOrders from "./pages/StationeryOrders"
import Profile from "./pages/Profile"

function SupervisorApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StationeryOrders />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default SupervisorApp
