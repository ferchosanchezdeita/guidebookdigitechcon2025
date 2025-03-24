import React from "react";
import PageTransition from "@/components/common/PageTransition";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, MessageSquare, Phone, User, Users } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    // Reset form fields in a real application
  };

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
              <span className="text-sm text-digipink-300 font-medium">Get in Touch</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Contact & <span className="text-digipink-500">Support</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Have questions about Digitechcon 2025? Our team is here to help. Reach out to us anytime.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <div className="relative">
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-digiblack-100 border-white/20 text-white pl-10"
                    />
                    <User className="h-5 w-5 text-digipink-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <div className="relative">
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-digiblack-100 border-white/20 text-white pl-10"
                    />
                    <Mail className="h-5 w-5 text-digipink-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <div className="relative">
                    <Input 
                      id="company" 
                      placeholder="Enter your company name" 
                      className="bg-digiblack-100 border-white/20 text-white pl-10"
                    />
                    <Users className="h-5 w-5 text-digipink-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <div className="relative">
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message" 
                      className="bg-digiblack-100 border-white/20 text-white min-h-[150px] pl-10 pt-3"
                    />
                    <MessageSquare className="h-5 w-5 text-digipink-500 absolute left-3 top-6" />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-digipink-500 hover:bg-digipink-600 text-white"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:pl-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Support Information</h2>
              
              <div className="space-y-8">
                <div className="bg-digiblack-100 border border-white/10 rounded-lg p-6 hover:border-digipink-500/30 transition-all duration-300">
                  <h3 className="text-xl font-medium text-white mb-4">General Inquiries</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-digipink-500" />
                      <a href="mailto:ACDIGITECHCON2025@ARCACONTAL.COM" className="text-white/70 hover:text-digipink-400">
                        ACDIGITECHCON2025@ARCACONTAL.COM
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-digipink-500" />
                      <a href="tel:+528119179985" className="text-white/70 hover:text-digipink-400">
                        +52 81 1917 9985
                      </a>
                    </div>
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

export default Contact;
