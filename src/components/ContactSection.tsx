import { useState } from "react";
import { Send } from "lucide-react";
import { useLang, t } from "@/contexts/LangContext";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { lang } = useLang();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string).trim();
    const email = (form.get("email") as string).trim();
    const message = (form.get("message") as string).trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = t("নাম আবশ্যক।", "Name is required.", lang);
    if (!email) newErrors.email = t("ইমেইল আবশ্যক।", "Email is required.", lang);
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = t("সঠিক ইমেইল দিন।", "Enter a valid email.", lang);
    if (!message) newErrors.message = t("বার্তা আবশ্যক।", "Message is required.", lang);

    if (Object.keys(newErrors).length) { setErrors(newErrors); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 px-4 bg-section-alt">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-heading text-xl font-bold text-foreground">
            {t("যোগাযোগ করুন", "Contact Us", lang)}
          </h2>
        </div>
        <div className="max-w-lg">
          {submitted ? (
            <div className="bg-card border border-primary/30 rounded p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-semibold">{t("বার্তা সফলভাবে পাঠানো হয়েছে!", "Message Sent Successfully!", lang)}</p>
              <p className="text-muted-foreground text-sm mt-1">{t("আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।", "We will get back to you shortly.", lang)}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-card border rounded p-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">{t("পূর্ণ নাম *", "Full Name *", lang)}</label>
                <input id="name" name="name" type="text" className="w-full border bg-background rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">{t("ইমেইল ঠিকানা *", "Email Address *", lang)}</label>
                <input id="email" name="email" type="email" className="w-full border bg-background rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">{t("বার্তা *", "Message *", lang)}</label>
                <textarea id="message" name="message" rows={4} className="w-full border bg-background rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                <Send className="w-4 h-4" />
                {t("বার্তা পাঠান", "Submit Message", lang)}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
