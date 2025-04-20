import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Scissors, Plus } from "lucide-react"
import Header from "../components/Header"
import DataTable from "../components/DataTable"

const BeautySalon = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          service: "Haircut",
          voyager: "John Smith",
          date: "2025-04-15",
          time: "10:00 AM",
          stylist: "Emma Wilson",
          status: "Confirmed",
        },
        {
          id: 2,
          service: "Manicure",
          voyager: "Emma Johnson",
          date: "2025-04-15",
          time: "11:30 AM",
          stylist: "Sophia Lee",
          status: "Confirmed",
        },
        {
          id: 3,
          service: "Facial",
          voyager: "Michael Brown",
          date: "2025-04-15",
          time: "2:00 PM",
          stylist: "James Taylor",
          status: "Confirmed",
        },
        {
          id: 4,
          service: "Hair Coloring",
          voyager: "Sophia Williams",
          date: "2025-04-16",
          time: "9:30 AM",
          stylist: "Emma Wilson",
          status: "Pending",
        },
        {
          id: 5,
          service: "Pedicure",
          voyager: "James Davis",
          date: "2025-04-16",
          time: "11:00 AM",
          stylist: "Sophia Lee",
          status: "Confirmed",
        },
        {
          id: 6,
          service: "Massage",
          voyager: "Olivia Miller",
          date: "2025-04-16",
          time: "3:30 PM",
          stylist: "James Taylor",
          status: "Cancelled",
        },
        {
          id: 7,
          service: "Haircut",
          voyager: "Robert Wilson",
          date: "2025-04-17",
          time: "10:30 AM",
          stylist: "Emma Wilson",
          status: "Confirmed",
        },
        {
          id: 8,
          service: "Facial",
          voyager: "Ava Moore",
          date: "2025-04-17",
          time: "1:00 PM",
          stylist: "James Taylor",
          status: "Pending",
        },
      ]
      setAppointments(mockData)
      setLoading(false)
    }, 500)
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setAppointments(appointments.filter((appointment) => appointment.id !== id))
    }
  }

  const columns = [
    { key: "service", header: "Service" },
    { key: "voyager", header: "Voyager" },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
    { key: "stylist", header: "Stylist" },
    {
      key: "status",
      header: "Status",
      render: (appointment) => {
        const statusClass =
          appointment.status === "Confirmed"
            ? "badge-success"
            : appointment.status === "Pending"
              ? "badge-warning"
              : "badge-danger"

        return <span className={`badge ${statusClass}`}>{appointment.status}</span>
      },
    },
  ]

  const filters = [
    {
      name: "service",
      label: "Service",
      options: [
        { value: "Haircut", label: "Haircut" },
        { value: "Manicure", label: "Manicure" },
        { value: "Pedicure", label: "Pedicure" },
        { value: "Facial", label: "Facial" },
        { value: "Hair Coloring", label: "Hair Coloring" },
        { value: "Massage", label: "Massage" },
      ],
    },
    {
      name: "stylist",
      label: "Stylist",
      options: [
        { value: "Emma Wilson", label: "Emma Wilson" },
        { value: "Sophia Lee", label: "Sophia Lee" },
        { value: "James Taylor", label: "James Taylor" },
      ],
    },
    {
      name: "status",
      label: "Status",
      options: [
        { value: "Confirmed", label: "Confirmed" },
        { value: "Pending", label: "Pending" },
        { value: "Cancelled", label: "Cancelled" },
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
      <Header title="Beauty Salon" subtitle="Manage salon services and appointment slots" user={user} />

      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <Scissors className="w-6 h-6 text-pink-500 mr-2" />
          <h2 className="text-xl font-bold text-gray-800">Salon Appointments</h2>
        </div>
        <Link to="/admin/beauty-salon/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-1" />
          Add New Appointment
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          <p className="mt-2 text-gray-500">Loading appointments...</p>
        </div>
      ) : (
        <DataTable
          data={appointments}
          columns={columns}
          onDelete={handleDelete}
          editPath="/admin/beauty-salon/edit"
          searchPlaceholder="Search appointments..."
          filters={filters}
        />
      )}
    </div>
  )
}

export default BeautySalon
