import { CarCard } from "@/components/car-card"
import { CategoryFilters } from "@/components/category-filters"
import { SearchForm } from "@/components/search-form"

const cars = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    image: "/cars/koenigsegg.png",
    capacity: "2 People",
    transmission: "Manual",
    fuel: "90L",
    price: 99.00,
    originalPrice: 100.00
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    image: "/Images/nissan-gtr.png",
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    price: 80.00,
    originalPrice: 100.00,
    liked: false
  },
  // Add more cars...
]

export default function CarRent() {
  return (
    <div className="container grid gap-6 px-4 py-6 md:grid-cols-[240px,1fr] lg:grid-cols-[280px,1fr]">
      <aside className="space-y-6">
        <CategoryFilters />
      </aside>

      <main className="space-y-6">
        <SearchForm />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </main>
    </div>
  )
}
