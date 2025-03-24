
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-digiblack">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-digipink-500 text-9xl font-bold">404</div>
          <h1 className="text-3xl font-bold text-white mt-4">Page Not Found</h1>
          <p className="text-white/70 mt-2 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild className="bg-digipink-500 hover:bg-digipink-600 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
