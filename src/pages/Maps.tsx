import React from "react";
import PageTransition from "@/components/common/PageTransition";
import { motion } from "framer-motion";
import { MapPin, Calendar, Bus, Hotel, Map } from "lucide-react";

const Maps = () => {
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
              <span className="text-sm text-digipink-300 font-medium">Event Information</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Transfers and <span className="text-digipink-500">Venues</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Everything you need to know about transportation, accommodation, and event locations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Section 1: Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <Bus className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-3xl font-bold text-white">Transfers</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-digiblack rounded-lg border border-white/5 p-5 hover:border-digipink-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Airport Transfers</h3>
                  <p className="text-white/70">
                    Transportation is arranged to and from the Hyatt Regency Andares Guadalajara, based on your registered flight details. A representative holding a Digitechcon sign will greet you upon arrival.
                  </p>
                </div>
                
                <div className="bg-digiblack rounded-lg border border-white/5 p-5 hover:border-digipink-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Event Transfers</h3>
                  <p className="text-white/70">
                    Shuttle services will be provided between the hotel and the event venue.
                  </p>
                </div>
                
                <div className="bg-digiblack rounded-lg border border-white/5 p-5 hover:border-digipink-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">Activity Transfers</h3>
                  <p className="text-white/70">
                    Official event-related activities, such as Market Visit and Tequila Town Experience, will include arranged transportation.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Section 2: Hotel Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <Hotel className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-3xl font-bold text-white">Hotel Accommodation</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">The official hotel for the event will be:</h3>
                  <div className="flex items-start gap-3 mt-4">
                    <MapPin className="text-digipink-500 h-5 w-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 font-medium text-lg">Hyatt Regency Andares Guadalajara</p>
                      <p className="text-white/70 mt-1">
                        Address: Blvd. Puerta de Hierro 5065, Puerta de Hierro, 45116 Zapopan, Jalisco, Mexico
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-1">Check-in & Check-out</h4>
                      <p className="text-white/70">
                        Check-in: 3:00 PM<br />
                        Check-out: 12:00 PM
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-1">Hotel Amenities</h4>
                      <p className="text-white/70">
                        Free Wi-Fi, fitness center, swimming pool, restaurant, and 24-hour room service.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-digiblack rounded-lg overflow-hidden h-64 md:h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.943838088232!2d-103.41485402379459!3d20.71250508085886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af03c0bde3c1%3A0xd633bfad277a45c5!2sHyatt%20Regency%20Andares%20Guadalajara!5e0!3m2!1sen!2smx!4v1742842466558!5m2!1sen!2smx"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hyatt Regency Andares Guadalajara"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
            
            {/* Section 3: Venue Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <Map className="text-digipink-500 h-6 w-6 mr-3" />
                <h2 className="text-3xl font-bold text-white">Venue Maps</h2>
              </div>
              
              <div className="space-y-10">
                {/* Day 1 Venue */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-digipink-500 h-6 w-6 mr-2" />
                      <h3 className="text-xl font-bold text-white">Day 1 Venue</h3>
                    </div>
                    
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="text-digipink-500 h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 font-medium">Hyatt Regency Andares Guadalajara</p>
                        <p className="text-white/70">
                          Blvd. Puerta de Hierro 5065,<br />
                          45116 Zapopan, Jal.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 bg-digiblack rounded-lg overflow-hidden h-64 md:h-80">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.943838088232!2d-103.41485402379459!3d20.71250508085886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af03c0bde3c1%3A0xd633bfad277a45c5!2sHyatt%20Regency%20Andares%20Guadalajara!5e0!3m2!1sen!2smx!4v1742842466558!5m2!1sen!2smx"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Day 1 - Hyatt Regency Location Map"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
                
                {/* Day 2 Venue */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-digipink-500 h-6 w-6 mr-2" />
                      <h3 className="text-xl font-bold text-white">Day 2 Venue</h3>
                    </div>
                    
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="text-digipink-500 h-5 w-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/90 font-medium">Bellaterra venue</p>
                        <p className="text-white/70">
                          Av Naciones Unidas 8600,<br />
                          San Juan de Ocotán, 45019 Zapopan, Jal.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 bg-digiblack rounded-lg overflow-hidden h-64 md:h-80">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.1455796080036!2d-103.44833832379479!3d20.70431218086508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aed62634e855%3A0x9c54d66b7646f69f!2sBellaterra%20(Sal%C3%B3n%20de%20Eventos)!5e0!3m2!1sen!2smx!4v1742843231058!5m2!1sen!2smx"
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Day 2 - Bellaterra Venue Location Map"
                      className="w-full h-full"
                    ></iframe>
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

export default Maps;
