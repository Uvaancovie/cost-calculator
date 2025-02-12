import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"

const services = [
  "Motor Vehicle",
  "Building Insurance",
  "Business Insurance",
  "Heavy Commercial Vehicles",
  "Personal Insurance",
  "Public Transport Vehicles",
  "Marine Insurance",
  "Specialist in Liability Insurance",
]

const underwriters = [
  "New National Assurance Company Ltd",
  "Zurich Insurance Company",
  "Santam",
  "Absa Insurance Company",
  "Execuline",
  "FSP Solutions",
]

export default function Services() {
  return (
    <div className="min-h-screen bg-blue-50">
     
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Services</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Comprehensive coverage and expert advice tailored to your needs.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Underwriters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {underwriters.map((underwriter, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{underwriter}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">Our Technology</h2>
          <Card className="bg-white shadow-lg">
            <CardContent className="prose max-w-none">
              <p className="mt-4">
                The Everlast Insurance Broker utilizes a comprehensive software package to manage the client base. The
                BROKER system provides accurate statistics in respect of claims, underwriting and accounting.
              </p>
              <p className="mt-4">This advanced technology allows us to:</p>
              <ul className="list-disc pl-5">
                <li>Efficiently manage client information</li>
                <li>Accurately track and process claims</li>
                <li>Provide detailed underwriting analysis</li>
                <li>Maintain precise accounting records</li>
              </ul>
              <p className="mt-4">
                Our commitment to using cutting-edge technology ensures that we can provide our clients with the most
                efficient, accurate, and reliable service in the insurance industry.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <PhoneIcon className="mr-2" />
              <span>031 262 9111 /51 /55</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MailIcon className="mr-2" />
              <a href="mailto:avilash@everlast.co.za" className="hover:underline">
                avilash@everlast.co.za
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPinIcon className="mr-2" />
              <span>11 Stanhope Crescent, Westville North, Durban, 3629</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Everlast Insurance Brokers cc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

