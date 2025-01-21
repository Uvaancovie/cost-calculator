import Link from "next/link"
import { BarChart3, TrendingUp, DollarSign, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card"
import { OutputsBarChart } from "@/components/OutputBarChart"

export default function WelcomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 color-green">Welcome to Enlightment Foods Production Analytics</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Gain insights into your production costs and efficiency with our powerful analytics tools.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            title: "Cost Analysis",
            icon: DollarSign,
            description: "Track and analyze your production costs over time.",
          },
          { title: "Output Metrics", icon: Scale, description: "Monitor your daily production output and efficiency." },
          {
            title: "Trend Visualization",
            icon: TrendingUp,
            description: "Visualize production trends with interactive charts.",
          },
          {
            title: "Comprehensive Reports",
            icon: BarChart3,
            description: "Generate detailed reports for informed decision-making.",
          },
        ].map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sample Production Analysis</h2>
        <OutputsBarChart />
      </section>

      <section className="text-center">
        <Button asChild size="lg">
          <Link href="/production-analysis">View Full Production Analysis</Link>
        </Button>
      </section>
    </div>
  )
}

