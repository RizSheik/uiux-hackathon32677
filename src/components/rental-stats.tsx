import { Button } from "@/components/ui/button"
import { MoreVertical } from 'lucide-react'

export function RentalStats() {
  const stats = [
    { label: "Sport Car", value: 17439, color: "bg-blue-600" },
    { label: "SUV", value: 9478, color: "bg-indigo-600" },
    { label: "Coupe", value: 18197, color: "bg-purple-600" },
    { label: "Hatchback", value: 12510, color: "bg-pink-600" },
    { label: "MPV", value: 14406, color: "bg-orange-600" },
  ]

  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Top 5 Car Rental</h3>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-center">
          <div className="relative h-48 w-48">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="20" />
              {stats.map((stat, index) => {
                const offset = index * 20
                const dash = (stat.value / 72030) * 251.2
                return (
                  <circle
                    key={stat.label}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={stat.color.replace('bg-', 'text-')}
                    strokeWidth="20"
                    strokeDasharray={`${dash} ${251.2 - dash}`}
                    strokeDashoffset={-offset}
                    transform="rotate(-90 50 50)"
                  />
                )
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">72,030</div>
                <div className="text-sm text-gray-500">Rental Car</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${stat.color}`} />
                <span className="text-sm">{stat.label}</span>
              </div>
              <span className="text-sm font-medium">{stat.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

