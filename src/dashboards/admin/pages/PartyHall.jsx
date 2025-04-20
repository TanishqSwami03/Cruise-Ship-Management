import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { PartyPopper, Plus } from "lucide-react"
import Header from "../components/Header"
import DataTable from "../components/DataTable"

const PartyHall = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          name: "Birthday Celebration",
          host: "John Smith",
          date: "2025-04-15",
          time: "19:00",
          location: "Grand Ballroom",
          guests: 50,
          status: "Confirmed",
        },
        {
          id: 2,
          name: "Anniversary Party",
          host: "Emma Johnson",
          date: "2025-04-16",
          time: "20:00",
          location: "Sunset Deck",
          guests: 30,
          status: "Confirmed",
        },
        {
          id: 3,
          name: "Corporate Event",
          host: "Michael Brown",
          date: "2025-04-17",
          time: "18:00",
          location: "Conference Hall",
          guests: 100,
          status: "Pending",
        },
        {
          id: 4,
          name: "Wedding Reception",
          host: "Sophia Williams",
          date: "2025-04-18",
          time: "17:00",
          location: "Grand Ballroom",
          guests: 150,
          status: "Confirmed",
        },
        {
          id: 5,
          name: "Retirement Party",
          host: "James Davis",
          date: "2025-04-19",
          time: "19:30",
          location: "Sunset Deck",
          guests: 40,
          status: "Confirmed",
        },
        {
          id: 6,
          name: "Graduation Celebration",
          host: "Olivia Miller",
          date: "2025-04-20",
          time: "18:30",
          location: "Conference Hall",
          guests: 60,
          status: "Pending",
        },
        {
          id: 7,
          name: "Family Reunion",
          host: "Robert Wilson",
          date: "2025-04-21",
          time: "16:00",
          location: "Grand Ballroom",
          guests: 80,
          status: "Confirmed",
        },
        {
          id: 8,
          name: "Charity Gala",
          host: "Ava Moore",
          date: "2025-04-22",
          time: "19:00",
          location: "Grand Ballroom",
          guests: 200,
          status: "Pending",
        },
      ]
      setEvents(mockData)
      setLoading(false)
    }, 500)
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id))
    }
  }

  const columns = [
    { key: "name", header: "Event Name" },
    { key: "host", header: "Host" },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
    { key: "location", header: "Location" },
    { key: "guests", header: "Guests" },
    {
      key: "status",
      header: "Status",
      render: (event) => {
        const statusClass =
          event.status === "Confirmed" ? "badge-success" : event.status === "Pending" ? "badge-warning" : "badge-danger"

        return <span className={`badge ${statusClass}`}>{event.status}</span>
      },
    },
  ]

  const filters = [
    {
      name: "location",
      label: "Location",
      options: [
        { value: "Grand Ballroom", label: "Grand Ballroom" },
        { value: "Sunset Deck", label: "Sunset Deck" },
        { value: "Conference Hall", label: "Conference Hall" },
      ],
    },
    {
      name: "status",
      label: "Status",
      options: [
        { value: "Confirmed", label: "Confirmed" },
        { value: "Pending", label: "Pending" },
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
      <Header title="Party Hall" subtitle="Manage party hall bookings and events" user={user} />

      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <PartyPopper className="w-6 h-6 text-pink-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Event Bookings</h2>
        </div>
        <Link to="/admin/party-hall/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-1" />
          Add New Event
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          <p className="mt-2 text-gray-500">Loading events...</p>
        </div>
      ) : (
        <DataTable
          data={events}
          columns={columns}
          onDelete={handleDelete}
          editPath="/admin/party-hall/edit"
          searchPlaceholder="Search events..."
          filters={filters}
        />
      )}
    </div>
  )
}

export default PartyHall
