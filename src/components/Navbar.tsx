import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/courses", label: "Courses" },
    // { to: "/pricing", label: "Pricing" },
    // { to: "/slots", label: "Slot Availability" },
    { to: "/demo", label: "Demo Class" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary via-accent to-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
              <Music2 className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg lg:text-xl text-gradient-warm">
                Skanda
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                Music Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Button
              asChild
              className="bg-gradient-to-r from-gold via-accent to-gold hover:shadow-gold font-semibold"
            >
              <Link to="/demo">Book Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-border fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-all",
                    isActive(link.to)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-gold via-accent to-gold mt-4"
              >
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  Book Demo
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
