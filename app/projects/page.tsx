import { CalendarDays, MapPin } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Cedar Hill Custom Residence",
      location: "Cedar Hill, TX",
      type: "Residential",
      status: "In Progress",
      expectedCompletion: "Spring 2025",
      description: "A modern luxury home featuring open concept living spaces, sustainable materials, and state-of-the-art smart home technology. This 4,500 sq ft residence showcases our commitment to blending contemporary design with functional elegance.",
      features: [
        "Open concept floor plan",
        "Sustainable building materials",
        "Smart home integration",
        "Custom cabinetry throughout",
        "Energy-efficient systems"
      ]
    },
    {
      id: 2,
      title: "Grand Prairie Estate Home",
      location: "Grand Prairie, TX",
      type: "Residential",
      status: "In Progress",
      expectedCompletion: "Summer 2025",
      description: "An elegant traditional estate home combining classic architectural elements with modern amenities. This 5,200 sq ft property features extensive custom woodworking and premium finishes throughout.",
      features: [
        "Traditional architectural design",
        "Custom millwork and trim",
        "Gourmet kitchen with professional appliances",
        "Master suite with spa bathroom",
        "Three-car garage with workshop"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Explore our current and upcoming custom home projects, each showcasing our dedication to quality craftsmanship and innovative design.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      [Project Image Placeholder]
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-baby-blue-100 text-baby-blue-700 rounded-full text-sm font-medium mb-3">
                      {project.status}
                    </span>
                    <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>Completion: {project.expectedCompletion}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h3 className="font-semibold mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-baby-blue-500 mt-1">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">More Projects Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We&apos;re constantly working on new custom homes throughout the DFW area. 
            Check back regularly to see our latest projects and completed builds.
          </p>
          <div className="inline-flex items-center gap-2 text-baby-blue-600 font-medium">
            <span>Have a project in mind?</span>
            <a href="/contact" className="underline hover:text-baby-blue-700">
              Let&apos;s discuss your vision
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}