"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Ready to start your custom home project? Get in touch with us today to discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-baby-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:ksconceptsco@gmail.com" 
                      className="text-gray-600 hover:text-baby-blue-600"
                    >
                      ksconceptsco@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-baby-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:817-247-6740" 
                      className="text-gray-600 hover:text-baby-blue-600"
                    >
                      817-247-6740
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-baby-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      DFW Area, Texas<br />
                      Including Cedar Hill, Grand Prairie,<br />
                      and surrounding communities
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-baby-blue-100 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-baby-blue-100 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-baby-blue-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("firstName")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-baby-blue-500"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("lastName")}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-baby-blue-500"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-baby-blue-500"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-baby-blue-500"
                    placeholder="(817) 555-0123"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-baby-blue-500"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-baby-blue-500 hover:bg-baby-blue-600 text-white"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Service Area</h2>
            
            {/* Google Maps Embed - DFW Area */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.1415992521!2d-97.09558369999999!3d32.733813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas-Fort%20Worth%20metroplex!5e0!3m2!1sen!2sus!4v1702665894581!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="KS Concepts Service Area Map"
              />
            </div>

            {/* Service Area Cities */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">Areas We Proudly Serve</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-baby-blue-600 mb-3">Primary Service Areas</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Cedar Hill
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Grand Prairie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> DeSoto
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Duncanville
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-baby-blue-600 mb-3">Extended Coverage</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Arlington
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Mansfield
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Midlothian
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Red Oak
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-baby-blue-600 mb-3">Greater DFW Area</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Dallas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Fort Worth
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> Irving
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-baby-blue-500">•</span> And surrounding communities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center text-gray-600">
                <p className="text-sm">
                  Don&apos;t see your city listed? Contact us to discuss your project - we may be able to serve your area!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}