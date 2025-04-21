import { Film, Scissors, Activity, Music } from "lucide-react"
import StatCard from "../components/StatCard"

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-pink-600">Manager Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor and manage all bookings across the cruise ship</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Movie Bookings" value="128" icon={<Film size={24} />} color="pink" />
        <StatCard title="Total Salon Bookings" value="85" icon={<Scissors size={24} />} color="purple" />
        <StatCard title="Total Fitness Bookings" value="64" icon={<Activity size={24} />} color="blue" />
        <StatCard title="Total Party Hall Bookings" value="42" icon={<Music size={24} />} color="green" />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { user: "John Smith", action: "booked", service: "Movie: Avengers Endgame", time: "10 minutes ago" },
            { user: "Sarah Johnson", action: "cancelled", service: "Salon: Hair Styling", time: "25 minutes ago" },
            { user: "Michael Brown", action: "booked", service: "Fitness: Yoga Class", time: "1 hour ago" },
            { user: "Emily Davis", action: "booked", service: "Party Hall: Birthday Celebration", time: "2 hours ago" },
            { user: "David Wilson", action: "modified", service: "Movie: The Lion King", time: "3 hours ago" },
          ].map((activity, index) => (
            <div key={index} className="flex items-start p-3 rounded-lg hover:bg-gray-50">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold">
                {activity.user
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {activity.user}{" "}
                  <span
                    className={`font-normal ${
                      activity.action === "booked"
                        ? "text-green-600"
                        : activity.action === "cancelled"
                          ? "text-red-600"
                          : "text-blue-600"
                    }`}
                  >
                    {activity.action}
                  </span>{" "}
                  {activity.service}
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking Statistics</h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500">Chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Services</h2>
          <div className="space-y-4">
            {[
              { name: "Avengers Endgame", category: "Movie", bookings: 42 },
              { name: "Hair Styling", category: "Salon", bookings: 38 },
              { name: "Yoga Class", category: "Fitness", bookings: 35 },
              { name: "Birthday Celebration", category: "Party Hall", bookings: 30 },
              { name: "The Lion King", category: "Movie", bookings: 28 },
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                    {index + 1}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{service.name}</p>
                    <p className="text-xs text-gray-500">{service.category}</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">{service.bookings} bookings</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard