import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  LayoutDashboard,
  Utensils,
  FileText,
  Users,
  Film,
  Scissors,
  Dumbbell,
  PartyPopper,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react"
import "../index.css"

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [servicesOpen, setServicesOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : ""
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    alert("Logged out successfully")
    // Then redirect to login page
    // navigate('/login');
  }

  return (
    <div className="w-64 bg-white h-full border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <Link to="/admin/" className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
            V
          </div>
          <span className="ml-2 text-xl font-semibold">
            <span className="text-pink-500">Voyager</span>
            <span className="text-gray-700"> Admin</span>
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">MAIN MENU</p>
          <nav className="space-y-1">
            <Link
              to="/admin/"
              className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/")}`}
            >
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Dashboard Overview
            </Link>
            <Link
              to="/admin/catering"
              className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/catering")}`}
            >
              <Utensils className="w-5 h-5 mr-3" />
              Catering Items
            </Link>
            <Link
              to="/admin/stationery"
              className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/stationery")}`}
            >
              <FileText className="w-5 h-5 mr-3" />
              Stationery Items
            </Link>
            <Link
              to="/admin/voyagers"
              className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/voyagers")}`}
            >
              <Users className="w-5 h-5 mr-3" />
              View All Voyagers
            </Link>
          </nav>
        </div>

        <div className="p-4">
          <div
            className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 cursor-pointer"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            <p className="text-xs font-semibold text-gray-500">SERVICES MANAGEMENT</p>
            <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "transform rotate-180" : ""}`} />
          </div>

          {servicesOpen && (
            <nav className="space-y-1 mt-2">
              <Link
                to="/admin/movie-tickets"
                className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/movie-tickets")}`}
              >
                <Film className="w-5 h-5 mr-3" />
                Movie Tickets
              </Link>
              <Link
                to="/admin/beauty-salon"
                className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/beauty-salon")}`}
              >
                <Scissors className="w-5 h-5 mr-3" />
                Beauty Salon
              </Link>
              <Link
                to="/admin/fitness-center"
                className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/fitness-center")}`}
              >
                <Dumbbell className="w-5 h-5 mr-3" />
                Fitness Center
              </Link>
              <Link
                to="/admin/party-hall"
                className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/party-hall")}`}
              >
                <PartyPopper className="w-5 h-5 mr-3" />
                Party Hall
              </Link>
            </nav>
          )}
        </div>
      </div>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/admin/profile"
          className={`flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 ${isActive("/profile")}`}
        >
          <User className="w-5 h-5 mr-3" />
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-pink-50 hover:text-pink-500 w-full text-left"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
