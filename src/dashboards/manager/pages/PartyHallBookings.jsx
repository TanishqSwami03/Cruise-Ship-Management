import { useState } from "react"
import { Music, Calendar, Users } from "lucide-react"
import BookingTable from "../components/BookingTable"
import StatCard from "../components/StatCard"

// Sample data
const partyHallBookings = [
  {
    id: 1,
    userName: "Emily Davis",
    eventType: "Birthday Celebration",
    eventDate: "2023-04-15 18:00",
    guests: "25",
    bookingDate: "2023-04-10",
    status: "Confirmed",
  },
  {
    id: 2,
    userName: "Jessica White",
    eventType: "Anniversary Party",
    eventDate: "2023-04-16 19:30",
    guests: "40",
    bookingDate: "2023-04-11",
    status: "Confirmed",
  },
  {
    id: 3,
    userName: "Amanda Martin",
    eventType: "Corporate Event",
    eventDate: "2023-04-17 17:15",
    guests: "50",
    bookingDate: "2023-04-12",
    status: "Confirmed",
  },
  {
    id: 4,
    userName: "Nicole Clark",
    eventType: "Graduation Party",
    eventDate: "2023-04-18 20:45",
    guests: "35",
    bookingDate: "2023-04-13",
    status: "Cancelled",
  },
  {
    id: 5,
    userName: "Rebecca Lewis",
    eventType: "Reunion",
    eventDate: "2023-04-19 18:30",
    guests: "30",
    bookingDate: "2023-04-14",
    status: "Confirmed",
  },
  {
    id: 6,
    userName: "Stephanie Rodriguez",
    eventType: "Birthday Celebration",
    eventDate: "2023-04-20 19:00",
    guests: "20",
    bookingDate: "2023-04-15",
    status: "Confirmed",
  },
  {
    id: 7,
    userName: "Michelle Thompson",
    eventType: "Wedding Reception",
    eventDate: "2023-04-21 17:00",
    guests: "60",
    bookingDate: "2023-04-16",
    status: "Confirmed",
  },
  {
    id: 8,
    userName: "Laura Wilson",
    eventType: "Farewell Party",
    eventDate: "2023-04-22 18:15",
    guests: "25",
    bookingDate: "2023-04-17",
    status: "Pending",
  },
]

const columns = [
  { header: "User Name", accessor: "userName" },
  { header: "Event Type", accessor: "eventType" },
  { header: "Event Date", accessor: "eventDate" },
  { header: "Guests", accessor: "guests" },
  { header: "Booking Date", accessor: "bookingDate" },
  { header: "Status", accessor: "status" },
]

function PartyHallBookings() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter bookings based on active tab
  const filteredBookings =
    activeTab === "all"
      ? partyHallBookings
      : partyHallBookings.filter((booking) => booking.status.toLowerCase() === activeTab)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-pink-600">Party Hall Bookings</h1>
        <p className="text-gray-600 mt-1">View and manage all party hall bookings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Bookings" value={partyHallBookings.length} icon={<Music size={24} />} color="green" />
        <StatCard title="Today's Events" value="2" icon={<Calendar size={24} />} color="pink" />
        <StatCard title="Total Guests" value="285" icon={<Users size={24} />} color="blue" />
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
          title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Party Hall Bookings`}
        />
      </div>
    </div>
  )
}

export default PartyHallBookings