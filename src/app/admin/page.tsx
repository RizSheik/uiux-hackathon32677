"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DonutChart } from "@/components/admin/donut-chart"
import { RecentTransactions } from "@/components/admin/recent-transactions"
import { RentalMap } from "@/components/admin/rental-map"
import { RentalStats } from "@/components/rental-stats"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Details Rental</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.5fr,1fr]">
        <Card className="bg-white">
          <CardContent className="p-6">
            <RentalMap />
            <div className="mt-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/cars/nissan-gt-r.png"
                  alt="Nissan GT-R"
                  width={120}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">Nissan GT-R</h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
                <div className="ml-auto text-sm text-gray-500">#9761</div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Pick - Up</h4>
                  <div className="mt-2 space-y-1 text-sm text-gray-500">
                    <p>Locations: Kota Semarang</p>
                    <p>Date: 20 July 2022</p>
                    <p>Time: 07:00</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Drop - Off</h4>
                  <div className="mt-2 space-y-1 text-sm text-gray-500">
                    <p>Locations: Kota Semarang</p>
                    <p>Date: 21 July 2022</p>
                    <p>Time: 01:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm text-gray-500">Total Rental Price</h4>
                    <p className="text-xs text-gray-400">Overall price and includes rental discount</p>
                  </div>
                  <div className="text-2xl font-bold">$80.00</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Top 5 Car Rental</h2>
              <div className="text-center">
                <div className="text-3xl font-bold">72,030</div>
                <div className="text-sm text-gray-500">Rental Car</div>
              </div>
              <DonutChart />
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-600" />
                    <span className="text-sm">Sport Car</span>
                  </div>
                  <span className="text-sm font-medium">17,439</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-800" />
                    <span className="text-sm">SUV</span>
                  </div>
                  <span className="text-sm font-medium">9,478</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-700" />
                    <span className="text-sm">Coupe</span>
                  </div>
                  <span className="text-sm font-medium">18,197</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                    <span className="text-sm">Hatchback</span>
                  </div>
                  <span className="text-sm font-medium">12,510</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-300" />
                    <span className="text-sm">MPV</span>
                  </div>
                  <span className="text-sm font-medium">14,406</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Recent Transaction</h2>
                <Button variant="link" className="text-blue-600">View All</Button>
              </div>
              <RecentTransactions />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

