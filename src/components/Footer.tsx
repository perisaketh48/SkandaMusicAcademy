import { Link } from "react-router-dom";
import {
  Music2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0D2137] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-[#1E90FF] flex items-center justify-center">
                <Music2 className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-white">
                  Skanda
                </span>
                <span className="text-xs text-white/60 -mt-0.5">
                  Music Academy
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Discover the soul of Carnatic music through personalized,
              one-on-one training rooted in tradition and guided by passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/about", label: "About Us" },
                { to: "/courses", label: "Courses" },
                { to: "/demo", label: "Book Demo" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-[#1E90FF] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#1E90FF] shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  info.skandamusicacademy@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#1E90FF] shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#1E90FF] shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  Werribee VIC, Australia
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1E90FF] transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white/70">Skanda Music Academy</span>. All
              rights reserved.
            </p>
            <p className="text-white/50 text-sm flex items-center gap-1.5">
              <span>Designed & Developed by</span>
              <a
                href="https://saketh-peri-13.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E90FF] hover:text-[#3BA0FF] font-medium transition-colors"
              >
                Saketh Peri
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
