import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand with Logo */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/Assets/Skanda_logo5.png"
                alt="Skanda Music Academy"
                className="h-16 sm:h-20 w-auto object-contain brightness-0 invert"
              />
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
                { to: "/gallery", label: "Gallery" },
                { to: "/demo", label: "Book Demo" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-[#1877F2] transition-colors text-sm"
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
                <Mail className="h-4 w-4 text-[#1877F2] shrink-0 mt-0.5" />
                <a
                  href="mailto:info.skandamusicacademy@gmail.com"
                  className="text-sm text-white/70 hover:text-[#1877F2] transition-colors"
                >
                  info.skandamusicacademy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#1877F2] shrink-0 mt-0.5" />
                <a
                  href="tel:+61434426619"
                  className="text-sm text-white/70 hover:text-[#1877F2] transition-colors"
                >
                  +61 434 426 619
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#1877F2] shrink-0 mt-0.5" />
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
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/skandamusicacademy" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/skandamusicacademy" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@skandamusicacademy" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              {/* WhatsApp */}
              <a
                href="https://wa.me/61434426619"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
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
                className="text-[#1877F2] hover:text-[#42a5f5] font-medium transition-colors"
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
