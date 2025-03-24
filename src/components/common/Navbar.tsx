import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Further optimize menu items for better fit
const navLinks = [
  { name: "HOME", path: "/" },
  { name: "AGENDA", path: "/agenda" },
  { name: "SPEAKERS", path: "/speakers" }, 
  { name: "KNOW BEFORE YOU GO", path: "/know-before-you-go" },
  { name: "EXPLORE GUADALAJARA", path: "/explore-guadalajara" },
  { name: "VENUES", path: "/maps" },
  { name: "FEEDBACK", path: "/surveys" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="relative z-10 flex items-center gap-2 mr-6"
            aria-label="Digitechcon 2025"
          >
            <img
              src="/lovable-uploads/0205967c-e87e-44dc-9967-d6cd7a40ed15.png"
              alt="Digitechcon Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold tracking-tight text-white">
              <span className="text-digipink-500">DIGITECH</span>CON
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-1">
            <div className="nav-container">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link nav-item ${
                    location.pathname === link.path 
                      ? "active" 
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto text-white hover:text-digipink-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden glassmorphism absolute top-full left-0 w-full">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 text-lg ${
                  location.pathname === link.path 
                    ? "text-digipink-500" 
                    : "text-white hover:text-digipink-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
