import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Film, Plus } from "lucide-react"
import Header from "../components/Header"
import DataTable from "../components/DataTable"

const MovieTickets = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          title: "Ocean Adventure",
          showtime: "2025-04-15 19:00",
          location: "Main Theater",
          capacity: 200,
          booked: 145,
          status: "Active",
        },
        {
          id: 2,
          title: "The Lost Island",
          showtime: "2025-04-15 21:30",
          location: "Main Theater",
          capacity: 200,
          booked: 98,
          status: "Active",
        },
        {
          id: 3,
          title: "Underwater Wonders",
          showtime: "2025-04-16 15:00",
          location: "Deck Cinema",
          capacity: 100,
          booked: 67,
          status: "Active",
        },
        {
          id: 4,
          title: "Sailing Through Time",
          showtime: "2025-04-16 19:00",
          location: "Main Theater",
          capacity: 200,
          booked: 178,
          status: "Active",
        },
        {
          id: 5,
          title: "Pirates of the Caribbean",
          showtime: "2025-04-17 15:00",
          location: "Deck Cinema",
          capacity: 100,
          booked: 100,
          status: "Sold Out",
        },
        {
          id: 6,
          title: "Titanic",
          showtime: "2025-04-17 19:00",
          location: "Main Theater",
          capacity: 200,
          booked: 156,
          status: "Active",
        },
        {
          id: 7,
          title: "Finding Nemo",
          showtime: "2025-04-18 15:00",
          location: "Deck Cinema",
          capacity: 100,
          booked: 45,
          status: "Active",
        },
        {
          id: 8,
          title: "The Life Aquatic",
          showtime: "2025-04-18 19:00",
          location: "Main Theater",
          capacity: 200,
          booked: 87,
          status: "Active",
        },
      ]
      setMovies(mockData)
      setLoading(false)
    }, 500)
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie screening?")) {
      setMovies(movies.filter((movie) => movie.id !== id))
    }
  }

  const columns = [
    { key: "title", header: "Movie Title" },
    { key: "showtime", header: "Showtime" },
    { key: "location", header: "Location" },
    {
      key: "capacity",
      header: "Capacity",
      render: (movie) => `${movie.booked}/${movie.capacity}`,
    },
    {
      key: "status",
      header: "Status",
      render: (movie) => {
        const statusClass =
          movie.status === "Sold Out"
            ? "badge-danger"
            : movie.booked >= movie.capacity * 0.8
              ? "badge-warning"
              : "badge-success"

        return <span className={`badge ${statusClass}`}>{movie.status}</span>
      },
    },
  ]

  const filters = [
    {
      name: "location",
      label: "Location",
      options: [
        { value: "Main Theater", label: "Main Theater" },
        { value: "Deck Cinema", label: "Deck Cinema" },
      ],
    },
    {
      name: "status",
      label: "Status",
      options: [
        { value: "Active", label: "Active" },
        { value: "Sold Out", label: "Sold Out" },
      ],
    },
  ]

  const user = {
    name: "Admin User",
    role: "System Administrator",
    avatar: "A",
  }

  return (
    <div>
      <Header title="Movie Tickets" subtitle="Manage movie screenings and ticket availability" user={user} />

      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <Film className="w-6 h-6 text-pink-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Movie Screenings</h2>
        </div>
        <Link to="/admin/movie-tickets/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-1" />
          Add New Screening
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          <p className="mt-2 text-gray-500">Loading movie screenings...</p>
        </div>
      ) : (
        <DataTable
          data={movies}
          columns={columns}
          onDelete={handleDelete}
          editPath="/admin/movie-tickets/edit"
          searchPlaceholder="Search movies..."
          filters={filters}
        />
      )}
    </div>
  )
}

export default MovieTickets
