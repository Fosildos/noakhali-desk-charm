import { MapPin, Clock, Phone, Mail } from "lucide-react";

const items = [
  { icon: MapPin, label: "ঠিকানা / Address", value: "বিভাগীয় কার্যালয় কমপ্লেক্স\nমাইজদী কোর্ট, নোয়াখালী\nবাংলাদেশ" },
  { icon: Clock, label: "কর্মঘণ্টা / Working Hours", value: "রবিবার – বৃহস্পতিবার\nসকাল ৯:০০ – বিকাল ৫:০০" },
  { icon: Phone, label: "ফোন / Phone", value: "+৮৮০-৩২১-XXXXXXX" },
  { icon: Mail, label: "ইমেইল / Email", value: "info@divnoakhali.gov.bd" },
];

const OfficeInfoSection = () => (
  <section className="py-14 px-4 bg-section-alt">
    <div className="container">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-heading text-xl font-bold text-foreground">অফিস তথ্য / Office Information</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.label} className="bg-card border rounded p-5">
            <div className="flex items-center gap-2 mb-2">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground text-sm">{item.label}</span>
            </div>
            <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OfficeInfoSection;
