
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-digiblack-100 border-t border-white/10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/0205967c-e87e-44dc-9967-d6cd7a40ed15.png"
                alt="Digitechcon Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                <span className="text-digipink-500">DIGITECH</span>CON
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              April 1-3, 2025<br />
              Av Naciones Unidas 8600,<br />
              San Juan de Ocotán, 45019 Zapopan, Jal.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-digipink-500 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="text-muted-foreground hover:text-digipink-500 text-sm">
                  Agenda
                </Link>
              </li>
              <li>
                <Link to="/maps" className="text-muted-foreground hover:text-digipink-500 text-sm">
                  Maps
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="text-muted-foreground hover:text-digipink-500 text-sm">
                  Speakers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/surveys" className="text-muted-foreground hover:text-digipink-500 text-sm">
                  Surveys
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-digipink-500 text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-digipink-500 text-sm">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Digitechcon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-digipink-500 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-digipink-500 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
