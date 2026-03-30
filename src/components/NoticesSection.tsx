const notices = [
  { title: "Office Closed on National Holiday", description: "The office will remain closed on 26th March for Independence Day.", date: "2026-03-20" },
  { title: "New Documentation Guidelines", description: "Updated guidelines for certificate verification have been published.", date: "2026-03-10" },
  { title: "Public Hearing Schedule", description: "Monthly public hearing will be held on the first Sunday of April.", date: "2026-03-01" },
];

const NoticesSection = () => (
  <section className="py-16 px-4">
    <div className="container max-w-3xl">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Notices & Updates</h2>
      <ul className="space-y-4">
        {notices.map((n) => (
          <li key={n.title} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-semibold text-foreground">{n.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{n.description}</p>
              </div>
              <span className="text-muted-foreground text-xs whitespace-nowrap mt-1">{n.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default NoticesSection;
