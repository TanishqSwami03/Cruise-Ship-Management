import { Link } from "react-router-dom"

const Header = ({ title, subtitle, user }) => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className="flex items-center">
        <div className="text-right mr-3">
          <p className="font-medium text-gray-800">{user.name}</p>
          <p className="text-sm text-gray-500">{user.role}</p>
        </div>
        <Link to="/admin/profile">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
            {user.avatar}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
