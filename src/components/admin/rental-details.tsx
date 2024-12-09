"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export function RentalDetails() {
  return (
    <Card className="mt-4 p-6">
      <div className="flex items-start gap-6">
        <div className="relative h-32 w-48 overflow-hidden rounded-lg bg-muted">
          <Image
            src="/cars/nissan-gtr.png"
            alt="Nissan GT-R"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Nissan GT-R</h3>
              <p className="text-muted-foreground">Sport Car</p>
            </div>
            <div className="text-sm text-muted-foreground">#9761</div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Pick-Up
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <Select defaultValue="kota-semarang">
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kota-semarang">Kota Semarang</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="20-july-2022">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20-july-2022">20 July 2022</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="07-00">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="07-00">07:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">
                Drop-Off
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <Select defaultValue="kota-semarang">
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kota-semarang">Kota Semarang</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="21-july-2022">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="21-july-2022">21 July 2022</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="01-00">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01-00">01:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Total Rental Price</div>
              <div className="text-2xl font-bold">$80.00</div>
              <div className="text-xs text-muted-foreground">Overall price and includes rental discount</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

