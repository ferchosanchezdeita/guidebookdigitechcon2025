import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/common/PageTransition";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <PageTransition>
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-digiblack-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                About <span className="text-digipink-500">Digitechcon</span>
              </h2>
              <p className="text-white/70 mb-4">
                <strong><em>Digitechcon</em></strong> is the Technology in Business event hosted by the bottlers of the Coca-Cola System. This is the third edition, bringing together C-suite key stakeholders from across the Coca-Cola System with the aim of shaping digital business transformation, sharing best practices, and establishing a unified agenda.
              </p>
              <p className="text-white/70 mb-6">
                Global bottling leaders will showcase how technology, analytics, and AI/Gen AI drive competitive advantage.
              </p>
              
              <div className="mb-8">
                <p className="text-white/70 mb-3 font-medium text-xl"><strong>Main Topics</strong></p>
                <ul className="text-white/70 list-disc pl-5 space-y-2">
                  <li>Driving Business and Process Transformation at Speed</li>
                  <li>Reimagining the Customer and Consumer Experience in a Digital World</li>
                  <li>Building Cyber Resilience for a Secure Future</li>
                  <li>Tech-Enabled Supply Chain Innovation: The Next Frontier</li>
                </ul>
              </div>
            </div>
            <div className="bg-digiblack-100 rounded-lg p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-digipink-500 mb-2">15+</div>
                  <div className="text-sm text-white/70">Speakers</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-digipink-500 mb-2">30+</div>
                  <div className="text-sm text-white/70">Bottlers</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-digipink-500 mb-2">150+</div>
                  <div className="text-sm text-white/70">Attendees</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-digipink-500 mb-2">20+</div>
                  <div className="text-sm text-white/70">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-digipink-500/10 backdrop-blur-sm border border-digipink-500/30 rounded-full px-4 py-1 mb-4">
              <span className="text-sm text-digipink-300 font-medium">What to Expect</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Event <span className="text-digipink-500">Highlights</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join us for an immersive experience designed to inspire innovation and foster collaboration in the Coca-Cola bottling ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Keynote Presentations",
                description: "Hear from industry leaders and visionaries about the future of technology in the Coca-Cola ecosystem."
              },
              {
                title: "Networking Opportunities",
                description: "Connect with peers, partners, and experts from around the globe."
              },
              {
                title: "Technology Showcase",
                description: "Experience the latest innovations and solutions in action through our tech demos."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-digiblack-100 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:border-digipink-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-digiblack-100 to-digiblack relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Welcome to <span className="text-digipink-500">Digitechcon 2025</span>
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              We look forward to seeing you at the most innovative Coca-Cola bottling technology conference of the year.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
