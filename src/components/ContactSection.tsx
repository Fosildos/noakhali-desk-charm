import { useState } from "react";

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
    <section id="contact" className="py-16 px-4 bg-secondary">
      <div className="container max-w-xl">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Us</h2>
        {submitted ? (
          <div className="bg-card border rounded-md p-6 text-center">
            <p className="text-foreground font-semibold">Thank you for your message!</p>
            <p className="text-muted-foreground text-sm mt-1">We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input id="name" name="name" type="text" className="w-full border bg-card rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input id="email" name="email" type="email" className="w-full border bg-card rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full border bg-card rounded-md px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity text-sm">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
