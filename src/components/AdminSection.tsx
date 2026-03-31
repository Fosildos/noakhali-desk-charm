import { User } from "lucide-react";
import { useLang, t } from "@/contexts/LangContext";

const AdminSection = () => {
  const { lang } = useLang();
  return (
    <section className="py-14 px-4 bg-card">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-heading text-xl font-bold text-foreground">
            {t("প্রশাসন", "Administration", lang)}
          </h2>
        </div>
        <div className="bg-section-alt border rounded p-6 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">
              {t("প্রশাসক – বিভাগীয় কার্যালয় নোয়াখালী", "Admin – Divisional Office Noakhali", lang)}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "প্রশাসন দৈনন্দিন কার্যক্রম, কর্মী সমন্বয়, নীতি প্রয়োগ পরিচালনা করে এবং বিভাগের সকল জনসেবা সময়মত প্রদান নিশ্চিত করে। প্রশাসনিক কার্যালয় সময়সূচি, সম্পদ বরাদ্দ এবং সরকারি নির্দেশনা মেনে চলা পরিচালনা করে।",
                "The administration oversees day-to-day operations, staff coordination, policy enforcement, and ensures timely delivery of all public services within the division. The admin office manages scheduling, resource allocation, and compliance with government directives.",
                lang
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
