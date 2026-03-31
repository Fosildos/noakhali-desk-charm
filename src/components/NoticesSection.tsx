import { CalendarDays } from "lucide-react";
import { useLang, t } from "@/contexts/LangContext";

const notices = [
  { bn: "জাতীয় ছুটিতে অফিস বন্ধ", en: "Office Closed on National Holiday", descBn: "২৬শে মার্চ স্বাধীনতা দিবস উপলক্ষে অফিস বন্ধ থাকবে।", descEn: "The office will remain closed on 26th March for Independence Day.", date: { bn: "২০ মার্চ, ২০২৬", en: "20 Mar, 2026" } },
  { bn: "নতুন ডকুমেন্টেশন নির্দেশিকা", en: "New Documentation Guidelines", descBn: "সনদ যাচাইয়ের জন্য হালনাগাদ নির্দেশিকা প্রকাশিত হয়েছে।", descEn: "Updated guidelines for certificate verification have been published.", date: { bn: "১০ মার্চ, ২০২৬", en: "10 Mar, 2026" } },
  { bn: "জনশুনানির সময়সূচি", en: "Public Hearing Schedule", descBn: "এপ্রিলের প্রথম রবিবার মাসিক জনশুনানি অনুষ্ঠিত হবে।", descEn: "Monthly public hearing will be held on the first Sunday of April.", date: { bn: "০১ মার্চ, ২০২৬", en: "01 Mar, 2026" } },
  { bn: "কর্মী প্রশিক্ষণ কর্মসূচি", en: "Staff Training Program", descBn: "ডিজিটাল গভর্নেন্স বিষয়ে বার্ষিক কর্মী প্রশিক্ষণ আগামী মাসে শুরু হবে।", descEn: "Annual staff training program on digital governance begins next month.", date: { bn: "২৫ ফেব্রু, ২০২৬", en: "25 Feb, 2026" } },
];

const NoticesSection = () => {
  const { lang } = useLang();
  return (
    <section id="notices" className="py-14 px-4 bg-card">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="font-heading text-xl font-bold text-foreground">
              {t("নোটিশ ও আপডেট", "Notices & Updates", lang)}
            </h2>
          </div>
          <span className="text-xs text-primary font-medium cursor-pointer hover:underline">
            {t("সব দেখুন →", "View All →", lang)}
          </span>
        </div>
        <div className="space-y-0 border rounded overflow-hidden">
          {notices.map((n, i) => (
            <div key={i} className="flex items-start gap-4 p-4 border-b last:border-b-0 bg-card hover:bg-section-alt transition-colors">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <CalendarDays className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm">{t(n.bn, n.en, lang)}</h3>
                <p className="text-muted-foreground text-xs mt-0.5">{t(n.descBn, n.descEn, lang)}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap mt-0.5">{t(n.date.bn, n.date.en, lang)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
