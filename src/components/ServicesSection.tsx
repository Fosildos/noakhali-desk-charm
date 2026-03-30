const services = [
  {
    title: "Administrative Support",
    description: "General administrative assistance for government processes and inter-departmental coordination.",
  },
  {
    title: "Documentation Processing",
    description: "Processing and verification of official documents, certificates, and government records.",
  },
  {
    title: "Public Assistance",
    description: "Direct assistance to citizens regarding government programs, welfare schemes, and public inquiries.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-16 px-4 bg-secondary">
    <div className="container max-w-3xl">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Our Services</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-md border p-5">
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
