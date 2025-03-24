import React from "react";
import PageTransition from "@/components/common/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Agenda = () => {
  const days = [
    { 
      value: "day1", 
      label: "Day 1", 
      date: "April 1, 2025 - Tuesday",
      subtitle: "Welcome Session and Cocktail @ Hyatt Hotel",
      events: [
        { time: "16:30", title: "Opening", speaker: "Masters of Ceremonies" },
        { time: "17:00", title: "AC Mexico BU Overview", speaker: "Pepe Borda (Executive Director AC México)" },
        { time: "17:30", title: "Cyber-Resiliency", speaker: "Joshua Saphiro (CXO Crowdstrike)" },
        { time: "18:30", title: "Welcome Dinner and Cocktail", location: "Hyatt Grand Salon" }
      ]
    },
    { 
      value: "day2", 
      label: "Day 2", 
      date: "April 2, 2025 - Wednesday",
      subtitle: "Main Sessions and Dinner @ Bella Terra",
      events: [
        { time: "08:15", title: "Opening", speaker: "Masters of Ceremonies" },
        { time: "08:30", title: "Welcome Message", speaker: "Arturo Gutiérrez (Chief Executive Officer AC)" },
        { time: "08:50", title: "Costa Coffee Talk", speaker: "Neeraj Tolmare (The Coca-Cola Company CIO), Mauricio Santos (AC CIO)" },
        { time: "09:40", title: "AC Digital Journey", speaker: "Jesús García (AC Chief Planning Officer), Santiago Herrera (AC Chief Commercial Digital Officer)" },
        { time: "10:40", title: "CCSWB Modern Trade Digital Journey", speaker: "Derek Alexander (CCSWB Commercial VP), Simon Parkinson (CCSWB CIO)" },
        { time: "11:00", title: "Coke Break" },
        { time: "11:25", title: "AI in the F&B Industry", speaker: "Alison McCauley (Best-Selling Author and Digital Expert)" },
        { time: "12:00", title: "Group Photo" },
        { time: "12:15", title: "Lunch" },
        { time: "13:30", title: "Bottlers' Showcase" },
        { time: "17:15", title: "Long Break" },
        { time: "19:00", title: "Dinner", location: "Bella Terra" }
      ]
    },
    { 
      value: "day3", 
      label: "Day 3", 
      date: "April 3, 2025 - Thursday",
      subtitle: "Market Visit and Tequila Town Experience",
      events: [
        { time: "08:00", title: "Market Visit" },
        { time: "12:00", title: "Train to Tequila Town" },
        { time: "13:40", title: "Mundo Cuervo Tour" },
        { time: "15:30", title: "Lunch", location: "Hacienda Tequila" },
        { time: "21:00", title: "Estimated Arrival to Hotel" }
      ]
    }
  ];

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
              <span className="text-sm text-digipink-300 font-medium">April 1-3, 2025</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Event <span className="text-digipink-500">Agenda</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Explore our comprehensive three-day program featuring industry leaders, technology showcases, and exclusive experiences.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-digiblack-100 rounded-lg border border-white/10 p-6 md:p-8"
          >
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="flex w-full mb-8">
                {days.map((day) => (
                  <TabsTrigger 
                    key={day.value} 
                    value={day.value}
                    className="flex-1 data-[state=active]:bg-digipink-500 data-[state=active]:text-white"
                  >
                    <div className="text-center w-full">
                      <div className="font-medium">{day.label}</div>
                      <div className="text-xs opacity-80">{day.date.split(' - ')[0]}</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {days.map((day) => (
                <TabsContent key={day.value} value={day.value} className="mt-0">
                  <div className="text-center mb-6">
                    <h3 className="text-xl text-white/90 font-bold">{day.date}</h3>
                    <p className="text-digipink-400">{day.subtitle}</p>
                  </div>
                  <div className="space-y-6">
                    {day.events.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex flex-col md:flex-row gap-4 p-4 bg-digiblack rounded-lg border border-white/5 hover:border-digipink-500/30 transition-all duration-300"
                      >
                        <div className="md:w-1/5">
                          <div className="text-digipink-500 font-medium">{event.time}</div>
                          {event.location && (
                            <div className="text-white/50 text-sm">{event.location}</div>
                          )}
                        </div>
                        <div className="md:w-4/5">
                          <h3 className="text-white font-medium text-lg">{event.title}</h3>
                          {event.speaker && (
                            <div className="text-digipink-300 text-sm mt-1">{event.speaker}</div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Agenda;
