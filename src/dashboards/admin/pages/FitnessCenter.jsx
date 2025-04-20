import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Dumbbell, Plus } from "lucide-react"
import Header from "../components/Header"
import DataTable from "../components/DataTable"

const FitnessCenter = () => {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          class: "Yoga",
          instructor: "Sarah Johnson",
          date: "2025-04-15",
          time: "08:00 AM",
          location: "Fitness Deck",
          capacity: 20,
          enrolled: 15,
          status: "Active",
        },
        {
          id: 2,
          class: "HIIT",
          instructor: "Michael Chen",
          date: "2025-04-15",
          time: "10:00 AM",
          location: "Gym",
          capacity: 15,
          enrolled: 15,
          status: "Full",
        },
        {
          id: 3,
          class: "Pilates",
          instructor: "Emma Davis",
          date: "2025-04-15",
          time: "02:00 PM",
          location: "Fitness Deck",
          capacity: 20,
          enrolled: 12,
          status: "Active",
        },
        {
          id: 4,
          class: "Zumba",
          instructor: "Carlos Rodriguez",
          date: "2025-04-16",
          time: "09:00 AM",
          location: "Dance Studio",
          capacity: 25,
          enrolled: 18,
          status: "Active",
        },
        {
          id: 5,
          class: "Spinning",
          instructor: "Jessica Kim",
          date: "2025-04-16",
          time: "11:00 AM",
          location: "Gym",
          capacity: 15,
          enrolled: 10,
          status: "Active",
        },
        {
          id: 6,
          class: "Meditation",
          instructor: "Sarah Johnson",
          date: "2025-04-16",
          time: "04:00 PM",
          location: "Fitness Deck",
          capacity: 30,
          enrolled: 22,
          status: "Active",
        },
        {
          id: 7,
          class: "Boxing",
          instructor: "Michael Chen",
          date: "2025-04-17",
          time: "10:30 AM",
          location: "Gym",
          capacity: 12,
          enrolled: 12,
          status: "Full",
        },
        {
          id: 8,
          class: "Yoga",
          instructor: "Emma Davis",
          date: "2025-04-17",
          time: "08:00 AM",
          location: "Fitness Deck",
          capacity: 20,
          enrolled: 14,
          status: "Active",
        },
      ]
      setSessions(mockData)
      setLoading(false)
    }, 500)
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this fitness session?")) {
      setSessions(sessions.filter((session) => session.id !== id))
    }
  }

  const columns = [
    { key: "class", header: "Class" },
    { key: "instructor", header: "Instructor" },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
    { key: "location", header: "Location" },
    {
      key: "capacity",
      header: "Capacity",
      render: (session) => `${session.enrolled}/${session.capacity}`,
    },
    {
      key: "status",
      header: "Status",
      render: (session) => {
        const statusClass = session.status === "Full" ? "badge-warning" : "badge-success"

        return <span className={`badge ${statusClass}`}>{session.status}</span>
      },
    },
  ]

  const filters = [
    {
      name: "class",
      label: "Class",
      options: [
        { value: "Yoga", label: "Yoga" },
        { value: "HIIT", label: "HIIT" },
        { value: "Pilates", label: "Pilates" },
        { value: "Zumba", label: "Zumba" },
        { value: "Spinning", label: "Spinning" },
        { value: "Meditation", label: "Meditation" },
        { value: "Boxing", label: "Boxing" },
      ],
    },
    {
      name: "instructor",
      label: "Instructor",
      options: [
        { value: "Sarah Johnson", label: "Sarah Johnson" },
        { value: "Michael Chen", label: "Michael Chen" },
        { value: "Emma Davis", label: "Emma Davis" },
        { value: "Carlos Rodriguez", label: "Carlos Rodriguez" },
        { value: "Jessica Kim", label: "Jessica Kim" },
      ],
    },
    {
      name: "location",
      label: "Location",
      options: [
        { value: "Fitness Deck", label: "Fitness Deck" },
        { value: "Gym", label: "Gym" },
        { value: "Dance Studio", label: "Dance Studio" },
      ],
    },
    {
      name: "status",
      label: "Status",
      options: [
        { value: "Active", label: "Active" },
        { value: "Full", label: "Full" },
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
      <Header title="Fitness Center" subtitle="Manage gym sessions and fitness classes" user={user} />

      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <Dumbbell className="w-6 h-6 text-pink-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Fitness Classes</h2>
        </div>
        <Link to="/admin/fitness-center/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-1" />
          Add New Class
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          <p className="mt-2 text-gray-500">Loading fitness classes...</p>
        </div>
      ) : (
        <DataTable
          data={sessions}
          columns={columns}
          onDelete={handleDelete}
          editPath="/admin/fitness-center/edit"
          searchPlaceholder="Search fitness classes..."
          filters={filters}
        />
      )}
    </div>
  )
}

export default FitnessCenter
