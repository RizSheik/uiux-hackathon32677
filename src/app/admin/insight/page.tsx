import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsightPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Insights</h1>
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add charts or data visualization components here */}
          <p>Insight data will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

