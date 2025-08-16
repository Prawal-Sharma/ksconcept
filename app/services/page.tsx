import { 
  Home, Ruler, HardHat, Zap, Droplets, 
  Package, DoorOpen, Paintbrush, Grid3x3, CheckCircle 
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Custom Home Builder",
      description: "From concept to completion, we build custom homes tailored to your vision and lifestyle.",
      features: ["Design consultation", "Permit acquisition", "Project management", "Quality assurance"]
    },
    {
      icon: Ruler,
      title: "Land Development",
      description: "Complete land preparation and site development to maximize your property's potential.",
      features: ["Site evaluation", "Grading & excavation", "Utility planning", "Lot preparation"]
    },
    {
      icon: Ruler,
      title: "Full Land Surveying",
      description: "Professional surveying services to ensure accurate property boundaries and elevations.",
      features: ["Boundary surveys", "Topographic surveys", "Construction staking", "Elevation certificates"]
    },
    {
      icon: HardHat,
      title: "Foundations",
      description: "Solid, engineered foundations built to last, ensuring the stability of your home.",
      features: ["Slab foundations", "Pier and beam", "Basement excavation", "Foundation repairs"]
    },
    {
      icon: Home,
      title: "Framing",
      description: "Expert structural framing using quality materials and precise construction techniques.",
      features: ["Wood framing", "Steel framing", "Roof trusses", "Structural modifications"]
    },
    {
      icon: Droplets,
      title: "Plumbing",
      description: "Complete plumbing installation and systems for optimal performance and efficiency.",
      features: ["Rough-in plumbing", "Fixture installation", "Water heaters", "Gas lines"]
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Safe, code-compliant electrical systems designed for modern living needs.",
      features: ["Complete wiring", "Panel upgrades", "Smart home prep", "Lighting design"]
    },
    {
      icon: Droplets,
      title: "Irrigation",
      description: "Efficient irrigation systems to maintain beautiful landscapes year-round.",
      features: ["Sprinkler systems", "Drip irrigation", "Smart controllers", "Drainage solutions"]
    },
    {
      icon: Package,
      title: "Cabinetry",
      description: "Custom cabinetry designed and built to maximize storage and enhance aesthetics.",
      features: ["Kitchen cabinets", "Bathroom vanities", "Built-in storage", "Custom millwork"]
    },
    {
      icon: DoorOpen,
      title: "Custom Doors",
      description: "Unique, handcrafted doors that make a statement and enhance your home's character.",
      features: ["Entry doors", "Interior doors", "Barn doors", "French doors"]
    },
    {
      icon: Home,
      title: "Trim",
      description: "Detailed trim work that adds elegance and refinement to every room.",
      features: ["Crown molding", "Baseboards", "Window casings", "Decorative millwork"]
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Professional painting services with attention to detail and premium finishes.",
      features: ["Interior painting", "Exterior painting", "Cabinet refinishing", "Specialty finishes"]
    },
    {
      icon: Home,
      title: "Flooring",
      description: "Quality flooring installation for durability, beauty, and comfort.",
      features: ["Hardwood floors", "Tile installation", "Luxury vinyl", "Carpet installation"]
    },
    {
      icon: Grid3x3,
      title: "Tiles",
      description: "Expert tile work for bathrooms, kitchens, and decorative applications.",
      features: ["Bathroom tiles", "Kitchen backsplashes", "Floor tiles", "Decorative accents"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Comprehensive construction services from foundation to finish. 
            We handle every aspect of your custom home build with expertise and precision.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-baby-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-baby-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-baby-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-baby-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-gray-600">Understanding your vision and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-baby-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <p className="text-sm text-gray-600">Detailed design and project planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-baby-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Construction</h3>
                <p className="text-sm text-gray-600">Expert execution with regular updates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-baby-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Completion</h3>
                <p className="text-sm text-gray-600">Final walkthrough and handover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose KS Concepts?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-baby-blue-600">15+ Years Experience</h3>
                <p className="text-gray-600">Proven track record in the DFW area</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-baby-blue-600">Full-Service Builder</h3>
                <p className="text-gray-600">One team for your entire project</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-baby-blue-600">Quality Guaranteed</h3>
                <p className="text-gray-600">Commitment to excellence in every detail</p>
              </div>
            </div>
            <a 
              href="/contact" 
              className="inline-block bg-baby-blue-500 hover:bg-baby-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}