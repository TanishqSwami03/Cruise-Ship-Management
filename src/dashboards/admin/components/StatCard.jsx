import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const StatCard = ({ title, count, description, icon, linkText, linkTo, iconColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 card-hover">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className={`text-${iconColor || "pink-500"}`}>{icon}</div>
      </div>
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900">{count}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Link to={linkTo} className="inline-flex items-center text-sm text-pink-500 hover:text-pink-600">
        {linkText}
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  )
}

export default StatCard
