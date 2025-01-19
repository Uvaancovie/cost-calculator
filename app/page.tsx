// app/page.tsx
import Carousel from '@/components/Carousel'

const images = [
  '/carousel/paneer-burger.jpg',
  '/carousel/soya-chicken-pies.jpg',
  '/carousel/soya-prawns.jpg',
  '/carousel/halloumi.jpg',
  '/carousel/mixed-veg-pickle.jpg',
  '/carousel/paneer.jpg',
]

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-green-800">
        Welcome to Enlightment Foods
      </h1>
      <p className="max-w-md text-center mb-6 text-gray-700">
        Explore our wide range of products, track costs, and manage 
        your production data efficiently.
      </p>

      {/* Carousel with product images */}
      <Carousel images={images} />
    </main>
  )
}
