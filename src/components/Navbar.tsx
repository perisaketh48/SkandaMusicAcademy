import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

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
          : "border-b border-transparent",
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
              className="h-14 sm:h-16 lg:h-[5rem] w-auto object-contain"
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
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200 px-6 py-2.5 rounded-lg text-sm"
            >
              Book Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
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

      {/* MOBILE MENU - Compact dropdown (not full screen) */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 top-16 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu panel */}
          <div className="lg:hidden absolute left-0 right-0 top-16 bg-white border-b border-border shadow-[0_12px_40px_rgba(18,86,153,0.12)] z-50 animate-in slide-in-from-top duration-200">
            <nav className="container mx-auto px-4 sm:px-6 py-3">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-medium transition-all",
                      isActive(link.to)
                        ? "bg-primary/8 text-primary"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    {isActive(link.to) && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                ))}

                {/* Book Demo CTA */}
                <div className="mt-2 pt-2 border-t border-border/60">
                  <Link
                    to="/demo"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg text-[15px] transition-all"
                  >
                    Book Demo Class
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
