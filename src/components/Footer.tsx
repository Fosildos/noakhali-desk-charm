import govEmblem from "@/assets/gov-emblem.png";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={govEmblem} alt="Government Emblem" className="w-8 h-8 object-contain" loading="lazy" />
            <div>
              <span className="font-bold block">বিভাগীয় কার্যালয় নোয়াখালী</span>
              <span className="text-xs text-footer-foreground/60">Divisional Office Noakhali</span>
            </div>
          </div>
          <p className="text-sm text-footer-foreground/70 leading-relaxed">
            বাংলাদেশ সরকারের অধীনে নোয়াখালী বিভাগের নাগরিকদের সেবা প্রদান।
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">দ্রুত লিংক / Quick Links</h4>
          <ul className="space-y-2 text-sm text-footer-foreground/70">
            <li><a href="#about" className="hover:text-footer-foreground transition-colors">সম্পর্কে / About</a></li>
            <li><a href="#services" className="hover:text-footer-foreground transition-colors">সেবা / Services</a></li>
            <li><a href="#gallery" className="hover:text-footer-foreground transition-colors">গ্যালারি / Gallery</a></li>
            <li><a href="#notices" className="hover:text-footer-foreground transition-colors">নোটিশ / Notices</a></li>
            <li><a href="#contact" className="hover:text-footer-foreground transition-colors">যোগাযোগ / Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">যোগাযোগ / Contact</h4>
          <ul className="space-y-2 text-sm text-footer-foreground/70">
            <li>মাইজদী কোর্ট, নোয়াখালী</li>
            <li>+৮৮০-৩২১-XXXXXXX</li>
            <li>info@divnoakhali.gov.bd</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-footer-foreground/15 mt-8 pt-4">
        <p className="text-xs text-footer-foreground/50 text-center">
          © {new Date().getFullYear()} বিভাগীয় কার্যালয় নোয়াখালী। সর্বস্বত্ব সংরক্ষিত। গণপ্রজাতন্ত্রী বাংলাদেশ সরকার।
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
