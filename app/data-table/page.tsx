// app/data-table/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { OutputsDataTable } from '@/components/outputs-data-table'
import { OutputItem } from '@/app/outputs/columns'

export default function DataTablePage() {
  const [data, setData] = useState<OutputItem[]>([])

  // Fetch from your /api/outputs route
  useEffect(() => {
    fetch('/api/outputs')
      .then((res) => res.json())
      .then((rows) => {
        // If needed, map rows to match the OutputItem structure
        const mapped = rows.map((row: Omit<OutputItem, ''>) => ({
          ...row,
          date: new Date(row.date).toISOString(),  // or keep as .toString()
        }))
        setData(mapped)
      })
      .catch(console.error)
  }, [])

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Outputs Data Table</h1>
      <OutputsDataTable data={data} />
    </main>
  )
}
