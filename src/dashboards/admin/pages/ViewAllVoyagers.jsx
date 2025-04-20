import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import Header from "../components/Header"
import DataTable from "../components/DataTable"

const ViewAllVoyagers = () => {
  const [voyagers, setVoyagers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          name: "John Smith",
          cabin: "A-101",
          package: "Premium",
          checkIn: "2025-04-10",
          checkOut: "2025-04-17",
          status: "Active",
        },
        {
          id: 2,
          name: "Emma Johnson",
          cabin: "B-205",
          package: "Deluxe",
          checkIn: "2025-04-10",
          checkOut: "2025-04-17",
          status: "Active",
        },
        {
          id: 3,
          name: "Michael Brown",
          cabin: "A-110",
          package: "Standard",
          checkIn: "2025-04-10",
          checkOut: "2025-04-17",
          status: "Active",
        },
        {
          id: 4,
          name: "Sophia Williams",
          cabin: "C-315",
          package: "Premium",
          checkIn: "2025-04-12",
          checkOut: "2025-04-19",
          status: "Pending",
        },
        {
          id: 5,
          name: "James Davis",
          cabin: "B-220",
          package: "Deluxe",
          checkIn: "2025-04-12",
          checkOut: "2025-04-19",
          status: "Active",
        },
        {
          id: 6,
          name: "Olivia Miller",
          cabin: "A-115",
          package: "Standard",
          checkIn: "2025-04-12",
          checkOut: "2025-04-19",
          status: "Active",
        },
        {
          id: 7,
          name: "Robert Wilson",
          cabin: "C-320",
          package: "Premium",
          checkIn: "2025-04-15",
          checkOut: "2025-04-22",
          status: "Pending",
        },
        {
          id: 8,
          name: "Ava Moore",
          cabin: "B-225",
          package: "Deluxe",
          checkIn: "2025-04-15",
          checkOut: "2025-04-22",
          status: "Cancelled",
        },
      ]
      setVoyagers(mockData)
      setLoading(false)
    }, 500)
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this voyager?")) {
      setVoyagers(voyagers.filter((voyager) => voyager.id !== id))
    }
  }

  const columns = [
    { key: "name", header: "Voyager Name" },
    { key: "cabin", header: "Cabin" },
    { key: "package", header: "Package" },
    { key: "checkIn", header: "Check In" },
    { key: "checkOut", header: "Check Out" },
    {
      key: "status",
      header: "Status",
      render: (voyager) => {
        const statusClass =
          voyager.status === "Active"
            ? "badge-success"
            : voyager.status === "Pending"
              ? "badge-warning"
              : "badge-danger"

        return <span className={`badge ${statusClass}`}>{voyager.status}</span>
      },
    },
  ]

  const filters = [
    {
      name: "package",
      label: "Package",
      options: [
        { value: "Standard", label: "Standard" },
        { value: "Deluxe", label: "Deluxe" },
        { value: "Premium", label: "Premium" },
      ],
    },
    {
      name: "status",
      label: "Status",
      options: [
        { value: "Active", label: "Active" },
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
      <Header title="All Voyagers" subtitle="Manage passengers on your cruise" user={user} />

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Registered Voyagers</h2>
        <Link to="/admin/voyagers/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-1" />
          Register New Voyager
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          <p className="mt-2 text-gray-500">Loading voyagers...</p>
        </div>
      ) : (
        <DataTable
          data={voyagers}
          columns={columns}
          onDelete={handleDelete}
          editPath="/admin/voyagers/edit"
          searchPlaceholder="Search voyagers..."
          filters={filters}
        />
      )}
    </div>
  )
}

export default ViewAllVoyagers
