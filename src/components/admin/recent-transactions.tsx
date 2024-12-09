"use client"

import Image from "next/image"

const transactions = [
  {
    id: 1,
    car: "Nissan GT-R",
    type: "Sport Car",
    date: "20 July",
    amount: 80.00,
    image: "/cars/nissan-gtr.png"
  },
  {
    id: 2,
    car: "Koegnigsegg",
    type: "Sport Car",
    date: "19 July",
    amount: 99.00,
    image: "/cars/Koenigsegg.png"
  },
  {
    id: 3,
    car: "Rolls-Royce",
    type: "Sport Car",
    date: "18 July",
    amount: 96.00,
    image: "/cars/rolls-royce.png"
  },
  {
    id: 4,
    car: "CR-V",
    type: "SUV",
    date: "17 July",
    amount: 80.00,
    image: "/cars/cr-v.png"
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={transaction.image}
              alt={transaction.car}
              width={64}
              height={64}
              className="rounded-lg"
            />
            <div>
              <div className="font-semibold">{transaction.car}</div>
              <div className="text-sm text-muted-foreground">{transaction.type}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold">${transaction.amount.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">{transaction.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

