import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Hammer, Ruler } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Placeholder for hero image - will be replaced with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Rooted In Craft.
            <span className="block text-baby-blue-400">Building Your Future.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            KS Concepts creates custom homes distinguished by timeless design, meticulous craftsmanship, and uncompromising quality.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-baby-blue-500 hover:bg-baby-blue-600 text-white">
              View Our Projects
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Excellence in Every Detail
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a dedication to precision and efficiency, we bring sophistication and lasting value to every home we build. 
            Our commitment to quality craftsmanship and thoughtful design ensures that your custom home 
            stands as a lasting reflection of excellence.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Home className="w-12 h-12 text-baby-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Custom Homes</h3>
              <p className="text-gray-600">
                Bringing your vision to life with personalized design and superior craftsmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Ruler className="w-12 h-12 text-baby-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Land Development</h3>
              <p className="text-gray-600">
                Full-service land surveying and development to maximize your property&apos;s potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Hammer className="w-12 h-12 text-baby-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Complete Construction</h3>
              <p className="text-gray-600">
                From foundation to finishing touches, we handle every aspect of your build.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [Cedar Hill Project Image]
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-baby-blue-600 transition-colors">
                Cedar Hill Custom Residence
              </h3>
              <p className="text-gray-600 mb-2">
                Modern luxury home featuring open concept design and sustainable materials.
              </p>
              <p className="text-sm text-baby-blue-600 font-medium">
                Expected Completion: Spring 2025
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [Grand Prairie Project Image]
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-baby-blue-600 transition-colors">
                Grand Prairie Estate Home
              </h3>
              <p className="text-gray-600 mb-2">
                Elegant traditional design with modern amenities and custom woodworking throughout.
              </p>
              <p className="text-sm text-baby-blue-600 font-medium">
                Expected Completion: Summer 2025
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-baby-blue-500 hover:bg-baby-blue-600 text-white">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let&apos;s discuss how we can bring your vision to life with uncompromising quality and attention to detail.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-baby-blue-500 hover:bg-baby-blue-600 text-white">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-14 h-14 flex items-center justify-center">
                  <Image 
                    src="/logo.png" 
                    alt="KS Concepts Logo" 
                    width={56} 
                    height={56}
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-xl text-gray-800">Concepts</span>
              </div>
              <p className="text-gray-600 text-sm">
                Custom home builder serving the DFW area with precision and quality.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/projects" className="hover:text-baby-blue-600">Projects</Link></li>
                <li><Link href="/services" className="hover:text-baby-blue-600">Services</Link></li>
                <li><Link href="/about" className="hover:text-baby-blue-600">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Custom Homes</li>
                <li>Land Development</li>
                <li>Renovations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>ksconceptsco@gmail.com</li>
                <li>817-247-6740</li>
                <li>DFW Area, Texas</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 KS Concepts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}