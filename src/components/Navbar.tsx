import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/courses", label: "Courses" },
    { to: "/demo", label: "Demo Class" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-white",
        scrolled
          ? "shadow-[0_2px_20px_rgba(18,86,153,0.08)] border-b border-border/50"
          : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAVBAR ROW */}
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/Assets/Skanda_logo5.png"
              alt="Skanda Logo"
              className="h-14 sm:h-16 lg:h-[5.5rem] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(link.to)
                    ? "bg-primary text-white shadow-sm"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200 px-6"
            >
              <Link to="/demo">Book Demo</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV - Full screen overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[4rem] sm:top-[4.5rem] bottom-0 bg-white z-50 transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-3.5 rounded-xl text-base font-medium transition-all",
                  isActive(link.to)
                    ? "bg-primary text-white"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-border">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-base"
              >
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  Book Demo Class
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
