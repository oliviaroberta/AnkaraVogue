import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Instagram, Star, Sparkles } from "lucide-react";
import { toast } from "sonner";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

const testimonials = [
  { name: "Adwoa M.", text: "Every stitch feels intentional. Ankara Vogue makes heritage feel unmistakably modern.", role: "Bride, Accra" },
  { name: "Nia O.", text: "The silhouettes are graceful, bold, and beautifully Ghanaian. I felt seen the moment I wore it.", role: "Creative Director, London" },
  { name: "Zainab A.", text: "From the print placement to the finish, it carries the confidence of a true luxury label.", role: "Stylist, Lagos" },
];

const bestSellers = products.filter((product) => product.badge === "Best Seller" || product.id === "ankara-grace" || product.id === "ankara-eshe");

const Home = () => {
  const [email, setEmail] = useState("");

  const joinNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You are on the atelier list.");
    setEmail("");
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern-bg" />
        <div className="container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center pt-32 pb-16">
          <div className="space-y-8 animate-fade-in">
            <p className="section-kicker text-secondary">The Heritage Edit / Accra Atelier</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.4rem] leading-[0.92] text-balance">
              Traditional <em className="font-serif-luxe italic font-light">Fabrics</em><br />
              Fused With<br />
              Contemporary <em className="font-serif-luxe italic font-light">Style</em>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
              Ankara Vogue is dedicated to redefining African fashion through bold prints, refined tailoring, and a luxury experience rooted in Ghanaian heritage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-cinzel text-xs hover:bg-secondary transition-all">
                Shop Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-8 py-4 rounded-full border border-primary font-cinzel text-xs hover:bg-primary hover:text-primary-foreground transition-all">
                Explore Styles
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-xl pt-4">
              {[["Checkout", "Direct order flow"], ["MoMo", "Mobile money ready"], ["Custom", "Bespoke fittings"]].map(([title, label]) => (
                <div key={title} className="editorial-card p-5">
                  <p className="font-display text-2xl">{title}</p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-luxe opacity-20 rounded-[3rem] blur-3xl" />
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-elegant">
              <img src={hero} alt="Ankara Vogue heritage couture" width={1536} height={1920} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-overlay" />
              <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
                <p className="section-kicker text-primary-foreground/70 mb-3">Featured Look</p>
                <p className="font-display text-3xl">The Grace Set</p>
                <p className="text-sm text-primary-foreground/80 mt-2 max-w-xs">Structured tailoring in premium Ankara wax cotton, cut for statement entrances.</p>
              </div>
            </div>
            <div className="hidden lg:block absolute -left-12 top-1/3 editorial-card p-5 animate-float">
              <Sparkles className="h-5 w-5 text-secondary mb-2" />
              <p className="font-display text-sm">Hand-tailored<br />in Accra</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-6 overflow-hidden border-y border-secondary/60">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 font-cinzel text-sm">
              {["Heritage Couture", "Accra Atelier", "Direct Checkout", "Mobile Money", "Custom Fits", "Modern African Luxury"].map((text) => (
                <span key={`${i}-${text}`}>{text}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="space-y-5">
            <p className="section-kicker text-secondary">Brand Essence</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">Luxury fashion shaped by <em className="font-serif-luxe italic">print, memory, and movement</em>.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Ankara Vogue blends traditional African prints with contemporary silhouettes so each piece feels rooted, elevated, and globally relevant.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Ankara", body: "African wax print heritage at the heart of every collection." },
              { title: "Vogue", body: "A fashion-forward perspective shaped for the modern wardrobe." },
              { title: "Craft", body: "Quality, creativity, and bespoke attention in every finish." },
            ].map((item) => (
              <div key={item.title} className="editorial-card p-6 hover-lift">
                <p className="font-display text-2xl mb-3">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <p className="section-kicker text-secondary mb-3">Featured Collection</p>
            <h2 className="font-display text-4xl md:text-6xl">The Edit</h2>
          </div>
          <Link to="/shop" className="story-link font-cinzel text-xs">View All</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-gradient-cream overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-[0.08]" />
        <div className="container relative">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-luxe opacity-12 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
                <img src={about} alt="Ankara Vogue atelier portrait" loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
              </div>
              <div className="absolute left-6 bottom-6 rounded-2xl bg-background/88 px-5 py-4 backdrop-blur-md shadow-soft">
                <p className="font-display text-2xl italic text-primary">Heritage, reimagined.</p>
                <p className="section-kicker text-secondary mt-2">Ankara Vogue</p>
              </div>
            </div>

            <div className="editorial-card p-8 md:p-10 lg:p-12">
              <div className="space-y-7">
                <p className="section-kicker text-secondary">About Ankara Vogue</p>
                <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-balance">
                  A new chapter in <em className="font-serif-luxe italic">African luxury</em>.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                  We strive to empower individuals with bold, stylish, and culturally rich apparel that celebrates heritage while embracing modern elegance.
                </p>
                <div className="grid gap-4">
                  {[
                    "Timeless logo direction inspired by vibrant Ankara authenticity",
                    "Collections designed for everyday elegance and statement occasions",
                    "Bespoke custom-fit service through direct atelier consultation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4 rounded-2xl bg-muted/70 px-5 py-4">
                      <div className="mt-0.5 rounded-full bg-secondary/12 p-2">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/88">{item}</p>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="story-link font-cinzel text-xs text-primary">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <p className="section-kicker text-secondary mb-3">Best Sellers</p>
            <h2 className="font-display text-4xl md:text-6xl">Most Loved</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">The silhouettes clients return for: statement sets, refined dresses, and atelier favorites.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-[0.08]" />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="section-kicker text-primary-foreground/60 mb-3">Client Praise</p>
            <h2 className="font-display text-4xl md:text-6xl">Worn & Adored</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 p-8 hover-lift">
                <div className="flex gap-1 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current text-gold" />)}</div>
                <p className="font-serif-luxe text-2xl italic leading-snug mb-6">"{testimonial.text}"</p>
                <p className="font-cinzel text-xs">{testimonial.name} <span className="text-primary-foreground/50">/ {testimonial.role}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="text-center mb-14">
          <p className="section-kicker text-secondary mb-3">New Arrivals</p>
          <h2 className="font-display text-4xl md:text-6xl">Fresh From The Atelier</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(3, 6).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="text-center mb-14">
          <p className="section-kicker text-secondary mb-3">Instagram</p>
          <h2 className="font-display text-4xl md:text-6xl">@ankaravogue.gh</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">A digital moodboard of color, tailoring, fittings, and finished pieces from the atelier.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[...products, ...products].slice(0, 6).map((product, i) => (
            <a key={i} href="https://instagram.com/ankaravogue.gh" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden rounded-xl">
              <img src={product.image} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors grid place-items-center">
                <Instagram className="h-6 w-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="editorial-card p-10 md:p-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="section-kicker text-secondary mb-4">Newsletter Signup</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Join the inner circle for drops, fittings, and private reveals.</h2>
            <p className="text-muted-foreground max-w-xl">Be first to know when new collections arrive and when custom-order slots open at the atelier.</p>
          </div>
          <form onSubmit={joinNewsletter} className="grid sm:grid-cols-[1fr_auto] gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="h-14 rounded-full border border-border bg-background px-6 outline-none focus:border-primary"
            />
            <button className="h-14 rounded-full bg-primary px-8 text-primary-foreground font-cinzel text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-colors">
              Join Now
            </button>
          </form>
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] ankara-panel p-10 md:p-20 text-primary-foreground">
          <div className="absolute inset-0 pattern-bg opacity-[0.12]" />
          <div className="relative max-w-2xl">
            <p className="section-kicker text-primary-foreground/60 mb-4">Custom Orders</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">Custom-tailored, just for you.</h2>
            <p className="text-lg text-primary-foreground/80 font-light mb-8 leading-relaxed">
              From measurements to final stitch, commission a one-of-one piece from our Accra atelier and complete your order directly through WhatsApp.
            </p>
            <a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-background text-primary px-8 py-4 rounded-full font-cinzel text-xs hover:bg-accent transition-colors">
              Request A Fitting <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
