import { useState } from "react"
import { Activity, Calendar, Users } from "lucide-react"
import BookingTable from "../components/BookingTable"
import StatCard from "../components/StatCard"

// Sample data
const fitnessBookings = [
  {
    id: 1,
    userName: "Michael Brown",
    activity: "Yoga Class",
    sessionDate: "2023-04-15 08:00",
    instructor: "Alex Johnson",
    bookingDate: "2023-04-10",
    status: "Confirmed",
  },
  {
    id: 2,
    userName: "David Wilson",
    activity: "Pilates",
    sessionDate: "2023-04-16 09:30",
    instructor: "Emma Davis",
    bookingDate: "2023-04-11",
    status: "Confirmed",
  },
  {
    id: 3,
    userName: "Robert Anderson",
    activity: "Spinning",
    sessionDate: "2023-04-17 07:15",
    instructor: "Mark Wilson",
    bookingDate: "2023-04-12",
    status: "Confirmed",
  },
  {
    id: 4,
    userName: "Daniel Thomas",
    activity: "Weight Training",
    sessionDate: "2023-04-18 10:45",
    instructor: "Alex Johnson",
    bookingDate: "2023-04-13",
    status: "Cancelled",
  },
  {
    id: 5,
    userName: "Christopher Harris",
    activity: "Zumba",
    sessionDate: "2023-04-19 16:30",
    instructor: "Sophia Martinez",
    bookingDate: "2023-04-14",
    status: "Confirmed",
  },
  {
    id: 6,
    userName: "Matthew Jackson",
    activity: "Yoga Class",
    sessionDate: "2023-04-20 08:00",
    instructor: "Emma Davis",
    bookingDate: "2023-04-15",
    status: "Confirmed",
  },
  {
    id: 7,
    userName: "Andrew Thompson",
    activity: "Boxing",
    sessionDate: "2023-04-21 17:00",
    instructor: "Mark Wilson",
    bookingDate: "2023-04-16",
    status: "Confirmed",
  },
  {
    id: 8,
    userName: "Joshua Garcia",
    activity: "Swimming",
    sessionDate: "2023-04-22 11:15",
    instructor: "Sophia Martinez",
    bookingDate: "2023-04-17",
    status: "Pending",
  },
  {
    id: 9,
    userName: "Ryan Martinez",
    activity: "Pilates",
    sessionDate: "2023-04-23 09:30",
    instructor: "Alex Johnson",
    bookingDate: "2023-04-18",
    status: "Confirmed",
  },
  {
    id: 10,
    userName: "Brandon Davis",
    activity: "Weight Training",
    sessionDate: "2023-04-24 14:00",
    instructor: "Emma Davis",
    bookingDate: "2023-04-19",
    status: "Confirmed",
  },
]

const columns = [
  { header: "User Name", accessor: "userName" },
  { header: "Activity", accessor: "activity" },
  { header: "Session Date", accessor: "sessionDate" },
  { header: "Instructor", accessor: "instructor" },
  { header: "Booking Date", accessor: "bookingDate" },
  { header: "Status", accessor: "status" },
]

function FitnessBookings() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter bookings based on active tab
  const filteredBookings =
    activeTab === "all"
      ? fitnessBookings
      : fitnessBookings.filter((booking) => booking.status.toLowerCase() === activeTab)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-pink-600">Fitness Bookings</h1>
        <p className="text-gray-600 mt-1">View and manage all fitness bookings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Bookings" value={fitnessBookings.length} icon={<Activity size={24} />} color="blue" />
        <StatCard title="Today's Sessions" value="3" icon={<Calendar size={24} />} color="pink" />
        <StatCard title="Active Instructors" value="4" icon={<Users size={24} />} color="green" />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("all")}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === "all"
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              All Bookings
            </button>
            <button
              onClick={() => setActiveTab("confirmed")}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === "confirmed"
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === "pending"
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("cancelled")}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === "cancelled"
                  ? "border-b-2 border-pink-500 text-pink-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Cancelled
            </button>
          </nav>
        </div>

        <BookingTable
          bookings={filteredBookings}
          columns={columns}
          title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Fitness Bookings`}
        />
      </div>
    </div>
  )
}

export default FitnessBookings