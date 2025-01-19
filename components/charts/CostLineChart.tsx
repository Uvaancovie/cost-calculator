'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  data: {
    date: string
    total_cost: number
  }[]
}

export default function CostLineChart({ data }: Props) {
  // Transform raw data into chart-friendly arrays
  const labels = data.map((item) => new Date(item.date).toLocaleDateString())
  const costs = data.map((item) => item.total_cost)

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Cost',
        data: costs,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }

  return <Line data={chartData} options={options} />
}
