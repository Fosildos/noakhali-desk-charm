import { FileText, Users, Shield, Landmark, BookOpen, HelpCircle } from "lucide-react";

const services = [
  { icon: FileText, title: "প্রশাসনিক সহায়তা", titleEn: "Administrative Support", desc: "সাধারণ প্রশাসনিক সহায়তা ও আন্তঃবিভাগীয় সমন্বয়।" },
  { icon: BookOpen, title: "ডকুমেন্টেশন প্রক্রিয়াকরণ", titleEn: "Documentation Processing", desc: "সরকারি দলিলপত্র ও সনদ প্রক্রিয়াকরণ ও যাচাইকরণ।" },
  { icon: Users, title: "জনসহায়তা", titleEn: "Public Assistance", desc: "সরকারি কর্মসূচি ও জনঅনুসন্ধানের জন্য সরাসরি সহায়তা।" },
  { icon: Landmark, title: "রাজস্ব আদায়", titleEn: "Revenue Collection", desc: "সরকারি রাজস্ব ও কর সংক্রান্ত সেবা সুবিধা প্রদান।" },
  { icon: Shield, title: "আইন-শৃঙ্খলা সমন্বয়", titleEn: "Law & Order", desc: "জননিরাপত্তার জন্য আইন প্রয়োগকারী সংস্থার সাথে সমন্বয়।" },
  { icon: HelpCircle, title: "নাগরিক অভিযোগ", titleEn: "Citizen Grievance", desc: "জনঅভিযোগ গ্রহণ ও সমাধান।" },
];

const ServicesSection = () => (
  <section id="services" className="py-14 px-4 bg-section-alt">
    <div className="container">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-heading text-xl font-bold text-foreground">আমাদের সেবা / Our Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.titleEn} className="bg-card border rounded p-5 hover:border-primary/40 transition-colors group">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-0.5">{s.title}</h3>
            <p className="text-muted-foreground text-xs mb-1">{s.titleEn}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
