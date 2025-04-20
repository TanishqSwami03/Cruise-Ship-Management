import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, User, Mail, Phone, Home, Package, Calendar, MessageSquare, UserCheck, UserRoundPen} from "lucide-react"
import Header from "../components/Header"

const AddEditVoyager = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cabin: "",
    package: "",
    checkIn: "",
    checkOut: "",
    status: "Active",
    specialRequests: "",
  })

  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (isEditing) {
      // Simulate API call to get voyager data
      setTimeout(() => {
        const mockVoyager = {
          id: Number.parseInt(id),
          name: "John Smith",
          email: "john.smith@example.com",
          phone: "(555) 123-4567",
          cabin: "A-101",
          package: "Premium",
          checkIn: "2025-04-10",
          checkOut: "2025-04-17",
          status: "Active",
          specialRequests: "Allergic to shellfish. Requires early check-in.",
        }
        setFormData(mockVoyager)
        setLoading(false)
      }, 500)
    }
  }, [id, isEditing])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaving(true)

    // Simulate API call to save data
    setTimeout(() => {
      setSaving(false)
      // Show success message
      alert(`${isEditing ? "Updated" : "Registered"} voyager successfully!`)
      // Redirect back to voyagers list
      navigate("/voyagers")
    }, 800)
  }

  const user = {
    name: "Admin User",
    role: "System Administrator",
    avatar: "A",
  }

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
        <p className="mt-2 text-gray-500">Loading voyager data...</p>
      </div>
    )
  }

  return (
    <div>
      <Header
        title={isEditing ? "Edit Voyager" : "Register New Voyager"}
        subtitle={isEditing ? "Update passenger details" : "Add a new passenger to the system"}
        user={user}
      />

      <button onClick={() => navigate("/admin/voyagers")} className="flex items-center btn-primary mb-6">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Voyagers
      </button>

      <form onSubmit={handleSubmit}>

        {/* Personal Information */}
        <div className="form-section">
          <h3 className="form-section-title flex items-center">
            <User className="w-5 h-5 mr-2 text-pink-500" />
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <UserRoundPen className="w-4 h-4 mr-1 text-gray-500" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter full name"
                required
              />
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label htmlFor="email" className="form-label flex items-center">
                <Mail className="w-4 h-4 mr-1 text-gray-500" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="email@example.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label flex items-center">
                <Phone className="w-4 h-4 mr-1 text-gray-500" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="(555) 123-4567"
                required
              />
            </div>

            {/* Cabin Number */}
            <div className="form-group">
              <label htmlFor="cabin" className="form-label flex items-center">
                <Home className="w-4 h-4 mr-1 text-gray-500" />
                Cabin Number
              </label>
              <input
                type="text"
                id="cabin"
                name="cabin"
                value={formData.cabin}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., A-101"
                required
              />
            </div>

          </div>
        </div>

        {/* Booking Details */}
        <div className="form-section">
          <h3 className="form-section-title flex items-center">
            <Package className="w-5 h-5 mr-2 text-pink-500" />
            Booking Details
          </h3>

          {/* Package */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="form-group">
              <label htmlFor="package" className="form-label">
                <Package className="w-4 h-4 mr-1 text-gray-500" />
                Package
              </label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select a package</option>
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status" className="form-label flex items-center">
                <UserCheck className="w-4 h-4 mr-1 text-gray-500" />
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

            {/* Check-in Date */}
            <div className="form-group">
              <label htmlFor="checkIn" className="form-label flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                Check In Date
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Check-out Date */}
            <div className="form-group">
              <label htmlFor="checkOut" className="form-label flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                Check Out Date
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

          </div>
        </div>

        {/* <div className="form-section">
          <h3 className="form-section-title flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-pink-500" />
            Additional Information
          </h3>

          <div className="form-group">
            <label htmlFor="specialRequests" className="form-label">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Any special requirements or notes..."
              rows="4"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              Include any dietary restrictions, accessibility needs, or other special requirements.
            </p>
          </div>
        </div> */}

        <div className="flex justify-end gap-4 mt-6">
          <button type="button" onClick={() => navigate("/admin/voyagers")} className="btn-secondary" disabled={saving}>
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? (
              <>
                <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                {isEditing ? "Updating..." : "Register"}
              </>
            ) : isEditing ? (
              "Update Voyager"
            ) : (
              "Register Voyager"
            )}
          </button>
        </div>

      </form>
    </div>
  )
}

export default AddEditVoyager
