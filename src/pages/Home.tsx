import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Star, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { products } from "@/data/products";
import { brand } from "@/data/brand";
import { ProductCard } from "@/components/shop/ProductCard";

const bestSellers = products.filter((product) => product.badge === "Best Seller" || product.id === "ankara-grace" || product.id === "ankara-eshe");

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern-bg" />
        <div className="container relative grid lg:grid-cols-[0.95fr_0.9fr] gap-10 lg:gap-12 items-center pt-28 pb-12">
          <div className="relative animate-scale-in order-1">
            <div className="absolute -inset-4 bg-gradient-luxe opacity-20 rounded-[3rem] blur-3xl" />
            <div className="relative aspect-[4/5] max-w-[26rem] mx-auto rounded-[2rem] overflow-hidden shadow-elegant">
              <img src={hero} alt="Ankara Vogue heritage couture" width={1536} height={1920} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-overlay" />
            </div>
            <div className="hidden lg:block absolute -left-12 top-1/3 editorial-card p-5 animate-float">
              <Sparkles className="h-5 w-5 text-secondary mb-2" />
              <p className="font-display text-sm">Hand-tailored<br />in Accra</p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in order-2">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.4rem] leading-[0.94] text-balance max-w-2xl">
              Traditional <em className="font-serif-luxe italic font-light">Fabrics</em><br />
              Refined For<br />
              Contemporary <em className="font-serif-luxe italic font-light">Style</em>
            </h1>
            <p className="max-w-lg text-sm md:text-base text-muted-foreground leading-relaxed">
              {brand.heroBody}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-cinzel text-xs hover:bg-secondary transition-all">
                Shop Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-7 py-3.5 rounded-full border border-primary font-cinzel text-xs hover:bg-primary hover:text-primary-foreground transition-all">
                Explore Styles
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-8 md:pt-10">
              {[["Heritage", "African print culture"], ["Modern", "Current fashion styling"], ["Craft", "Refined atelier finish"]].map(([title, label]) => (
                <div key={title} className="editorial-card p-4">
                  <p className="font-display text-xl">{title}</p>
                  <p className="mt-2 text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-28 md:pt-36 pb-28 md:pb-36">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="story-link font-cinzel text-xs">View All</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="relative py-32 md:py-44 bg-gradient-cream overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-[0.08]" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="editorial-card p-8 md:p-10 lg:p-12">
              <div className="space-y-7">
                <p className="section-kicker text-secondary">About Ankara Vogue</p>
                <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-balance">
                  Heritage, <em className="font-serif-luxe italic">reimagined</em>.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Ankara Vogue blends traditional African prints with modern elegance through bold tailoring and contemporary African luxury.
                </p>
                <Link to="/about" className="story-link font-cinzel text-xs text-primary">Discover Our Story</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-32 md:py-44">
        <div className="text-center mb-14">
          <p className="section-kicker text-secondary mb-3">New Arrivals</p>
          <h2 className="font-display text-4xl md:text-6xl">Fresh From The Atelier</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(3, 6).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="container py-32 md:py-36">
        <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div>
            <p className="section-kicker text-secondary mb-3">Client Praise</p>
            <h2 className="font-display text-3xl md:text-5xl">What Clients Say</h2>
          </div>
          <Link to="/about#testimonials" className="story-link font-cinzel text-xs">View All Testimonials</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {brand.testimonials.slice(0, 2).map((testimonial, i) => (
            <div key={i} className="editorial-card p-6 md:p-7">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-current text-gold" />)}</div>
              <p className="text-base md:text-lg leading-relaxed mb-5 text-foreground/88">"{testimonial.text}"</p>
              <p className="font-cinzel text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{testimonial.name} / {testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pt-16 md:pt-24 pb-28 md:pb-36">
        <div className="editorial-card p-8 md:p-10 lg:p-12 text-center max-w-4xl mx-auto">
          <p className="section-kicker text-secondary mb-3">Instagram</p>
          <h2 className="font-display text-4xl md:text-6xl">{brand.instagram}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">A living archive of prints, fittings, look details, and the evolving identity behind the atelier.</p>
          <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-full font-cinzel text-xs hover:bg-secondary transition-colors">
            Follow On Instagram <Instagram className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="container pt-16 md:pt-24 pb-28 md:pb-36">
        <div className="relative overflow-hidden rounded-[2.5rem] ankara-panel p-10 md:p-20 text-primary-foreground">
          <div className="absolute inset-0 pattern-bg opacity-[0.12]" />
          <div className="relative max-w-2xl">
            <p className="section-kicker text-primary-foreground/60 mb-4">Custom Orders</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">Custom-tailored, just for you.</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              From measurements to final stitch, commission a one-of-one piece from our Accra atelier and complete your order directly through WhatsApp.
            </p>
            <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-background text-primary px-8 py-4 rounded-full font-cinzel text-xs hover:bg-accent transition-colors">
              Request A Fitting <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
