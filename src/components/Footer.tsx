const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10 px-4">
    <div className="container max-w-3xl">
      <p className="font-heading font-bold text-lg mb-4">Divisional Office Noakhali</p>
      <nav className="flex gap-6 text-sm text-primary-foreground/80 mb-6">
        <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
        <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
        <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
      </nav>
      <p className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} Divisional Office Noakhali. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
