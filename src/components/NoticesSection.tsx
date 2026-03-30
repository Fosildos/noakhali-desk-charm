import { CalendarDays } from "lucide-react";

const notices = [
  { title: "Office Closed on National Holiday", description: "The office will remain closed on 26th March for Independence Day.", date: "20 Mar, 2026" },
  { title: "New Documentation Guidelines", description: "Updated guidelines for certificate verification have been published.", date: "10 Mar, 2026" },
  { title: "Public Hearing Schedule", description: "Monthly public hearing will be held on the first Sunday of April.", date: "01 Mar, 2026" },
  { title: "Staff Training Program", description: "Annual staff training program on digital governance begins next month.", date: "25 Feb, 2026" },
];

const NoticesSection = () => (
  <section id="notices" className="py-14 px-4 bg-card">
    <div className="container">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-heading text-xl font-bold text-foreground">Notices & Updates</h2>
        </div>
        <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View All →</span>
      </div>
      <div className="space-y-0 border rounded overflow-hidden">
        {notices.map((n, i) => (
          <div key={i} className="flex items-start gap-4 p-4 border-b last:border-b-0 bg-card hover:bg-section-alt transition-colors">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <CalendarDays className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm">{n.title}</h3>
              <p className="text-muted-foreground text-xs mt-0.5">{n.description}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap mt-0.5">{n.date}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NoticesSection;
