const AboutSection = () => (
  <section id="about" className="py-14 px-4 bg-card">
    <div className="container">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-heading text-xl font-bold text-foreground">About the Office</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            The Divisional Office Noakhali is the primary administrative body for the Noakhali Division 
            under the Government of Bangladesh. Established to ensure effective governance, the office 
            coordinates between various government departments and serves as the central point for public 
            service delivery in the region.
          </p>
        </div>
        <div className="bg-section-alt rounded border p-5">
          <h3 className="font-semibold text-foreground mb-3 text-sm">Key Responsibilities</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              Inter-departmental coordination and policy implementation
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              Public service delivery and citizen assistance
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              Administrative oversight and staff management
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              Document processing and record maintenance
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
