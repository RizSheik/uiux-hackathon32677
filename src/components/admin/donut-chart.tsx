"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Sport Car', value: 17439 },
  { name: 'SUV', value: 9478 },
  { name: 'Coupe', value: 18197 },
  { name: 'Hatchback', value: 12510 },
  { name: 'MPV', value: 14406 },
]

const COLORS = ['#2563eb', '#1e40af', '#3b82f6', '#60a5fa', '#93c5fd']

export function DonutChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]}
              stroke="none"
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

