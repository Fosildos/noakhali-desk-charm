import { FileText, Users, Shield, Landmark, BookOpen, HelpCircle } from "lucide-react";

const services = [
  { icon: FileText, title: "Administrative Support", desc: "General administrative assistance and inter-departmental coordination." },
  { icon: BookOpen, title: "Documentation Processing", desc: "Processing and verification of official documents and certificates." },
  { icon: Users, title: "Public Assistance", desc: "Direct assistance for government programs and public inquiries." },
  { icon: Landmark, title: "Revenue Collection", desc: "Facilitation of government revenue and tax-related services." },
  { icon: Shield, title: "Law & Order Coordination", desc: "Coordination with law enforcement for public safety." },
  { icon: HelpCircle, title: "Citizen Grievance", desc: "Handling public complaints and grievance resolution." },
];

const ServicesSection = () => (
  <section id="services" className="py-14 px-4 bg-section-alt">
    <div className="container">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-heading text-xl font-bold text-foreground">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.title} className="bg-card border rounded p-5 hover:border-primary/40 transition-colors group">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
