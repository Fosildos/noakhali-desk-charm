const AboutSection = () => (
  <section id="about" className="py-14 px-4 bg-card">
    <div className="container">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-primary rounded-full" />
        <h2 className="font-heading text-xl font-bold text-foreground">
          কার্যালয় সম্পর্কে / About the Office
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-muted-foreground leading-relaxed text-sm mb-3">
            বিভাগীয় কার্যালয় নোয়াখালী হলো বাংলাদেশ সরকারের অধীনে নোয়াখালী বিভাগের প্রধান প্রশাসনিক সংস্থা।
            কার্যকর শাসন নিশ্চিত করার জন্য প্রতিষ্ঠিত, এই কার্যালয় বিভিন্ন সরকারি বিভাগের মধ্যে সমন্বয় করে
            এবং এলাকায় জনসেবা প্রদানের কেন্দ্রবিন্দু হিসেবে কাজ করে।
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            The Divisional Office Noakhali is the primary administrative body for the Noakhali Division
            under the Government of Bangladesh. Established to ensure effective governance, the office
            coordinates between various government departments and serves as the central point for public
            service delivery in the region.
          </p>
        </div>
        <div className="bg-section-alt rounded border p-5">
          <h3 className="font-semibold text-foreground mb-3 text-sm">
            প্রধান দায়িত্বসমূহ / Key Responsibilities
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              আন্তঃবিভাগীয় সমন্বয় ও নীতি বাস্তবায়ন / Inter-departmental coordination
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              জনসেবা প্রদান ও নাগরিক সহায়তা / Public service delivery
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              প্রশাসনিক তত্ত্বাবধান ও কর্মী ব্যবস্থাপনা / Administrative oversight
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              নথি প্রক্রিয়াকরণ ও রেকর্ড রক্ষণাবেক্ষণ / Document processing
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
