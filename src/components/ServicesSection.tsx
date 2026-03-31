import { FileText, Users, Shield, Landmark, BookOpen, HelpCircle } from "lucide-react";
import { useLang, t } from "@/contexts/LangContext";

const services = [
  { icon: FileText, bn: "প্রশাসনিক সহায়তা", en: "Administrative Support", descBn: "সাধারণ প্রশাসনিক সহায়তা ও আন্তঃবিভাগীয় সমন্বয়।", descEn: "General administrative assistance and inter-departmental coordination." },
  { icon: BookOpen, bn: "ডকুমেন্টেশন প্রক্রিয়াকরণ", en: "Documentation Processing", descBn: "সরকারি দলিলপত্র ও সনদ প্রক্রিয়াকরণ ও যাচাইকরণ।", descEn: "Processing and verification of official documents and certificates." },
  { icon: Users, bn: "জনসহায়তা", en: "Public Assistance", descBn: "সরকারি কর্মসূচি ও জনঅনুসন্ধানের জন্য সরাসরি সহায়তা।", descEn: "Direct assistance for government programs and public inquiries." },
  { icon: Landmark, bn: "রাজস্ব আদায়", en: "Revenue Collection", descBn: "সরকারি রাজস্ব ও কর সংক্রান্ত সেবা সুবিধা প্রদান।", descEn: "Facilitation of government revenue and tax-related services." },
  { icon: Shield, bn: "আইন-শৃঙ্খলা সমন্বয়", en: "Law & Order", descBn: "জননিরাপত্তার জন্য আইন প্রয়োগকারী সংস্থার সাথে সমন্বয়।", descEn: "Coordination with law enforcement for public safety." },
  { icon: HelpCircle, bn: "নাগরিক অভিযোগ", en: "Citizen Grievance", descBn: "জনঅভিযোগ গ্রহণ ও সমাধান।", descEn: "Handling public complaints and grievance resolution." },
];

const ServicesSection = () => {
  const { lang } = useLang();
  return (
    <section id="services" className="py-14 px-4 bg-section-alt">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-heading text-xl font-bold text-foreground">
            {t("আমাদের সেবা", "Our Services", lang)}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.en} className="bg-card border rounded p-5 hover:border-primary/40 transition-colors group">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{t(s.bn, s.en, lang)}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{t(s.descBn, s.descEn, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
