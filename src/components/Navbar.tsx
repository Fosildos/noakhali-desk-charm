import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang, t } from "@/contexts/LangContext";
import govEmblem from "@/assets/gov-emblem.png";

const navLinks = [
  { bn: "হোম", en: "Home", href: "#" },
  { bn: "সম্পর্কে", en: "About", href: "#about" },
  { bn: "সেবা", en: "Services", href: "#services" },
  { bn: "গ্যালারি", en: "Gallery", href: "#gallery" },
  { bn: "নোটিশ", en: "Notices", href: "#notices" },
  { bn: "যোগাযোগ", en: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();

  return (
    <nav className="bg-navbar border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-0">
        <a href="#" className="flex items-center gap-3 py-2">
          <img src={govEmblem} alt="Government Emblem" className="w-10 h-10 object-contain" />
          <div className="leading-tight">
            <span className="block text-sm font-bold text-navbar-foreground">
              {t("বিভাগীয় কার্যালয়, নোয়াখালী", "Divisional Office, Noakhali", lang)}
            </span>
            <span className="block text-xs text-muted-foreground">
              {t("গণপ্রজাতন্ত্রী বাংলাদেশ সরকার", "Government of Bangladesh", lang)}
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-0">
          <ul className="flex items-center gap-0">
            {navLinks.map((l) => (
              <li key={l.en}>
                <a
                  href={l.href}
                  className="block px-4 py-4 text-sm font-medium text-navbar-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {t(l.bn, l.en, lang)}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggle}
            className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            title="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "bn" ? "EN" : "বাং"}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium border border-border rounded"
          >
            <Globe className="w-3 h-3" />
            {lang === "bn" ? "EN" : "বাং"}
          </button>
          <button className="p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-navbar">
          {navLinks.map((l) => (
            <a
              key={l.en}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-navbar-foreground hover:bg-primary hover:text-primary-foreground border-b border-border last:border-b-0"
            >
              {t(l.bn, l.en, lang)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
