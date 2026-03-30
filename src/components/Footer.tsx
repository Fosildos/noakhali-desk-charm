const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
              ড
            </div>
            <span className="font-bold">Divisional Office Noakhali</span>
          </div>
          <p className="text-sm text-footer-foreground/70 leading-relaxed">
            Serving the citizens of Noakhali Division under the Government of Bangladesh.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-footer-foreground/70">
            <li><a href="#about" className="hover:text-footer-foreground transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-footer-foreground transition-colors">Services</a></li>
            <li><a href="#notices" className="hover:text-footer-foreground transition-colors">Notices</a></li>
            <li><a href="#contact" className="hover:text-footer-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-footer-foreground/70">
            <li>Maijdee Court, Noakhali</li>
            <li>+880-321-XXXXXXX</li>
            <li>info@divnoakhali.gov.bd</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-footer-foreground/15 mt-8 pt-4">
        <p className="text-xs text-footer-foreground/50 text-center">
          © {new Date().getFullYear()} Divisional Office Noakhali. All rights reserved. Government of Bangladesh.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
