import { useState } from "react"
import { Film, Calendar, Users } from "lucide-react"
import BookingTable from "../components/BookingTable"
import StatCard from "../components/StatCard"

// Sample data
const movieBookings = [
  {
    id: 1,
    userName: "John Smith",
    movieTitle: "Avengers Endgame",
    showtime: "2023-04-15 19:30",
    seats: "A1, A2",
    bookingDate: "2023-04-10",
    status: "Confirmed",
  },
  {
    id: 2,
    userName: "Sarah Johnson",
    movieTitle: "The Lion King",
    showtime: "2023-04-16 14:00",
    seats: "C5, C6, C7",
    bookingDate: "2023-04-11",
    status: "Confirmed",
  },
  {
    id: 3,
    userName: "Michael Brown",
    movieTitle: "Jurassic World",
    showtime: "2023-04-17 20:15",
    seats: "F3, F4",
    bookingDate: "2023-04-12",
    status: "Confirmed",
  },
  {
    id: 4,
    userName: "Emily Davis",
    movieTitle: "Star Wars: The Rise of Skywalker",
    showtime: "2023-04-18 18:45",
    seats: "D8, D9",
    bookingDate: "2023-04-13",
    status: "Cancelled",
  },
  {
    id: 5,
    userName: "David Wilson",
    movieTitle: "Toy Story 4",
    showtime: "2023-04-19 15:30",
    seats: "B12, B13, B14",
    bookingDate: "2023-04-14",
    status: "Confirmed",
  },
  {
    id: 6,
    userName: "Jennifer Taylor",
    movieTitle: "Frozen 2",
    showtime: "2023-04-20 13:00",
    seats: "G7, G8",
    bookingDate: "2023-04-15",
    status: "Confirmed",
  },
  {
    id: 7,
    userName: "Robert Anderson",
    movieTitle: "Joker",
    showtime: "2023-04-21 21:00",
    seats: "E10, E11",
    bookingDate: "2023-04-16",
    status: "Confirmed",
  },
  {
    id: 8,
    userName: "Lisa Martinez",
    movieTitle: "Black Widow",
    showtime: "2023-04-22 19:15",
    seats: "H2, H3, H4",
    bookingDate: "2023-04-17",
    status: "Pending",
  },
  {
    id: 9,
    userName: "Daniel Thomas",
    movieTitle: "No Time to Die",
    showtime: "2023-04-23 20:30",
    seats: "J5, J6",
    bookingDate: "2023-04-18",
    status: "Confirmed",
  },
  {
    id: 10,
    userName: "Jessica White",
    movieTitle: "Dune",
    showtime: "2023-04-24 18:00",
    seats: "K9, K10",
    bookingDate: "2023-04-19",
    status: "Confirmed",
  },
  {
    id: 11,
    userName: "Christopher Harris",
    movieTitle: "Avengers Endgame",
    showtime: "2023-04-25 14:45",
    seats: "A8, A9",
    bookingDate: "2023-04-20",
    status: "Confirmed",
  },
  {
    id: 12,
    userName: "Amanda Martin",
    movieTitle: "The Lion King",
    showtime: "2023-04-26 16:30",
    seats: "C10, C11",
    bookingDate: "2023-04-21",
    status: "Cancelled",
  },
]

const columns = [
  { header: "User Name", accessor: "userName" },
  { header: "Movie Title", accessor: "movieTitle" },
  { header: "Showtime", accessor: "showtime" },
  { header: "Seats", accessor: "seats" },
  { header: "Booking Date", accessor: "bookingDate" },
  { header: "Status", accessor: "status" },
]

function MovieBookings() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter bookings based on active tab
  const filteredBookings =
    activeTab === "all" ? movieBookings : movieBookings.filter((booking) => booking.status.toLowerCase() === activeTab)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-pink-600">Movie Bookings</h1>
        <p className="text-gray-600 mt-1">View and manage all movie bookings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Bookings" value={movieBookings.length} icon={<Film size={24} />} color="pink" />
        <StatCard title="Today's Bookings" value="5" icon={<Calendar size={24} />} color="blue" />
        <StatCard title="Total Viewers" value="32" icon={<Users size={24} />} color="green" />
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
          title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Movie Bookings`}
        />
      </div>
    </div>
  )
}

export default MovieBookings