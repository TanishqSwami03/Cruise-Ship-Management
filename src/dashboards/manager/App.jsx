import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import MovieBookings from "./pages/MovieBookings"
import SalonBookings from "./pages/SalonBookings"
import FitnessBookings from "./pages/FitnessBookings"
import PartyHallBookings from "./pages/PartyHallBookings"
import Profile from "./pages/Profile"

function ManagerApp() {
  return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-end p-4 bg-white border-b">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-gray-800 font-medium">Emma Johnson</div>
                <div className="text-sm text-gray-500">Manager</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold">
                EJ
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/movie-bookings" element={<MovieBookings />} />
              <Route path="/salon-bookings" element={<SalonBookings />} />
              <Route path="/fitness-bookings" element={<FitnessBookings />} />
              <Route path="/party-hall-bookings" element={<PartyHallBookings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
  )
}

export default ManagerApp
