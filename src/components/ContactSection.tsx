import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string).trim();
    const email = (form.get("email") as string).trim();
    const message = (form.get("message") as string).trim();

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email.";
    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 px-4 bg-section-alt">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="font-heading text-xl font-bold text-foreground">Contact Us</h2>
        </div>

        <div className="max-w-lg">
          {submitted ? (
            <div className="bg-card border border-primary/30 rounded p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-semibold">Message Sent Successfully!</p>
              <p className="text-muted-foreground text-sm mt-1">We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-card border rounded p-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">Full Name *</label>
                <input id="name" name="name" type="text" className="w-full border bg-background rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">Email Address *</label>
                <input id="email" name="email" type="email" className="w-full border bg-background rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">Message *</label>
                <textarea id="message" name="message" rows={4} className="w-full border bg-background rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                <Send className="w-4 h-4" />
                Submit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
