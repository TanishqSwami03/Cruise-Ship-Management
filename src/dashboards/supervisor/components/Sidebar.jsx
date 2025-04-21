import { NavLink } from "react-router-dom"
import { FileText, User, LogOut } from "lucide-react"

function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b flex items-center">
        <div className="text-pink-500 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-pink-500">Voyager</h1>
      </div>

      <div className="p-4">
        <p className="text-gray-500 text-sm uppercase font-medium mb-2">Main Menu</p>
        <nav className="space-y-1">
          <NavLink
            to="/supervisor/"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm ${isActive ? "bg-pink-50 text-pink-500" : "text-gray-700 hover:bg-gray-100"}`
            }
          >
            <FileText className="w-5 h-5 mr-3" />
            Stationery Item Orders
          </NavLink>
        </nav>
      </div>

      <div className="mt-auto border-t">
        <nav className="p-4 space-y-1">
          <NavLink
            to="/supervisor/profile"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm ${isActive ? "bg-pink-50 text-pink-500" : "text-gray-700 hover:bg-gray-100"}`
            }
          >
            <User className="w-5 h-5 mr-3" />
            Profile
          </NavLink>

          <button className="flex items-center px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
