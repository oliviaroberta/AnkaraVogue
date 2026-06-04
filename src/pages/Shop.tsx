import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { categories, products, Product } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const formatMoney = (value: number) => `GHS ${value.toLocaleString()}`;

const Shop = () => {
  const [cat, setCat] = useState("All");
  const [quick, setQuick] = useState<Product | null>(null);
  const [size, setSize] = useState("M");
  const { add } = useCart();

  const list = cat === "All" ? products : products.filter((product) => product.category === cat);

  return (
    <>
      <section className="border-b border-border/70 bg-background/80 pt-32 pb-5 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-center">
            <p className="font-cinzel text-[10px] uppercase tracking-[0.28em] text-secondary">Ready To Wear</p>
            <span className="hidden h-1 w-1 rounded-full bg-secondary/60 sm:block" />
            <p className="font-cinzel text-[10px] uppercase tracking-[0.28em] text-secondary">Custom Orders Available</p>
            <span className="hidden h-1 w-1 rounded-full bg-secondary/60 sm:block" />
            <a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="font-cinzel text-[10px] uppercase tracking-[0.28em] text-secondary hover:text-primary">
              Order On WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="container pt-14 pb-10 md:pt-16 md:pb-12">
        <BackButton className="mb-8" />
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-10 lg:items-end">
          <div>
            <nav className="mb-4 flex items-center gap-2 text-[10px] font-cinzel uppercase tracking-[0.24em] text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary">Shop</span>
            </nav>
            <p className="section-kicker text-secondary mb-3">Shop</p>
            <h1 className="font-display text-4xl md:text-6xl">Ankara Vogue Collection</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Discover dresses, sets, tops, skirts, and tailored pieces shaped by African print heritage and refined for modern wardrobes.
            </p>
          </div>
          <a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-primary px-6 py-3 font-cinzel text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto sm:justify-self-start lg:justify-self-end">
            Direct Order <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid gap-8 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-10">
          <aside className="space-y-6">
            <div className="rounded-[1.75rem] border border-border/70 bg-card p-5 sm:p-6 xl:sticky xl:top-32">
              <p className="section-kicker text-secondary mb-4">Browse</p>
              <h2 className="font-display text-2xl mb-5">Shop by category</h2>
              <div className="flex flex-wrap gap-2 pb-1 xl:flex-col">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCat(category)}
                    className={cn(
                      "rounded-full border border-border/80 px-5 py-3 text-left font-cinzel text-[11px] uppercase tracking-[0.2em] whitespace-nowrap transition-all",
                      cat === category ? "border-primary bg-primary text-primary-foreground" : "bg-background hover:border-primary/35 hover:bg-accent"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-xl mb-2">Need a custom fit?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Speak with the atelier directly for sizing guidance, custom measurements, and order confirmation.</p>
                <a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-cinzel text-[10px] uppercase tracking-[0.22em] text-primary hover:text-secondary">
                  Request bespoke <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-8 rounded-[1.5rem] border border-border/70 bg-card px-5 py-4 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-cinzel uppercase tracking-[0.24em] text-muted-foreground">Now Viewing</p>
                  <p className="mt-1 text-sm text-foreground/80">{cat === "All" ? "All categories" : cat}</p>
                </div>
                <p className="font-cinzel text-[10px] uppercase tracking-[0.24em] text-secondary">{list.length} pieces available</p>
              </div>
            </div>

            <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 xl:grid-cols-3 xl:gap-x-8 xl:gap-y-12">
              {list.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={(selected) => { setQuick(selected); setSize("M"); }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!quick} onOpenChange={(open) => !open && setQuick(null)}>
        <DialogContent className="max-w-[calc(100vw-1.5rem)] rounded-[1.5rem] bg-background p-0 overflow-hidden md:max-w-4xl md:rounded-[2rem]">
          {quick && (
            <div className="grid md:grid-cols-2">
              <img src={quick.image} alt={quick.name} className="aspect-[4/5] object-cover w-full h-full" />
              <div className="flex flex-col p-6 md:p-10">
                <p className="section-kicker text-secondary">{quick.category}</p>
                <h3 className="font-display text-3xl mt-2">{quick.name}</h3>
                <p className="font-serif-luxe text-2xl mt-3">{formatMoney(quick.price)}</p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{quick.description}</p>
                <div className="mt-6">
                  <p className="font-cinzel text-[10px] mb-3">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSize(option)}
                        className={cn(
                          "h-10 w-10 rounded-full text-xs border transition-all",
                          size === option ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-muted px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Fabric</p>
                  <p className="mt-2 text-sm">{quick.fabric}</p>
                </div>
                <div className="mt-auto pt-6 space-y-3">
                  <button onClick={() => { add(quick, size); setQuick(null); }} className="w-full bg-primary text-primary-foreground py-4 rounded-full font-cinzel text-xs uppercase tracking-[0.2em] hover:bg-secondary transition-colors">
                    Add To Bag
                  </button>
                  <Link to={`/product/${quick.id}`} onClick={() => setQuick(null)} className="story-link justify-center font-cinzel text-[10px] uppercase tracking-[0.2em]">
                    View Full Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Shop;
