const HeroSection = () => (
  <section className="bg-banner text-banner-foreground">
    <div className="container py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="inline-block bg-primary-foreground/20 text-sm px-3 py-1 rounded mb-4">
          Government of Bangladesh
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Divisional Office<br />Noakhali
        </h1>
        <p className="text-banner-foreground/85 text-base md:text-lg mb-6 max-w-lg">
          Serving the citizens of Noakhali Division with efficient public administration, 
          documentation services, and community welfare programs.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-block bg-primary-foreground text-primary font-semibold px-6 py-2.5 rounded text-sm hover:opacity-90 transition-opacity"
          >
            Contact Office
          </a>
          <a
            href="#services"
            className="inline-block border border-primary-foreground/50 text-primary-foreground font-medium px-6 py-2.5 rounded text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>

    {/* Scrolling ticker like JB */}
    <div className="bg-primary-foreground/10 border-t border-primary-foreground/20 overflow-hidden">
      <div className="container py-2 flex items-center gap-3">
        <span className="bg-primary-foreground text-primary text-xs font-bold px-2 py-0.5 rounded shrink-0">
          NOTICE
        </span>
        <div className="overflow-hidden whitespace-nowrap">
          <span className="inline-block animate-marquee text-sm">
            Office will remain closed on 26th March for Independence Day. | New documentation guidelines have been published. | Monthly public hearing scheduled for first Sunday of April.
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
