import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Mail, MessageCircle, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { products } from "@/data/products";
import { brand } from "@/data/brand";
import { ProductCard } from "@/components/shop/ProductCard";

const bestSellers = products.filter((product) => product.badge === "Best Seller" || product.id === "ankara-grace" || product.id === "ankara-eshe");

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#6d4b34] text-primary-foreground">
        <img
          src={hero}
          alt="Ankara Vogue heritage couture"
          width={1536}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,22,12,0.18)_0%,rgba(42,22,12,0.3)_35%,rgba(42,22,12,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%)]" />
        <div className="container relative flex min-h-screen items-end pb-16 pt-44 md:pb-20 md:pt-48">
          <div className="max-w-3xl space-y-5 animate-fade-in">
            <h1 className="font-display text-4xl leading-[0.98] text-primary-foreground sm:text-5xl md:text-6xl lg:text-[5.2rem]">
              Bold <em className="font-serif-luxe italic text-primary-foreground">prints</em>,
              <br />
              modern <em className="font-serif-luxe italic text-primary-foreground">elegance</em>,
              <br />
              unmistakably <em className="font-serif-luxe italic text-primary-foreground">Ankara Vogue</em>.
            </h1>
            <p className="max-w-xl text-base text-primary-foreground/82 md:text-lg">
              Designed for the unforgettable woman.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/shop" className="group inline-flex items-center gap-3 border border-primary-foreground/70 bg-primary-foreground/8 px-8 py-4 font-cinzel text-xs uppercase tracking-[0.24em] text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground hover:text-primary">
                Shop Here <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="inline-flex items-center border border-primary-foreground/40 px-8 py-4 font-cinzel text-xs uppercase tracking-[0.24em] text-primary-foreground/86 transition-all hover:border-primary-foreground hover:bg-primary-foreground/10">
                Explore Styles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-20 md:pt-24 pb-24 md:pb-28">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <p className="section-kicker text-secondary mb-3">Most Loved</p>
            <h2 className="font-display text-4xl md:text-5xl">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-primary px-6 py-3 font-cinzel text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
          {bestSellers.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="relative py-20 md:py-24 ankara-panel overflow-hidden text-primary-foreground">
        <div className="absolute inset-0 adinkra-overlay" />
        <div className="container relative">
          <div className="max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="section-kicker text-primary-foreground/72">About Ankara Vogue</p>
              </div>
              <div className="space-y-5">
                <h2 className="font-display text-4xl md:text-5xl leading-[1.02] text-balance text-primary-foreground">
                  Heritage, <em className="font-serif-luxe italic">reimagined</em>.
                </h2>
                <p className="max-w-2xl text-base md:text-lg leading-relaxed text-primary-foreground/84">
                  Ankara Vogue blends traditional African prints with modern elegance through bold tailoring and contemporary African luxury.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border border-primary-foreground/60 px-6 py-3 font-cinzel text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  Discover Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-28">
        <div className="mb-14 flex justify-between items-end gap-4 flex-wrap">
          <div>
          <p className="section-kicker text-secondary mb-3">New Arrivals</p>
          <h2 className="font-display text-4xl md:text-5xl">Fresh From The Atelier</h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-primary px-6 py-3 font-cinzel text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Shop New In
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
          {products.slice(3, 6).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div>
            <p className="section-kicker text-secondary mb-3">Client Praise</p>
            <h2 className="font-display text-3xl md:text-4xl">What Clients Say</h2>
          </div>
          <Link
            to="/about#testimonials"
            className="inline-flex items-center justify-center border border-primary px-6 py-3 font-cinzel text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View All Testimonials
          </Link>
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

      <section className="container pt-6 md:pt-8 pb-20 md:pb-24">
        <div className="editorial-card p-8 md:p-10 lg:p-12 text-center max-w-4xl mx-auto">
          <p className="section-kicker text-secondary mb-3">Socials</p>
          <h2 className="font-display text-3xl md:text-4xl">Stay Connected</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Follow the latest looks, reach the atelier directly, and stay close to new releases, fittings, and custom order updates.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-primary px-6 py-3 font-cinzel text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Instagram <Instagram className="h-4 w-4" />
            </a>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-primary px-6 py-3 font-cinzel text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-3 border border-primary px-6 py-3 font-cinzel text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Email <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="container pt-8 md:pt-10 pb-24 md:pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] ankara-panel p-10 md:p-20 text-primary-foreground">
          <div className="absolute inset-0 adinkra-overlay" />
          <div className="relative max-w-2xl">
            <p className="section-kicker text-primary-foreground mb-4">Custom Orders</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6 text-primary-foreground">Custom-tailored, just for you.</h2>
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
