"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CarCardProps {
  id: number
  name: string
  type: string
  image?: string
  fuel: string
  transmission: string
  capacity: string
  price: number
  originalPrice?: number
  liked?: boolean
}

export function CarCard({ 
  id,
  name,
  type,
  image,
  fuel,
  transmission,
  capacity,
  price,
  originalPrice,
  liked
}: CarCardProps) {
  return (
    <Card className="overflow-hidden bg-white">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{type}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className={cn("hover:bg-gray-100", liked && "text-red-500")}
            >
              <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
            </Button>
          </div>
          
          <div className="relative aspect-[4/3]">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Image src="/icons/gas.svg" alt="Fuel" width={24} height={24} />
              {fuel}
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/transmission.svg" alt="Transmission" width={24} height={24} />
              {transmission}
            </div>
            <div className="flex items-center gap-6px">
              <Image src="/icons/capacity.svg" alt="Capacity" width={24} height={24} />
              {capacity}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-gray-900">
                {typeof price === 'number' 
                  ? `$${price.toFixed(2)}`
                  : 'Price unavailable'}
                <span className="text-sm font-normal">/day</span>
              </div>
              {typeof originalPrice === 'number' && (
                <div className="text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </div>
              )}
            </div>
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700" 
              asChild
              disabled={typeof price !== 'number'}
            >
              <Link href={`/car-rent/${id}`}>
                {typeof price === 'number' ? 'Rent Now' : 'Unavailable'}
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

