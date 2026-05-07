import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

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
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Ankara Vogue is dedicated to redefining African fashion by seamlessly blending traditional Ankara prints with contemporary designs. We empower individuals with bold, stylish, culturally rich apparel that celebrates heritage while embracing modern elegance.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          The brand identity was created to feel timeless and stylish, with elegant typography and color decisions inspired by vibrant Ankara prints to preserve cultural authenticity.
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
            To redefine African fashion through bold, stylish, and culturally rich apparel that celebrates heritage while embracing modern elegance.
          </p>
        </div>
        <div>
          <p className="section-kicker text-primary-foreground/60 mb-4">Vision</p>
          <h3 className="font-display text-3xl md:text-4xl mb-4">Our Vision</h3>
          <p className="font-serif-luxe text-2xl italic leading-relaxed text-primary-foreground/90">
            To become a globally recognized fashion brand that elevates African prints to the forefront of modern style through creativity, ethical production, and community empowerment.
          </p>
        </div>
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
              <p className="text-muted-foreground mt-3 font-light leading-relaxed">{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
