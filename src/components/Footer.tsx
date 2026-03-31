import { useLang, t } from "@/contexts/LangContext";
import govEmblem from "@/assets/gov-emblem.png";

const Footer = () => {
  const { lang } = useLang();
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={govEmblem} alt="Government Emblem" className="w-8 h-8 object-contain" loading="lazy" />
              <span className="font-bold">
                {t("বিভাগীয় কার্যালয় নোয়াখালী", "Divisional Office Noakhali", lang)}
              </span>
            </div>
            <p className="text-sm text-footer-foreground/70 leading-relaxed">
              {t(
                "বাংলাদেশ সরকারের অধীনে নোয়াখালী বিভাগের নাগরিকদের সেবা প্রদান।",
                "Serving the citizens of Noakhali Division under the Government of Bangladesh.",
                lang
              )}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">{t("দ্রুত লিংক", "Quick Links", lang)}</h4>
            <ul className="space-y-2 text-sm text-footer-foreground/70">
              <li><a href="#about" className="hover:text-footer-foreground transition-colors">{t("সম্পর্কে", "About", lang)}</a></li>
              <li><a href="#services" className="hover:text-footer-foreground transition-colors">{t("সেবা", "Services", lang)}</a></li>
              <li><a href="#gallery" className="hover:text-footer-foreground transition-colors">{t("গ্যালারি", "Gallery", lang)}</a></li>
              <li><a href="#notices" className="hover:text-footer-foreground transition-colors">{t("নোটিশ", "Notices", lang)}</a></li>
              <li><a href="#contact" className="hover:text-footer-foreground transition-colors">{t("যোগাযোগ", "Contact", lang)}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">{t("যোগাযোগ", "Contact", lang)}</h4>
            <ul className="space-y-2 text-sm text-footer-foreground/70">
              <li>{t("মাইজদী কোর্ট, নোয়াখালী", "Maijdee Court, Noakhali", lang)}</li>
              <li>+৮৮০-৩২১-XXXXXXX</li>
              <li>info@divnoakhali.gov.bd</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-footer-foreground/15 mt-8 pt-4">
          <p className="text-xs text-footer-foreground/50 text-center">
            © {new Date().getFullYear()} {t("বিভাগীয় কার্যালয় নোয়াখালী। সর্বস্বত্ব সংরক্ষিত। গণপ্রজাতন্ত্রী বাংলাদেশ সরকার।", "Divisional Office Noakhali. All rights reserved. Government of Bangladesh.", lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
