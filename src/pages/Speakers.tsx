import React from "react";
import PageTransition from "@/components/common/PageTransition";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

// Sample speaker data
const speakers = [
  {
    id: 4,
    name: "Arturo Gutiérrez",
    title: "Chief Executive Officer AC",
    topic: "Leadership & Strategic Vision",
    image: "/images/speakers/arturo_gutierrez.jpeg",
    bio: "As CEO of Arca Continental, Arturo provides strategic leadership for one of the largest Coca-Cola bottlers globally, driving sustainable growth and innovation across diverse markets."
  },
  {
    id: 2,
    name: "Neeraj Tolmare",
    title: "The Coca-Cola Company CIO",
    topic: "Global IT Leadership",
    image: "/images/speakers/neeraj_tolmare.jpeg",
    bio: "As the CIO of The Coca-Cola Company, Neeraj drives enterprise-wide digital transformation and technology innovation across one of the world's most recognized brands.",
    linkedIn: "https://www.linkedin.com/in/neerajtolmare?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxqBMco0BQCuszJhkv7UOVQ%3D%3D"
  },
  {
    id: 10,
    name: "Joshua Saphiro",
    title: "CXO Crowdstrike",
    topic: "Cybersecurity Leadership",
    image: "/images/speakers/joshua_saphiro.jpeg",
    bio: "Joshua brings extensive cybersecurity expertise from his leadership role at Crowdstrike, focusing on protecting enterprises from evolving digital threats and enhancing security postures.",
    linkedIn: "https://www.linkedin.com/in/joshshap?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7zCB2EzZRpypsm0rjbS6bg%3D%3D"
  },
  {
    id: 9,
    name: "Alison McCauley",
    title: "Best-Selling Author and Digital Change Expert",
    topic: "Digital Transformation",
    image: "/images/speakers/alison_mccauley.jpeg",
    bio: "Alison is a renowned author and expert on digital transformation, helping organizations navigate technological change and leverage emerging technologies for strategic advantage.",
    linkedIn: "https://www.linkedin.com/in/unblocked?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlH8KnNVbQyqac4FKN%2F9pWA%3D%3D"
  },
  {
    id: 6,
    name: "Santiago Herrera",
    title: "AC Chief Commercial Digital Officer",
    topic: "Commercial Digital Strategy",
    image: "/images/speakers/santiago_herrera.jpeg",
    bio: "Santiago spearheads the digital transformation of commercial operations at Arca Continental, integrating cutting-edge technologies to enhance customer experience and market performance.",
    linkedIn: "https://www.linkedin.com/in/santiago-herrera-010b221?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsC2KdrhPQFWgEeny0%2F68BA%3D%3D"
  },
  {
    id: 5,
    name: "Jesús García",
    title: "AC Chief Planning Officer",
    topic: "Strategic Planning & Execution",
    image: "/images/speakers/jesus_garcia.jpeg",
    bio: "Jesús leads strategic planning initiatives at Arca Continental, ensuring alignment of business goals with operational execution to drive sustainable growth and market leadership.",
    linkedIn: "https://www.linkedin.com/in/jesusgarciach?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSiz9S9BGQpWBXZL0h3AybQ%3D%3D"
  },
  {
    id: 3,
    name: "Jose Borda Noriega",
    title: "Executive Director AC México",
    topic: "Strategic Market Leadership",
    image: "/images/speakers/jose_borda.jpeg",
    bio: "Jose leads Arca Continental's operations in the Mexican market, driving business growth and operational excellence throughout one of the company's key territories.",
    linkedIn: "https://www.linkedin.com/in/jose-borda-noriega-31a5269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTT9x8LEoSg64Jren4UVWRg%3D%3D"
  },
  {
    id: 1,
    name: "Mauricio Santos Bremer",
    title: "CIO, Arca Continental",
    topic: "Digital Transformation in Bottling Operations",
    image: "/images/speakers/mauricio_santos.jpeg",
    bio: "Mauricio leads the digital strategy at Arca Continental, one of the largest Coca-Cola bottlers in Latin America. With extensive experience in IT leadership, he drives innovation and technological advancement across the organization.",
    linkedIn: "https://www.linkedin.com/in/mauriciosantosb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfjdeMOhNSWeqZ7vsUY66Cw%3D%3D"
  },
  {
    id: 7,
    name: "Derek Alexander",
    title: "CCSWB Commercial VP",
    topic: "Commercial Strategy & Growth",
    image: "/images/speakers/derek_alexander.jpeg",
    bio: "Derek leads commercial strategies for Coca-Cola Southwest Beverages, focusing on revenue growth, market expansion, and building strong customer relationships across the region.",
    linkedIn: "https://www.linkedin.com/in/derek-alexander-98b726a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjJX03yzbThy1l4sZbJjzeQ%3D%3D"
  },
  {
    id: 8,
    name: "Simon Parkinson",
    title: "CCSWB CIO",
    topic: "Regional IT Leadership",
    image: "/images/speakers/simon_parkinson.jpeg",
    bio: "Simon leads information technology strategies for Coca-Cola Southwest Beverages, implementing innovative solutions to drive operational efficiency and digital transformation.",
    linkedIn: "https://www.linkedin.com/in/simon-parkinson-88b77a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ5da3vgGRLO5vvAOOvjIrw%3D%3D"
  }
];

const SpeakerCard = ({ speaker, index }: { speaker: any, index: number }) => {
  const CardContent = () => (
    <>
      <div className="aspect-square overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-digiblack to-transparent z-10"></div>
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 z-20">
          <div className="bg-digipink-500/10 backdrop-blur-sm border border-digipink-500/30 rounded-full px-3 py-1 inline-block">
            <span className="text-xs text-digipink-300">{speaker.topic}</span>
          </div>
        </div>
      </div>
      <div className="p-5 relative">
        <h3 className="text-xl font-semibold text-white mb-1">{speaker.name}</h3>
        <p className="text-digipink-400 text-sm mb-3">{speaker.title}</p>
        <p className="text-white/70 text-sm">{speaker.bio}</p>
        
        <div className="absolute bottom-4 right-4">
          {speaker.linkedIn ? (
            <a 
              href={speaker.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="w-5 h-5 text-digipink-500 hover:text-white transition-colors" />
            </a>
          ) : (
            <Linkedin className="w-5 h-5 text-white/20" />
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-digiblack-100 rounded-lg border border-white/10 overflow-hidden hover:border-digipink-500/30 transition-all duration-300"
    >
      {speaker.linkedIn ? (
        <a 
          href={speaker.linkedIn} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block h-full cursor-pointer"
        >
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </motion.div>
  );
};

const Speakers = () => {
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
              <span className="text-sm text-digipink-300 font-medium">Industry Leaders</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Featured <span className="text-digipink-500">Speakers</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Meet the visionaries and experts who will share their insights and knowledge at Digitechcon 2025.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Speakers;
