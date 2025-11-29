import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const StickyNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: "white" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        visible
          ? "opacity-100 translate-y-0 shadow-lg bg-white"
          : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <nav className="container bg-white mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold text-black">
          Skanda Music Academy
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-black hover:text-gray-700 transition">
            Home
          </a>
          <a
            href="#courses"
            className="text-black hover:text-gray-700 transition"
          >
            Courses
          </a>
          <a
            href="#about"
            className="text-black hover:text-gray-700 transition"
          >
            About
          </a>
          <a
            href="#book-demo"
            className="text-black hover:text-gray-700 transition"
          >
            Book Demo
          </a>
          <a
            href="#contact"
            className="text-black hover:text-gray-700 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-black md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Dropdown */}
        <div
          className={cn(
            "absolute top-full left-0 w-full bg-white md:hidden transition-all duration-300",
            mobileOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="flex flex-col p-4 gap-4">
            <a
              href="/"
              className="text-black hover:text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-black hover:text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Courses
            </a>
            <a
              href="#about"
              className="text-black hover:text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-black hover:text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
