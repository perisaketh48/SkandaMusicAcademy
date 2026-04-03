import { Link } from "react-router-dom";
import { Home, Info, Image, BookOpen, Calendar, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/gallery", label: "Gallery", icon: Image },
  { to: "/courses", label: "Courses", icon: BookOpen },
  { to: "/demo", label: "Demo", icon: Calendar },
  { to: "/contact", label: "Contact", icon: Mail },
];

const QuickNav = () => {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg text-primary sm:text-xl font-serif font-semibold text-foreground mb-6 sm:mb-8">
          Explore Skanda Music Academy
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-[#f6faff] hover:bg-primary/8 border border-transparent hover:border-primary/15 transition-all duration-200 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/8 group-hover:bg-primary/12 flex items-center justify-center transition-colors">
                <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNav;
