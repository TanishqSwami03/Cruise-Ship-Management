"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import StatusBadge from "../components/StatusBadge"

// Sample data for stationery orders
const initialOrders = [
  {
    id: "#1001",
    voyagerName: "Emma Johnson",
    initials: "EJ",
    orderDate: "6/15/2023",
    orderTime: "8:30:00 AM",
    cabinNumber: "A204",
    items: ["2x Notebooks", "5x Ballpoint Pens", "3x Highlighters"],
    type: "Standard",
    status: "Pending",
  },
  {
    id: "#1002",
    voyagerName: "Michael Smith",
    initials: "MS",
    orderDate: "6/15/2023",
    orderTime: "9:15:00 AM",
    cabinNumber: "B118",
    items: ["1x Leather Journal", "1x Fountain Pen", "2x Ink Cartridges"],
    type: "Premium",
    status: "Preparing",
  },
  {
    id: "#1003",
    voyagerName: "Sophia Garcia",
    initials: "SG",
    orderDate: "6/15/2023",
    orderTime: "10:45:00 AM",
    cabinNumber: "A315",
    items: ["1x Sketchbook", "1x Drawing Pencil Set", "1x Eraser"],
    type: "Standard",
    status: "Prepared",
  },
  {
    id: "#1004",
    voyagerName: "James Wilson",
    initials: "JW",
    orderDate: "6/15/2023",
    orderTime: "11:20:00 AM",
    cabinNumber: "C102",
    items: ["2x Sticky Note Pads", "2x Highlighters", "1x Stapler"],
    type: "Standard",
    status: "Pending",
  },
  {
    id: "#1005",
    voyagerName: "Olivia Brown",
    initials: "OB",
    orderDate: "6/15/2023",
    orderTime: "12:00:00 PM",
    cabinNumber: "B220",
    items: ["1x Planner", "1x Colored Pens Set"],
    type: "Premium",
    status: "Cancelled",
  },
  {
    id: "#1006",
    voyagerName: "William Davis",
    initials: "WD",
    orderDate: "6/15/2023",
    orderTime: "1:30:00 PM",
    cabinNumber: "A405",
    items: ["2x Legal Pads", "1x Business Card Holder", "5x Gel Pens"],
    type: "Standard",
    status: "Pending",
  },
]

function StationeryOrders() {
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All Statuses")
  const [typeFilter, setTypeFilter] = useState("All Types")

  // Filter orders based on search term, status filter, and type filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.voyagerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
      order.cabinNumber.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "All Statuses" || order.status === statusFilter
    const matchesType = typeFilter === "All Types" || order.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const handleStartPreparing = (orderId) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "Preparing" } : order)))
  }

  const handleMarkPrepared = (orderId) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "Prepared" } : order)))
  }

  const handleCancel = (orderId) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "Cancelled" } : order)))
  }

  const renderActionButtons = (order) => {
    switch (order.status.toLowerCase()) {
      case "pending":
        return (
          <div className="flex space-x-4">
            <button
              className="text-blue-600 hover:underline text-sm font-medium"
              onClick={() => handleStartPreparing(order.id)}
            >
              Start Preparing
            </button>
            <button className="text-red-600 hover:underline text-sm font-medium" onClick={() => handleCancel(order.id)}>
              Cancel
            </button>
          </div>
        )
      case "preparing":
        return (
          <div className="flex space-x-4">
            <button
              className="text-green-600 hover:underline text-sm font-medium"
              onClick={() => handleMarkPrepared(order.id)}
            >
              Mark Prepared
            </button>
            <button className="text-red-600 hover:underline text-sm font-medium" onClick={() => handleCancel(order.id)}>
              Cancel
            </button>
          </div>
        )
      case "prepared":
        return (
          <div className="flex space-x-4">
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-pink-500 mb-2">Supervisor Dashboard</h1>
        <p className="text-gray-600">Manage and supervise stationery orders for voyagers</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search orders by name or item..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Filter className="h-4 w-4 text-gray-400 mr-2" />
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All Statuses">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Preparing">Preparing</option>
              <option value="Prepared">Prepared</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-gray-400 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All Types">All Types</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Voyager
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Order Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Items
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{order.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium mr-3">
                      {order.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.voyagerName}</div>
                      <div className="text-sm text-gray-500">Cabin {order.cabinNumber}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{order.orderDate}</div>
                  <div className="text-sm text-gray-500">{order.orderTime}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {order.items.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-pink-500 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2V6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 2V6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 10H21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-gray-900">{order.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{renderActionButtons(order)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No orders found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default StationeryOrders
