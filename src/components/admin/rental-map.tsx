"use client"
import Image from "next/image"

export function RentalMap() {
  return (
    <div className="h-[400px] w-full rounded-lg bg-muted">
      <div className="flex h-full items-center justify-center text-muted-foreground">
        <Image src="/cars/Maps.png" alt="Map View" width={486} height={272} />
      </div>
    </div>
  )
}
