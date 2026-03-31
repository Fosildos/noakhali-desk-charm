import { useState } from "react";
import { Menu, X } from "lucide-react";
import govEmblem from "@/assets/gov-emblem.png";

const navLinks = [
  { label: "Home", labelBn: "হোম", href: "#" },
  { label: "About", labelBn: "সম্পর্কে", href: "#about" },
  { label: "Services", labelBn: "সেবা", href: "#services" },
  { label: "Gallery", labelBn: "গ্যালারি", href: "#gallery" },
  { label: "Notices", labelBn: "নোটিশ", href: "#notices" },
  { label: "Contact", labelBn: "যোগাযোগ", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navbar border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-0">
        <a href="#" className="flex items-center gap-3 py-2">
          <img src={govEmblem} alt="Government Emblem" className="w-10 h-10 object-contain" />
          <div className="leading-tight">
            <span className="block text-sm font-bold text-navbar-foreground">বিভাগীয় কার্যালয়, নোয়াখালী</span>
            <span className="block text-xs text-muted-foreground">Divisional Office, Noakhali</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-0">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="block px-4 py-4 text-sm font-medium text-navbar-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-navbar">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-navbar-foreground hover:bg-primary hover:text-primary-foreground border-b border-border last:border-b-0"
            >
              {l.label} / {l.labelBn}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
