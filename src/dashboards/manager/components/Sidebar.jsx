import { Link, useLocation } from "react-router-dom"
import { Home, Film, Scissors, Activity, Music, User, LogOut } from "lucide-react"

function Sidebar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? "bg-pink-50 text-pink-600" : ""
  }

  return (
    <div className="w-64 bg-white border-r h-screen flex flex-col">
      <div className="flex items-center h-16 px-6 border-b">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex-shrink-0 bg-pink-500 text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-pink-500">Voyager</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-4">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">MAIN MENU</div>
          <nav className="space-y-1">
            <Link
              to="/"
              className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-pink-50 hover:text-pink-600 ${isActive("/")}`}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/movie-bookings"
              className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-pink-50 hover:text-pink-600 ${isActive("/movie-bookings")}`}
            >
              <Film size={20} />
              <span>View Movie Bookings</span>
            </Link>

            <Link
              to="/salon-bookings"
              className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-pink-50 hover:text-pink-600 ${isActive("/salon-bookings")}`}
            >
              <Scissors size={20} />
              <span>View Salon Bookings</span>
            </Link>

            <Link
              to="/fitness-bookings"
              className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-pink-50 hover:text-pink-600 ${isActive("/fitness-bookings")}`}
            >
              <Activity size={20} />
              <span>View Fitness Bookings</span>
            </Link>

            <Link
              to="/party-hall-bookings"
              className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-pink-50 hover:text-pink-600 ${isActive("/party-hall-bookings")}`}
            >
              <Music size={20} />
              <span>View Party Hall Bookings</span>
            </Link>
          </nav>
        </div>
      </div>

      <div className="p-6 border-t">
        <nav className="space-y-1">
          <Link
            to="/profile"
            className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-pink-50 hover:text-pink-600 ${isActive("/profile")}`}
          >
            <User size={20} />
            <span>Profile</span>
          </Link>

          <button className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md hover:bg-pink-50 hover:text-pink-600 w-full text-left">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar