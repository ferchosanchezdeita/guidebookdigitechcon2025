import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Grid Background */}
      <div className="grid-bg"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-digipink-500/10 backdrop-blur-sm border border-digipink-500/30 rounded-full px-4 py-1 mb-6"
            >
              <span className="text-sm text-digipink-300 font-medium">April 1-3, 2025</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-white text-shadow"
            >
              DIGITECH<span className="text-digipink-500">CON</span> 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg text-white/80 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Join the most innovative Coca-Cola bottling technology conference. Three days of cutting-edge presentations, networking, and vision for the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/agenda">
                <Button variant="outline" className="border-digipink-500/50 text-white hover:bg-digipink-500/10 rounded-full px-8 py-6">
                  View Schedule
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-digipink-500/20 filter blur-3xl animate-glow"></div>
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              src="/lovable-uploads/cb612dea-aa8e-4d0d-b57e-69cc76a109f3.png"
              alt="Digitechcon Digital Bottle"
              className="relative z-10 w-full h-full object-contain glow-effect"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
