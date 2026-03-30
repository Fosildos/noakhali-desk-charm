import { User } from "lucide-react";

const AdminSection = () => (
  <section className="py-14 px-4 bg-card">
    <div className="container">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-heading text-xl font-bold text-foreground">Administration</h2>
      </div>
      <div className="bg-section-alt border rounded p-6 flex flex-col sm:flex-row items-start gap-5">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1">Admin – Divisional Office Noakhali</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The administration oversees day-to-day operations, staff coordination, policy enforcement, 
            and ensures timely delivery of all public services within the division. The admin office 
            manages scheduling, resource allocation, and compliance with government directives.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AdminSection;
