import { useState } from "react"
import { Scissors, Calendar, Users } from "lucide-react"
import BookingTable from "../components/BookingTable"
import StatCard from "../components/StatCard"

// Sample data
const salonBookings = [
  {
    id: 1,
    userName: "Sarah Johnson",
    service: "Hair Styling",
    appointmentDate: "2023-04-15 10:30",
    stylist: "Maria Garcia",
    bookingDate: "2023-04-10",
    status: "Confirmed",
  },
  {
    id: 2,
    userName: "Emily Davis",
    service: "Manicure & Pedicure",
    appointmentDate: "2023-04-16 14:00",
    stylist: "James Wilson",
    bookingDate: "2023-04-11",
    status: "Confirmed",
  },
  {
    id: 3,
    userName: "Jennifer Taylor",
    service: "Facial Treatment",
    appointmentDate: "2023-04-17 11:15",
    stylist: "Sophia Lee",
    bookingDate: "2023-04-12",
    status: "Confirmed",
  },
  {
    id: 4,
    userName: "Lisa Martinez",
    service: "Hair Coloring",
    appointmentDate: "2023-04-18 13:45",
    stylist: "Maria Garcia",
    bookingDate: "2023-04-13",
    status: "Cancelled",
  },
  {
    id: 5,
    userName: "Jessica White",
    service: "Haircut",
    appointmentDate: "2023-04-19 15:30",
    stylist: "David Kim",
    bookingDate: "2023-04-14",
    status: "Confirmed",
  },
  {
    id: 6,
    userName: "Amanda Martin",
    service: "Massage",
    appointmentDate: "2023-04-20 16:00",
    stylist: "Sophia Lee",
    bookingDate: "2023-04-15",
    status: "Confirmed",
  },
  {
    id: 7,
    userName: "Michelle Thompson",
    service: "Hair Styling",
    appointmentDate: "2023-04-21 10:00",
    stylist: "James Wilson",
    bookingDate: "2023-04-16",
    status: "Confirmed",
  },
  {
    id: 8,
    userName: "Stephanie Rodriguez",
    service: "Manicure",
    appointmentDate: "2023-04-22 12:15",
    stylist: "David Kim",
    bookingDate: "2023-04-17",
    status: "Pending",
  },
  {
    id: 9,
    userName: "Nicole Clark",
    service: "Facial Treatment",
    appointmentDate: "2023-04-23 14:30",
    stylist: "Maria Garcia",
    bookingDate: "2023-04-18",
    status: "Confirmed",
  },
  {
    id: 10,
    userName: "Rebecca Lewis",
    service: "Hair Coloring",
    appointmentDate: "2023-04-24 11:00",
    stylist: "Sophia Lee",
    bookingDate: "2023-04-19",
    status: "Confirmed",
  },
]

const columns = [
  { header: "User Name", accessor: "userName" },
  { header: "Service", accessor: "service" },
  { header: "Appointment Date", accessor: "appointmentDate" },
  { header: "Stylist", accessor: "stylist" },
  { header: "Booking Date", accessor: "bookingDate" },
  { header: "Status", accessor: "status" },
]

function SalonBookings() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter bookings based on active tab
  const filteredBookings =
    activeTab === "all" ? salonBookings : salonBookings.filter((booking) => booking.status.toLowerCase() === activeTab)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-pink-600">Salon Bookings</h1>
        <p className="text-gray-600 mt-1">View and manage all salon bookings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Bookings" value={salonBookings.length} icon={<Scissors size={24} />} color="purple" />
        <StatCard title="Today's Appointments" value="4" icon={<Calendar size={24} />} color="blue" />
        <StatCard title="Active Stylists" value="4" icon={<Users size={24} />} color="green" />
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
          title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Salon Bookings`}
        />
      </div>
    </div>
  )
}

export default SalonBookings