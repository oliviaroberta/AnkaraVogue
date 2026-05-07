import { useState } from "react";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { products } from "@/data/products";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Ankara Vogue enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:hello@ankaravogue.com?subject=${subject}&body=${body}`;
    toast.success("Your mail app has been opened.");
  };

  return (
    <>
      <section className="pt-36 pb-16 container">
        <p className="section-kicker text-secondary mb-4">Get In Touch</p>
        <h1 className="font-display text-5xl md:text-7xl text-balance">Let's <em className="font-serif-luxe italic">talk</em>.</h1>
        <p className="text-muted-foreground mt-6 max-w-2xl text-lg font-light leading-relaxed">
          Bespoke commissions, press, partnerships, or simple enquiries. Reach the atelier directly by email, Instagram, or WhatsApp.
        </p>
      </section>

      <section className="container pb-24 grid lg:grid-cols-[1fr_0.95fr] gap-16">
        <form onSubmit={onSubmit} className="editorial-card p-8 md:p-10 space-y-6">
          <div>
            <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-cinzel text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-colors">
            Send Message
          </button>
        </form>

        <div className="space-y-8">
          <div className="editorial-card p-8">
            <h3 className="font-display text-2xl mb-6">Atelier Contact</h3>
            <div className="space-y-5 text-sm">
              <div className="flex gap-4 items-start"><MapPin className="h-4 w-4 mt-0.5 text-secondary" /><span>Osu, Accra<br />Ghana</span></div>
              <a href="tel:+233533824045" className="flex gap-4 items-start hover:text-primary"><Phone className="h-4 w-4 mt-0.5 text-secondary" /><span>+233 533 824 045</span></a>
              <a href="mailto:hello@ankaravogue.com" className="flex gap-4 items-start hover:text-primary"><Mail className="h-4 w-4 mt-0.5 text-secondary" /><span>hello@ankaravogue.com</span></a>
              <a href="https://instagram.com/ankaravogue.gh" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-start hover:text-primary"><Instagram className="h-4 w-4 mt-0.5 text-secondary" /><span>@ankaravogue.gh</span></a>
            </div>
          </div>

          <a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="ankara-panel flex items-center gap-4 text-primary-foreground rounded-[2rem] p-8 hover-lift">
            <div className="h-14 w-14 rounded-full bg-primary-foreground/10 grid place-items-center">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-xl">Chat on WhatsApp</p>
              <p className="text-xs text-primary-foreground/60 font-cinzel mt-1 uppercase tracking-[0.2em]">Fastest Response / Mon-Sat</p>
            </div>
          </a>
        </div>
      </section>

      <section className="container pb-24">
        <div className="text-center mb-10">
          <p className="section-kicker text-secondary mb-3">Instagram</p>
          <h2 className="font-display text-3xl md:text-5xl">@ankaravogue.gh</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((product) => (
            <a key={product.id} href="https://instagram.com/ankaravogue.gh" target="_blank" rel="noopener noreferrer" className="group aspect-square overflow-hidden rounded-xl">
              <img src={product.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
