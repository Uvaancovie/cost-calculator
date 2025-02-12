import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-blue-50">
   

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">About Us</h1>

        <div className="grid gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Company Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Everlast Insurance Brokers cc is an independent Insurance Brokerage delivering comprehensive insurance
                advice and service offerings to a wide client base. We are a well-established brokerage with more than
                20 years of experience, currently managing a portfolio in excess of 400 short-term policies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our vision is to be a prime Insurance Brokerage in the markets we operate in, with our roots based
                nationally.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>We offer undivided customer service to every client.</li>
                <li>
                  We make it our responsibility to ensure that the best advice is given to each client, thereby
                  maximizing their profitability.
                </li>
                <li>We are a brokerage that is very focused on our clients needs.</li>
                <li>We are confident that we are a customer-driven brokerage.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">Black Economic Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The business is, by virtue of ownership, 100% compliant with BEE. Our business partners also comply with
                BEE standards.
              </p>
            </CardContent>
          </Card>
        </div>
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

