import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Everlast Insurance Broker</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/cost-calculator" className="hover:text-blue-200">
                  Cost Calculator
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-blue-700 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Insurance Solutions</h2>
            <p className="mb-8">Protecting what matters most to you</p>
            <Button variant="secondary" size="lg">
              Get a Quote
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Motor Vehicle",
                "Building Insurance",
                "Business Insurance",
                "Personal Insurance",
                "Marine Insurance",
                "Liability Insurance",
              ].map((service) => (
                <Card key={service} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-blue-700">{service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Comprehensive coverage tailored to your needs.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Contact Us</h2>
            <div className="flex flex-col md:flex-row justify-around items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <PhoneIcon className="text-blue-700 mr-2" />
                <span>031 262 9111 /51 /55</span>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                <MailIcon className="text-blue-700 mr-2" />
                <a href="mailto:avilash@everlast.co.za" className="text-blue-600 hover:underline">
                  avilash@everlast.co.za
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="text-blue-700 mr-2" />
                <span>11 Stanhope Crescent, Westville North, Durban, 3629</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Everlast Insurance Broker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

