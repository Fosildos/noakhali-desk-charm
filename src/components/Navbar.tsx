import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Notices", href: "#notices" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navbar border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-0">
        <a href="#" className="flex items-center gap-3 py-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            ড
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-navbar-foreground">Divisional Office</span>
            <span className="block text-xs text-muted-foreground">Noakhali, Bangladesh</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="block px-4 py-4 text-sm font-medium text-navbar-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-border bg-navbar">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-navbar-foreground hover:bg-primary hover:text-primary-foreground border-b border-border last:border-b-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
