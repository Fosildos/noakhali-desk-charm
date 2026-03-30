const OfficeInfoSection = () => (
  <section className="py-16 px-4 bg-secondary">
    <div className="container max-w-3xl">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Office Information</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-foreground mb-1">Address</h3>
          <p className="text-muted-foreground text-sm">Divisional Office Complex<br />Maijdee Court, Noakhali<br />Bangladesh</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
          <p className="text-muted-foreground text-sm">Sunday – Thursday<br />9:00 AM – 5:00 PM</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">Contact</h3>
          <p className="text-muted-foreground text-sm">Phone: +880-321-XXXXXXX<br />Email: info@divnoakhali.gov.bd</p>
        </div>
      </div>
    </div>
  </section>
);

export default OfficeInfoSection;
