import React from "react";
import PageTransition from "@/components/common/PageTransition";
import { motion } from "framer-motion";
import { Landmark, UtensilsCrossed, ShoppingBag, TreePine, Car } from "lucide-react";

const ExploreGuadalajara = () => {
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
              <span className="text-sm text-digipink-300 font-medium">Discover the City</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Explore <span className="text-digipink-500">Guadalajara</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Make the most of your visit with these local recommendations.
            </motion.p>
          </div>

          {/* Cultural Attractions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Landmark className="text-digipink-500 h-7 w-7 mr-3" />
              <h2 className="text-3xl font-bold text-white">Cultural Attractions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/teatro_degollado.jpg"
                    alt="Teatro Degollado"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Teatro Degollado</h3>
                  <p className="text-white/70">
                    A stunning neoclassical theater from 1866 and one of the city's most beautiful buildings. Home to the Philharmonic Orchestra of Jalisco.
                  </p>
                </div>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/guadalajara_cathedral.jpeg"
                    alt="Guadalajara Cathedral"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Guadalajara Cathedral</h3>
                  <p className="text-white/70">
                    The iconic cathedral with its distinctive yellow towers and neo-gothic design is the heart of the historic center of Guadalajara.
                  </p>
                </div>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/instituto_cultural_cabanas.jpg"
                    alt="Instituto Cultural Cabañas"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Instituto Cultural Cabañas</h3>
                  <p className="text-white/70">
                    UNESCO World Heritage site featuring stunning murals by José Clemente Orozco. Originally founded as an orphanage in the early 19th century.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Local Gastronomy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <UtensilsCrossed className="text-digipink-500 h-7 w-7 mr-3" />
              <h2 className="text-3xl font-bold text-white">Local Gastronomy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/la_docena_oyster.jpg"
                    alt="La Docena Oyster Bar & Grill"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">La Docena Oyster Bar & Grill</h3>
                  <p className="text-white/70">
                    Popular seafood restaurant with fresh oysters and seafood platters. Known for its vibrant atmosphere and quality dishes.
                  </p>
                </div>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/sonora_grill_prime.jpg"
                    alt="Sonora Grill Prime"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Sonora Grill Prime</h3>
                  <p className="text-white/70">
                    Upscale steakhouse offering top-quality cuts of meat. A perfect spot for dinner with a sophisticated ambiance.
                  </p>
                </div>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/bruna_andares.jpg"
                    alt="Bruna Andares"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Bruna Andares</h3>
                  <p className="text-white/70">
                    Trendy Italian restaurant with a contemporary setting. Famous for its wood-fired pizzas and pasta dishes.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Shopping Spots */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <ShoppingBag className="text-digipink-500 h-7 w-7 mr-3" />
              <h2 className="text-3xl font-bold text-white">Shopping Spots</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/andares_shopping.jpg"
                    alt="Andares Shopping Mall"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Andares Shopping Mall</h3>
                  <p className="text-white/70">
                    Luxury shopping center with international brands, fine dining, and entertainment options. Located in the upscale Zapopan area.
                  </p>
                </div>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/tlaquepaque.jpeg"
                    alt="Tlaquepaque Arts & Crafts District"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Tlaquepaque Arts & Crafts District</h3>
                  <p className="text-white/70">
                    Charming neighborhood filled with galleries, boutiques, and workshops. The perfect place to find authentic Mexican crafts and souvenirs.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Outdoor Activities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <TreePine className="text-digipink-500 h-7 w-7 mr-3" />
              <h2 className="text-3xl font-bold text-white">Outdoor Activities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/bosque_los_colomos.jpeg"
                    alt="Bosque Los Colomos"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Bosque Los Colomos</h3>
                  <p className="text-white/70">
                    Urban forest with walking trails, Japanese gardens, and recreational areas. A peaceful escape within the city.
                  </p>
                </div>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/lake_chapala.jpg"
                    alt="Lake Chapala"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Lake Chapala (1hr away)</h3>
                  <p className="text-white/70">
                    Mexico's largest freshwater lake surrounded by picturesque towns. Perfect for a day trip to enjoy lakeside dining and beautiful views.
                  </p>
                </div>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src="/guadalajara/tequila_town.jpg"
                    alt="Tequila Town Tour"
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">Tequila Town Tour (included in the program)</h3>
                  <p className="text-white/70">
                    Visit the birthplace of Mexico's most famous spirit. Explore distilleries and learn about the tequila-making process. 
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Transport Tips */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Car className="text-digipink-500 h-7 w-7 mr-3" />
              <h2 className="text-3xl font-bold text-white">Transport Tips</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-digiblack-100 rounded-lg border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  <span className="text-digipink-500 mr-2">🚕</span> Uber in Guadalajara
                </h3>
                <p className="text-white/70">
                  Uber works well throughout Guadalajara and is a convenient, safe way to get around the city. Most rides within the city center or to nearby attractions are affordable.
                </p>
              </div>

              <div className="bg-digiblack-100 rounded-lg border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  <span className="text-digipink-500 mr-2">💰</span> Currency: Mexican Peso (MXN)
                </h3>
                <p className="text-white/70">
                  The local currency is the Mexican Peso. Most establishments accept credit cards, but it's advisable to carry some cash for smaller vendors, tips, and markets.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
};

export default ExploreGuadalajara; 