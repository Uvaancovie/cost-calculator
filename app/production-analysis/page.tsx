import { OutputsBarChart } from "@/components/OutputBarChart"

export default function ProductionAnalysisPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Production Analysis</h1>
      <OutputsBarChart />
    </div>
  )
}
