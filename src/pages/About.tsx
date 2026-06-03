import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";
import { Check } from "lucide-react";
import { brand } from "@/data/brand";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";

const timeline = [
  { y: "2019", t: "The Beginning", d: "A small Accra studio, three sewing machines, and a vision to redefine African luxury." },
  { y: "2021", t: "The First Arrivals", d: "The label begins shaping contemporary silhouettes using traditional Ankara prints and culturally rooted detailing." },
  { y: "2023", t: "The Atelier", d: "Ankara Vogue grows into a brand language of craftsmanship, confidence, and made-to-order elegance." },
  { y: "2026", t: "Heritage Reimagined", d: "The current chapter focuses on premium storytelling, global visibility, and a sharper luxury digital presence." },
];

const pillars = [
  {
    title: "Ankara",
    body: "The name anchors the brand in African wax print heritage, honoring the color, symbolism, and narrative power of traditional textiles.",
  },
  {
    title: "Vogue",
    body: "The second half of the name pushes the label forward into current fashion language, modern silhouettes, and confident styling.",
  },
  {
    title: "Identity",
    body: "Together, the brand stands for apparel that is culturally rich, elegant, bold, and wearable across modern lifestyles.",
  },
];

const bestSellers = products.filter((product) => product.badge === "Best Seller" || product.id === "ankara-grace" || product.id === "ankara-eshe");

const About = () => (
  <>
    <section className="pt-36 pb-16 container">
      <p className="section-kicker text-secondary mb-4">Our Story</p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl text-balance">
        Heritage, <em className="font-serif-luxe italic font-light">reimagined</em> for the modern world.
      </h1>
    </section>

    <section className="container pb-24">
      <div className="aspect-[21/9] rounded-[2rem] overflow-hidden shadow-elegant">
        <img src={hero} alt="Ankara Vogue atelier and campaign imagery" className="w-full h-full object-cover" />
      </div>
    </section>

    <section className="container pb-24 grid lg:grid-cols-[1fr_1.05fr] gap-16 items-center">
      <img src={about} alt="Ankara Vogue founder-inspired campaign portrait" className="rounded-[2rem] aspect-[4/5] object-cover shadow-soft" />
      <div className="space-y-6">
        <p className="section-kicker text-secondary">The Brand</p>
        <h2 className="font-display text-4xl md:text-5xl leading-tight">More than fabric.<br /><em className="font-serif-luxe italic">A movement.</em></h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {brand.story} {brand.storyExtended}
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {brand.logoDirection}
        </p>
      </div>
    </section>

    <section className="container pb-24">
      <div className="grid md:grid-cols-3 gap-5">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="editorial-card p-7 hover-lift">
            <p className="font-display text-3xl mb-4">{pillar.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="ankara-panel text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-[0.08]" />
      <div className="container relative grid md:grid-cols-2 gap-16">
        <div>
          <p className="section-kicker text-primary-foreground/60 mb-4">Mission</p>
          <h3 className="font-display text-3xl md:text-4xl mb-4">Our Mission</h3>
          <p className="font-serif-luxe text-2xl italic leading-relaxed text-primary-foreground/90">
            {brand.mission}
          </p>
        </div>
        <div>
          <p className="section-kicker text-primary-foreground/60 mb-4">Vision</p>
          <h3 className="font-display text-3xl md:text-4xl mb-4">Our Vision</h3>
          <p className="font-serif-luxe text-2xl italic leading-relaxed text-primary-foreground/90">
            {brand.vision}
          </p>
        </div>
      </div>
    </section>

    <section className="container py-24">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div>
          <p className="section-kicker text-secondary mb-4">Identity Direction</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">A brand language built to feel <em className="font-serif-luxe italic">timeless, stylish, and unmistakably African</em>.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {brand.values.map((value) => (
            <div key={value.title} className="editorial-card p-7 hover-lift">
              <p className="font-display text-2xl mb-3">{value.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container pb-24 md:pb-32">
      <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 items-start">
        <div>
          <p className="section-kicker text-secondary mb-4">Brand Philosophy</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">The full expression of the brand belongs <em className="font-serif-luxe italic">beyond the first impression</em>.</h2>
        </div>
        <div className="grid gap-4">
          {brand.promises.map((item) => (
            <div key={item} className="flex items-start gap-4 rounded-2xl bg-muted/70 px-5 py-4">
              <div className="mt-0.5 rounded-full bg-secondary/12 p-2">
                <Check className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/88">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container pb-24 md:pb-32">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
        <div>
          <p className="section-kicker text-secondary mb-3">Brand Vision</p>
          <h2 className="font-display text-4xl md:text-6xl">Designed To Travel Further</h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">{brand.vision}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestSellers.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>

    <section id="testimonials" className="container pb-24 md:pb-32 scroll-mt-32">
      <div className="text-center mb-14">
        <p className="section-kicker text-secondary mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-6xl">Worn & Adored</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The client voice behind the brand: styling confidence, fit, and the feeling of wearing Ankara Vogue.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {brand.testimonials.map((testimonial, i) => (
          <div key={i} className="editorial-card p-7 md:p-8">
            <p className="font-serif-luxe text-2xl italic leading-snug mb-5">"{testimonial.text}"</p>
            <p className="font-cinzel text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{testimonial.name} / {testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container py-24 md:py-32">
      <div className="text-center mb-16">
        <p className="section-kicker text-secondary mb-3">Journey</p>
        <h2 className="font-display text-4xl md:text-6xl">The Atelier Story</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-12">
        {timeline.map((item, i) => (
          <div key={i} className="grid grid-cols-[90px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-12 group">
            <div className="font-display text-3xl md:text-5xl text-secondary group-hover:text-primary transition-colors">{item.y}</div>
            <div className="border-l border-border pl-6 md:pl-10 pb-2">
              <h4 className="font-display text-2xl md:text-3xl">{item.t}</h4>
              <p className="text-muted-foreground mt-3 leading-relaxed">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
