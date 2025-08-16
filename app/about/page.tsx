import { Award, Clock, Users, Wrench } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "[Name]",
      role: "Owner",
      image: "[Headshot placeholder]"
    },
    {
      name: "[Name]",
      role: "President of Operations",
      image: "[Headshot placeholder]"
    },
    {
      name: "[Name]",
      role: "Project Developer",
      image: "[Headshot placeholder]"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every detail matters. We take pride in delivering exceptional quality in every aspect of our work."
    },
    {
      icon: Clock,
      title: "Timely Execution",
      description: "We respect your time and investment, ensuring projects are completed efficiently without compromising quality."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Your vision is our blueprint. We work closely with you throughout the entire building process."
    },
    {
      icon: Wrench,
      title: "Expert Craftsmanship",
      description: "With roots in custom woodworking, we bring artisan-level attention to every project."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About KS Concepts
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Rooted In Craft. Building Your Future.
          </p>
        </div>
      </section>


      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                KS Concepts is a locally owned company serving the DFW area for more than 15 years. 
                Our experience has included both commercial and residential remodels, where we built 
                a reputation for precision, reliability, and quality craftsmanship.
              </p>
              <p>
                With a strong foundation in custom woodworking, we are now dedicated to bringing that 
                same level of expertise and efficiency to custom home building—helping turn your vision 
                into a reality.
              </p>
              <p>
                Our team brings a deep understanding of precision, structure, and quality to every project. 
                Now focused on developing high-end luxury homes, we are committed to delivering an exceptional 
                experience — defined by thoughtful design, meticulous attention to detail, and timely execution.
              </p>
              <p>
                At the heart of our work is a dedication to craftsmanship and professionalism, ensuring that 
                every home we build stands as a lasting reflection of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-baby-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-baby-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">{member.image}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trusted Partners</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We work with the best suppliers, contractors, and service providers in the DFW area 
            to ensure every aspect of your home meets our high standards.
          </p>
          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <p className="text-gray-500">Partner logos and links coming soon</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Experience the difference that true craftsmanship and dedication can make in your custom home project.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-baby-blue-500 hover:bg-baby-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}