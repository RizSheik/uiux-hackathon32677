"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Car, BarChart2, Wallet, MessageSquare, Calendar, Settings, HelpCircle, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  {
    title: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: Home,
      },
      {
        title: "Car Rent",
        href: "/admin/car-rent",
        icon: Car,
      },
      {
        title: "Insight",
        href: "/admin/insight",
        icon: BarChart2,
      },
      {
        title: "Reimburse",
        href: "/admin/reimburse",
        icon: Wallet,
      },
      {
        title: "Inbox",
        href: "/admin/inbox",
        icon: MessageSquare,
      },
      {
        title: "Calendar",
        href: "/admin/calendar",
        icon: Calendar,
      },
    ],
  },
  {
    title: "PREFERENCES",
    items: [
      {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
      },
      {
        title: "Help & Center",
        href: "/admin/help",
        icon: HelpCircle,
      },
    ],
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex w-64 flex-col border-r bg-[#F6F7F9] px-3 py-4">
      <div className="mb-8 px-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">MORENT</span>
        </Link>
      </div>

      <div className="flex-1 space-y-6">
        {sidebarItems.map((section, i) => (
          <div key={i} className="space-y-2">
            <h3 className="px-4 text-xs font-medium text-muted-foreground">
              {section.title}
            </h3>
            {section.items.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  pathname === item.href && "bg-[#3563E9] text-white"
                )}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        ))}
      </div>

      <Button variant="ghost" className="mt-6 w-full justify-start text-[#ED3F3F]">
        <LogOut className="mr-2 h-4 w-4" />
        Log Out
      </Button>
    </nav>
  )
}

