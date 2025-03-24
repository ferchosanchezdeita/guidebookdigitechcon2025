import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Maps from "./pages/Maps";
import Speakers from "./pages/Speakers";
import Surveys from "./pages/Surveys";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import KnowBeforeYouGo from "./pages/KnowBeforeYouGo";
import ExploreGuadalajara from "./pages/ExploreGuadalajara";

// Common Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-digiblack">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/know-before-you-go" element={<KnowBeforeYouGo />} />
                <Route path="/explore-guadalajara" element={<ExploreGuadalajara />} />
                <Route path="/maps" element={<Maps />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/surveys" element={<Surveys />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
