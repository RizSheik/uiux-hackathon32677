import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HelpPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Help & Center</h1>
      <Card>
        <CardHeader>
          <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add FAQ list or help content here */}
          <p>Frequently asked questions and help content will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

