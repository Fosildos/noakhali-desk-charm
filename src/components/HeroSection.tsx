import govEmblem from "@/assets/gov-emblem.png";

const HeroSection = () => (
  <section className="bg-banner text-banner-foreground">
    <div className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={govEmblem}
          alt="Government of Bangladesh Emblem"
          className="w-28 h-28 md:w-36 md:h-36 object-contain"
          width={512}
          height={512}
        />
        <div className="text-center md:text-left">
          <div className="inline-block bg-primary-foreground/20 text-sm px-3 py-1 rounded mb-4">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার / Government of Bangladesh
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2 leading-tight">
            বিভাগীয় কার্যালয়, নোয়াখালী
          </h1>
          <p className="text-banner-foreground/70 text-lg md:text-xl mb-4">
            Divisional Office, Noakhali
          </p>
          <p className="text-banner-foreground/85 text-base mb-6 max-w-lg mx-auto md:mx-0">
            নোয়াখালী বিভাগের নাগরিকদের দক্ষ প্রশাসনিক সেবা, ডকুমেন্টেশন এবং জনকল্যাণ কার্যক্রম প্রদান করা হয়।
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-block bg-primary-foreground text-primary font-semibold px-6 py-2.5 rounded text-sm hover:opacity-90 transition-opacity"
            >
              যোগাযোগ করুন / Contact Office
            </a>
            <a
              href="#services"
              className="inline-block border border-primary-foreground/50 text-primary-foreground font-medium px-6 py-2.5 rounded text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              আমাদের সেবা / Our Services
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-primary-foreground/10 border-t border-primary-foreground/20 overflow-hidden">
      <div className="container py-2 flex items-center gap-3">
        <span className="bg-primary-foreground text-primary text-xs font-bold px-2 py-0.5 rounded shrink-0">
          নোটিশ
        </span>
        <div className="overflow-hidden whitespace-nowrap">
          <span className="inline-block animate-marquee text-sm">
            ২৬শে মার্চ স্বাধীনতা দিবস উপলক্ষে অফিস বন্ধ থাকবে। | নতুন ডকুমেন্টেশন নির্দেশিকা প্রকাশিত হয়েছে। | এপ্রিলের প্রথম রবিবার মাসিক জনশুনানি অনুষ্ঠিত হবে।
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
