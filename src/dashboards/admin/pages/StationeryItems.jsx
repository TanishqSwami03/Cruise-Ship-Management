import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import Header from "../components/Header"
import DataTable from "../components/DataTable"
import "../index.css"

const StationeryItems = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          name: "Ballpoint Pen",
          category: "Writing",
          price: 1.99,
          stock: 150,
          supplier: "Office Supplies Inc.",
          reorderLevel: 30,
        },
        {
          id: 2,
          name: "Notebook",
          category: "Paper",
          price: 4.99,
          stock: 75,
          supplier: "Paper Products Ltd.",
          reorderLevel: 20,
        },
        {
          id: 3,
          name: "Sticky Notes",
          category: "Paper",
          price: 2.49,
          stock: 100,
          supplier: "Office Supplies Inc.",
          reorderLevel: 25,
        },
        {
          id: 4,
          name: "Highlighter",
          category: "Writing",
          price: 1.79,
          stock: 85,
          supplier: "Stationery World",
          reorderLevel: 20,
        },
        {
          id: 5,
          name: "Stapler",
          category: "Office Equipment",
          price: 8.99,
          stock: 40,
          supplier: "Office Essentials",
          reorderLevel: 10,
        },
        {
          id: 6,
          name: "Scissors",
          category: "Office Equipment",
          price: 5.99,
          stock: 35,
          supplier: "Stationery World",
          reorderLevel: 10,
        },
        {
          id: 7,
          name: "Printer Paper",
          category: "Paper",
          price: 12.99,
          stock: 50,
          supplier: "Paper Products Ltd.",
          reorderLevel: 15,
        },
        {
          id: 8,
          name: "Binder Clips",
          category: "Office Supplies",
          price: 3.49,
          stock: 120,
          supplier: "Office Essentials",
          reorderLevel: 30,
        },
      ]
      setItems(mockData)
      setLoading(false)
    }, 500)
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const columns = [
    { key: "name", header: "Item Name" },
    { key: "category", header: "Category" },
    {
      key: "price",
      header: "Price",
      render: (item) => `$${item.price.toFixed(2)}`,
    },
    {
      key: "stock",
      header: "Stock",
      render: (item) => {
        const stockStatus =
          item.stock <= item.reorderLevel
            ? "badge-danger"
            : item.stock <= item.reorderLevel * 2
              ? "badge-warning"
              : "badge-success"
        return <span className={`badge ${stockStatus}`}>{item.stock}</span>
      },
    },
    { key: "supplier", header: "Supplier" },
    { key: "reorderLevel", header: "Reorder Level" },
  ]

  const filters = [
    {
      name: "category",
      label: "Category",
      options: [
        { value: "Writing", label: "Writing" },
        { value: "Paper", label: "Paper" },
        { value: "Office Equipment", label: "Office Equipment" },
        { value: "Office Supplies", label: "Office Supplies" },
      ],
    },
    {
      name: "supplier",
      label: "Supplier",
      options: [
        { value: "Office Supplies Inc.", label: "Office Supplies Inc." },
        { value: "Paper Products Ltd.", label: "Paper Products Ltd." },
        { value: "Stationery World", label: "Stationery World" },
        { value: "Office Essentials", label: "Office Essentials" },
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
      <Header title="Stationery Items" subtitle="Manage stationery products for your cruise" user={user} />

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">All Stationery Items</h2>
        <Link to="/admin/stationery/add" className="btn-primary flex items-center">
          <Plus className="w-4 h-4 mr-1" />
          Add New Item
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          <p className="mt-2 text-gray-500">Loading items...</p>
        </div>
      ) : (
        <DataTable
          data={items}
          columns={columns}
          onDelete={handleDelete}
          editPath="/admin/stationery/edit"
          searchPlaceholder="Search stationery items..."
          filters={filters}
        />
      )}
    </div>
  )
}

export default StationeryItems
