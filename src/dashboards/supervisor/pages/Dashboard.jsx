import { Utensils, FileText, Film, Scissors, Activity, Users } from "lucide-react"
import ServiceCard from "../components/ServiceCard"

function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-pink-500 mb-2">Welcome to Your Voyager Dashboard</h1>
        <p className="text-gray-600">Enjoy your cruise experience with our premium services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Utensils className="w-6 h-6" />}
          title="Order Catering Items"
          description="Order delicious meals and snacks delivered to your cabin. Enjoy gourmet dining at your convenience."
          linkTo="/catering-orders"
        />

        <ServiceCard
          icon={<FileText className="w-6 h-6" />}
          title="Order Stationery Items"
          description="Request notebooks, pens, and other stationery items. Perfect for journaling your voyage."
          linkTo="/stationery-orders"
        />

        <ServiceCard
          icon={<Film className="w-6 h-6" />}
          title="Book Movie Tickets"
          description="Book tickets for the latest movies at our onboard cinema. Experience blockbusters at sea."
          linkTo="/movie-tickets"
        />

        <ServiceCard
          icon={<Scissors className="w-6 h-6" />}
          title="Book Beauty Salon"
          description="Schedule appointments for hair styling, manicures, and more. Look your best for special evenings."
          linkTo="/beauty-salon"
        />

        <ServiceCard
          icon={<Activity className="w-6 h-6" />}
          title="Book Fitness Center"
          description="Reserve time slots for gym sessions or fitness classes. Stay active while cruising."
          linkTo="/fitness-center"
        />

        <ServiceCard
          icon={<Users className="w-6 h-6" />}
          title="Book Party Hall"
          description="Book our party hall for celebrations and special events. Create unforgettable memories."
          linkTo="/party-hall"
        />
      </div>
    </div>
  )
}

export default Dashboard
