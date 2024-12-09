import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InboxPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Inbox</h1>
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add message list or chat component here */}
          <p>Your messages will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

