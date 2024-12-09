import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroBanner } from "@/components/hero-banner"
import { PickDropForm } from "@/components/pick-drop-form"
import { CarCard } from "@/components/car-card"
import { popularCars, recommendedCars } from "@/lib/cars"

export default function Home() {
  return (
    <div className="container space-y-8 px-4 py-8">
      <div className="grid gap-4 md:grid-cols-2">
        <HeroBanner
          title="The Best Platform for Car Rental"
          description="Ease of doing a car rental safely and reliably. Of course at a low price."
          image="/cars/sports-car-white.png"
          variant="primary"
        />
        <HeroBanner
          title="Easy way to rent a car at a low price"
          description="Providing cheap car rental services and safe and comfortable facilities."
          image="/cars/nissan-gtr-silver.png"
          variant="secondary"
        />
      </div>

      <PickDropForm className="bg-white shadow-md" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Popular Cars</h2>
          <Button variant="link" className="text-blue-600" asChild>
            <Link href="/car-rent">View All</Link>
          </Button>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recommendation Cars</h2>
          <Button variant="link" className="text-blue-600" asChild>
            <Link href="/car-rent">View All</Link>
          </Button>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recommendedCars.slice(0, 8).map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          variant="outline" 
          size="lg" 
          className="bg-blue-50 text-blue-600 hover:bg-blue-100"
          asChild
        >
          <Link href="/car-rent">Show more cars</Link>
        </Button>
      </div>
    </div>
  )
}

