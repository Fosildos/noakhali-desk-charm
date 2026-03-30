const HeroSection = () => (
  <section className="bg-primary text-primary-foreground py-20 px-4">
    <div className="container max-w-3xl text-center">
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
        Divisional Office Noakhali
      </h1>
      <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
        Providing efficient public administrative services to the citizens of Noakhali Division.
      </p>
      <a
        href="#contact"
        className="inline-block bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
      >
        Contact Office
      </a>
    </div>
  </section>
);

export default HeroSection;
