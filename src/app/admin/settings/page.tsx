import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Settings</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="admin@example.com" />
        </div>
        <div>
          <Label htmlFor="password">New Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  )
}

