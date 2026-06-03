import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
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
      <section className="pt-36 pb-12 container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <p className="section-kicker text-secondary mb-3">Collection</p>
            <h1 className="font-display text-5xl md:text-7xl">The Shop</h1>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Heritage couture made for the modern woman. Discover dresses, two-piece sets, tops, skirts, and custom fits from the Ankara Vogue atelier.
            </p>
          </div>
          <a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-primary px-6 py-3 font-cinzel text-xs uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Direct Order <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10">
          <aside className="space-y-6">
            <div className="editorial-card p-6 lg:sticky lg:top-32">
              <p className="section-kicker text-secondary mb-4">Categories</p>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCat(category)}
                    className={cn(
                      "px-5 py-3 rounded-full text-left font-cinzel text-[11px] uppercase tracking-[0.2em] whitespace-nowrap transition-all",
                      cat === category ? "bg-primary text-primary-foreground" : "bg-background hover:bg-accent"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-2xl mb-2">Need a custom fit?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Speak with the atelier directly for sizing guidance, custom measurements, and order confirmation.</p>
              </div>
            </div>
          </aside>

          <div>
            <div className="flex justify-between items-center border-b border-border pb-5 mb-8">
              <p className="text-sm text-muted-foreground">{list.length} pieces in this edit</p>
              <p className="section-kicker text-secondary">{cat === "All" ? "All categories" : cat}</p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
              {list.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={(selected) => { setQuick(selected); setSize("M"); }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!quick} onOpenChange={(open) => !open && setQuick(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background rounded-[2rem]">
          {quick && (
            <div className="grid md:grid-cols-2">
              <img src={quick.image} alt={quick.name} className="aspect-[4/5] object-cover w-full h-full" />
              <div className="p-8 md:p-10 flex flex-col">
                <p className="section-kicker text-secondary">{quick.category}</p>
                <h3 className="font-display text-3xl mt-2">{quick.name}</h3>
                <p className="font-serif-luxe text-2xl mt-3">{formatMoney(quick.price)}</p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{quick.description}</p>
                <div className="mt-6">
                  <p className="font-cinzel text-[10px] mb-3">Size</p>
                  <div className="flex gap-2">
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
