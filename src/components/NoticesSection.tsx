import { CalendarDays } from "lucide-react";

const notices = [
  { title: "জাতীয় ছুটিতে অফিস বন্ধ", titleEn: "Office Closed on National Holiday", desc: "২৬শে মার্চ স্বাধীনতা দিবস উপলক্ষে অফিস বন্ধ থাকবে।", date: "২০ মার্চ, ২০২৬" },
  { title: "নতুন ডকুমেন্টেশন নির্দেশিকা", titleEn: "New Documentation Guidelines", desc: "সনদ যাচাইয়ের জন্য হালনাগাদ নির্দেশিকা প্রকাশিত হয়েছে।", date: "১০ মার্চ, ২০২৬" },
  { title: "জনশুনানির সময়সূচি", titleEn: "Public Hearing Schedule", desc: "এপ্রিলের প্রথম রবিবার মাসিক জনশুনানি অনুষ্ঠিত হবে।", date: "০১ মার্চ, ২০২৬" },
  { title: "কর্মী প্রশিক্ষণ কর্মসূচি", titleEn: "Staff Training Program", desc: "ডিজিটাল গভর্নেন্স বিষয়ে বার্ষিক কর্মী প্রশিক্ষণ আগামী মাসে শুরু হবে।", date: "২৫ ফেব্রু, ২০২৬" },
];

const NoticesSection = () => (
  <section id="notices" className="py-14 px-4 bg-card">
    <div className="container">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-heading text-xl font-bold text-foreground">নোটিশ ও আপডেট / Notices & Updates</h2>
        </div>
        <span className="text-xs text-primary font-medium cursor-pointer hover:underline">সব দেখুন →</span>
      </div>
      <div className="space-y-0 border rounded overflow-hidden">
        {notices.map((n, i) => (
          <div key={i} className="flex items-start gap-4 p-4 border-b last:border-b-0 bg-card hover:bg-section-alt transition-colors">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <CalendarDays className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm">{n.title}</h3>
              <p className="text-muted-foreground text-xs">{n.titleEn}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{n.desc}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap mt-0.5">{n.date}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NoticesSection;
