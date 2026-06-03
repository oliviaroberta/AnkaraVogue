import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/shop/ProductCard";
import { Heart, MessageCircle, Minus, Plus, Star, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState({ x: 50, y: 50, on: false });
  const { add, toggleWish, wishlist } = useCart();

  if (!product) {
    return (
      <div className="container pt-40 pb-32 text-center font-display text-3xl">
        Piece not found.<br />
        <Link to="/shop" className="story-link text-base mt-6 inline-block">RETURN TO SHOP</Link>
      </div>
    );
  }

  const wished = wishlist.includes(product.id);
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);
  const waMsg = encodeURIComponent(`Hello Ankara Vogue, I'd like to order the ${product.name} (Size ${size}) - GHS ${(product.price * qty).toLocaleString()}.`);

  return (
    <>
      <section className="pt-32 pb-16 container">
        <nav className="text-xs text-muted-foreground mb-8 font-cinzel">
          <Link to="/" className="hover:text-primary">HOME</Link> / <Link to="/shop" className="hover:text-primary">SHOP</Link> / <span className="text-primary">{product.name.toUpperCase()}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-muted cursor-zoom-in"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setZoom({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100, on: true });
              }}
              onMouseLeave={() => setZoom((current) => ({ ...current, on: false }))}
            >
              <img
                src={product.image}
                alt={product.name}
                style={zoom.on ? { transformOrigin: `${zoom.x}% ${zoom.y}%`, transform: "scale(1.8)" } : {}}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[product, ...related].slice(0, 4).map((item, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start space-y-6">
            <div>
              <p className="font-cinzel text-[10px] text-secondary">{product.category.toUpperCase()}</p>
              <h1 className="font-display text-4xl md:text-5xl mt-2">{product.name}</h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                <span className="text-xs text-muted-foreground">142 reviews</span>
              </div>
              <p className="font-serif-luxe text-3xl mt-4">GHS {product.price.toLocaleString()}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div>
              <p className="font-cinzel text-[10px] mb-3">SIZE</p>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSize(option)}
                    className={cn(
                      "h-12 w-12 rounded-full text-xs border transition-all",
                      size === option ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-cinzel text-[10px] mb-3">QUANTITY</p>
              <div className="inline-flex items-center border border-border rounded-full">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-12 w-12 grid place-items-center"><Minus className="h-3.5 w-3.5" /></button>
                <span className="w-8 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="h-12 w-12 grid place-items-center"><Plus className="h-3.5 w-3.5" /></button>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <button onClick={() => add(product, size, qty)} className="flex-1 min-w-[200px] bg-primary text-primary-foreground py-4 rounded-full font-cinzel text-xs hover:bg-secondary transition-colors">ADD TO BAG</button>
              <button
                onClick={() => toggleWish(product.id)}
                aria-label="Wishlist"
                className={cn("h-14 w-14 grid place-items-center border border-primary rounded-full transition-all", wished && "bg-primary text-primary-foreground")}
              >
                <Heart className={cn("h-4 w-4", wished && "fill-current")} />
              </button>
            </div>

            <a href={`https://wa.me/233533824045?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full border border-secondary text-secondary py-4 rounded-full font-cinzel text-xs hover:bg-secondary hover:text-primary-foreground transition-all">
              <MessageCircle className="h-4 w-4" /> ORDER VIA WHATSAPP
            </a>

            <div className="flex items-center gap-3 text-xs text-muted-foreground border-t border-border pt-6">
              <Truck className="h-4 w-4" /> Free shipping within Ghana on orders over GHS 2,000.
            </div>

            <details className="border-t border-border pt-6">
              <summary className="font-cinzel text-xs cursor-pointer flex justify-between">FABRIC & CARE <span>+</span></summary>
              <p className="text-sm text-muted-foreground mt-3">{product.fabric}. Dry clean recommended. Iron on reverse.</p>
            </details>
            <details className="border-t border-border pt-6">
              <summary className="font-cinzel text-xs cursor-pointer flex justify-between">DELIVERY <span>+</span></summary>
              <p className="text-sm text-muted-foreground mt-3">Ghana 2-4 days. International 7-14 days. Express options at checkout.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="border-t border-border pt-16">
          <p className="font-cinzel text-xs text-secondary mb-2">- REVIEWS</p>
          <h2 className="font-display text-3xl md:text-5xl mb-10">Customer Voices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { n: "Akosua D.", t: "Stunning piece. The tailoring is everything." },
              { n: "Ifeoma R.", t: "Got it for a wedding - I felt like royalty." },
            ].map((review, i) => (
              <div key={i} className="border border-border rounded-2xl p-8">
                <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-gold text-gold" />)}</div>
                <p className="font-serif-luxe text-xl italic">"{review.t}"</p>
                <p className="font-cinzel text-[10px] mt-4">- {review.n.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <h2 className="font-display text-3xl md:text-5xl mb-10">You may also love</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
