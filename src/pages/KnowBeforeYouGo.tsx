import React from "react";
import PageTransition from "@/components/common/PageTransition";
import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays, Cloud, Wifi, BookOpen } from "lucide-react";

const KnowBeforeYouGo = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-digipink-500/10 backdrop-blur-sm border border-digipink-500/30 rounded-full px-4 py-1 mb-4"
            >
              <span className="text-sm text-digipink-300 font-medium">Important Information</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Know Before <span className="text-digipink-500">You Go</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Essential information to help you prepare for the event.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <MapPin className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold text-white">Venue Details</h2>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <CalendarDays className="text-digipink-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">April 1st</p>
                    <p className="text-white/70">Hyatt Grand Hotel – Welcome Cocktail</p>
                  </div>
                </div>
                <div className="flex">
                  <CalendarDays className="text-digipink-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">April 2nd</p>
                    <p className="text-white/70">Bella Terra – Main Sessions & Dinner</p>
                  </div>
                </div>
                <div className="flex">
                  <CalendarDays className="text-digipink-500 h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">April 3rd</p>
                    <p className="text-white/70">Market Visit & Tequila Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dress Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <Clock className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold text-white">Dress Code</h2>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">👔</div>
                  <div>
                    <p className="text-white font-medium">Business casual for main sessions</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">👗</div>
                  <div>
                    <p className="text-white font-medium">Comfortable attire and shoes for MARKET VISIT</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Weather */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <Cloud className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold text-white">Weather in April</h2>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">🌤️</div>
                  <div>
                    <p className="text-white font-medium">Average temperature: 27°C (81°F) during the day</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">🧥</div>
                  <div>
                    <p className="text-white font-medium">Light jacket recommended for evenings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wi-Fi Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <Wifi className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold text-white">Wi-Fi Access</h2>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">📱</div>
                  <div>
                    <p className="text-white font-medium">Free Wi-Fi will be available at all venues</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">🔑</div>
                  <div>
                    <p className="text-white font-medium">Credentials will be provided at registration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Guidebook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8 md:col-span-2"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold text-white">Guidebook</h2>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">📲</div>
                  <div>
                    <p className="text-white font-medium">This guidebook contains everything you need!</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-digipink-500 mr-3 flex-shrink-0">📱</div>
                  <div>
                    <p className="text-white font-medium">Scan the QR code at the venue for quick access</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default KnowBeforeYouGo; 