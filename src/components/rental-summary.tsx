import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface RentalSummaryProps {
  car: {
    name: string
    image: string
    rating: number
    reviewCount: number
  }
  rentalDetails: {
    subtotal: number
    tax: number
  }
}

export function RentalSummary({ car, rentalDetails }: RentalSummaryProps) {
  const total = rentalDetails.subtotal + rentalDetails.tax

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-4">
          <Image
            src={car.image}
            alt={car.name}
            width={120}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h3 className="font-semibold">{car.name}</h3>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < car.rating ? "fill-[#FBAD39] text-[#FBAD39]" : "fill-muted text-muted-foreground"}`}
                />
              ))}
              <span className="text-sm text-muted-foreground">{car.reviewCount}+ Reviewer</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${rentalDetails.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">${rentalDetails.tax.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Apply promo code</span>
              <Button variant="link" className="h-auto p-0 text-sm text-[#3563E9]">
                Apply now
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="space-y-1">
            <div className="text-lg font-bold">Total Rental Price</div>
            <div className="text-sm text-muted-foreground">Overall price and includes rental discount</div>
          </div>
          <div className="text-2xl font-bold">${total.toFixed(2)}</div>
        </div>
      </CardContent>
    </Card>
  )
}

