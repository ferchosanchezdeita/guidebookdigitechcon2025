import React, { useState } from "react";
import PageTransition from "@/components/common/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Venue gallery images
const galleryImages = [
  { 
    id: 1, 
    src: "/gallery/bellaterra.jpeg", 
    alt: "Bellaterra Salon de Eventos", 
    category: "venues",
    description: "Bellaterra - Main venue for April 2nd sessions & dinner"
  },
  { 
    id: 2, 
    src: "/gallery/hyatt_zapopan.jpeg", 
    alt: "Hyatt Regency Andares Guadalajara", 
    category: "venues",
    description: "Hyatt Regency Andares - Accommodation and welcome cocktail on April 1st"
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "venues", label: "Venues" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
              <span className="text-sm text-digipink-300 font-medium">Event Locations</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Conference <span className="text-digipink-500">Venues</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              View the locations where the Digitechcon 2025 events will be held.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-digipink-500 text-white"
                    : "bg-digiblack-100 text-white/70 hover:bg-digipink-500/10 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  layout
                  className="overflow-hidden rounded-lg aspect-video cursor-pointer group relative"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="absolute inset-0 bg-digipink-500/0 group-hover:bg-digipink-500/20 transition-all duration-300 z-10"></div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold">{image.alt}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="bg-digiblack-100 border-white/10 text-white p-0 max-w-4xl overflow-hidden">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-digiblack/50 text-white p-2 rounded-full hover:bg-digipink-500/80 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            
            {selectedImage && (
              <div>
                <img
                  src={galleryImages.find(img => img.id === selectedImage)?.src}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {galleryImages.find(img => img.id === selectedImage)?.alt}
                  </h3>
                  <p className="text-white/80">
                    {galleryImages.find(img => img.id === selectedImage)?.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default Gallery;
