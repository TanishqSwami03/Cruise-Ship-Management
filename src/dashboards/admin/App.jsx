import { useState } from "react"
import { Routes, Route } from "react-router-dom" // REMOVE BrowserRouter
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import CateringItems from "./pages/CateringItems"
import StationeryItems from "./pages/StationeryItems"
import ViewAllVoyagers from "./pages/ViewAllVoyagers"
import MovieTickets from "./pages/MovieTickets"
import BeautySalon from "./pages/BeautySalon"
import FitnessCenter from "./pages/FitnessCenter"
import PartyHall from "./pages/PartyHall"
import Profile from "./pages/Profile"
import AddEditCateringItem from "./pages/AddEditCateringItem"
import AddEditStationeryItem from "./pages/AddEditStationeryItem"
import AddEditVoyager from "./pages/AddEditVoyager"
import AddEditMovieTicket from "./pages/AddEditMovieTicket"
import AddEditBeautySalon from "./pages/AddEditBeautySalon"
import AddEditFitnessClass from "./pages/AddEditFitnessClass"
import AddEditPartyEvent from "./pages/AddEditPartyEvent"
import "./App.css"

function AdminApp() {
  const [user, setUser] = useState({
    name: "Admin User",
    role: "System Administrator",
    avatar: "A",
    email: "admin@voyager.com",
    phone: "+1 (555) 123-4567",
    address: "123 Admin Street, Suite 456, Admin City, AC 12345",
  })

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-6 pb-24">
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/catering" element={<CateringItems />} />
            <Route path="/catering/add" element={<AddEditCateringItem />} />
            <Route path="/catering/edit/:id" element={<AddEditCateringItem />} />
            <Route path="/stationery" element={<StationeryItems />} />
            <Route path="/stationery/add" element={<AddEditStationeryItem />} />
            <Route path="/stationery/edit/:id" element={<AddEditStationeryItem />} />
            <Route path="/voyagers" element={<ViewAllVoyagers />} />
            <Route path="/voyagers/add" element={<AddEditVoyager />} />
            <Route path="/voyagers/edit/:id" element={<AddEditVoyager />} />
            <Route path="/movie-tickets" element={<MovieTickets />} />
            <Route path="/movie-tickets/add" element={<AddEditMovieTicket />} />
            <Route path="/movie-tickets/edit/:id" element={<AddEditMovieTicket />} />
            <Route path="/beauty-salon" element={<BeautySalon />} />
            <Route path="/beauty-salon/add" element={<AddEditBeautySalon />} />
            <Route path="/beauty-salon/edit/:id" element={<AddEditBeautySalon />} />
            <Route path="/fitness-center" element={<FitnessCenter />} />
            <Route path="/fitness-center/add" element={<AddEditFitnessClass />} />
            <Route path="/fitness-center/edit/:id" element={<AddEditFitnessClass />} />
            <Route path="/party-hall" element={<PartyHall />} />
            <Route path="/party-hall/add" element={<AddEditPartyEvent />} />
            <Route path="/party-hall/edit/:id" element={<AddEditPartyEvent />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AdminApp
