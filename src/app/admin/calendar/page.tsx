import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CalendarPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Calendar</h1>
      <Card>
        <CardHeader>
          <CardTitle>Events</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add calendar component here */}
          <p>Your calendar events will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

