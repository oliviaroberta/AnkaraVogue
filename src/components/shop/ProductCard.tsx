import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export const ProductCard = ({ product, onQuickView }: { product: Product; onQuickView?: (p: Product) => void }) => {
  const { add, toggleWish, wishlist } = useCart();
  const wished = wishlist.includes(product.id);

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/5]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-4 left-4 bg-background/95 backdrop-blur text-[10px] font-cinzel px-3 py-1.5 rounded-full">{product.badge}</span>
        )}
        <button
          onClick={() => toggleWish(product.id)}
          aria-label="Wishlist"
          className={cn(
            "absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-background/95 backdrop-blur transition-all hover:scale-110",
            wished && "text-secondary"
          )}
        >
          <Heart className={cn("h-4 w-4", wished && "fill-current")} strokeWidth={1.4} />
        </button>

        <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={() => add(product)}
            className="flex-1 bg-primary text-primary-foreground text-xs font-cinzel py-3 rounded-full hover:bg-secondary transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> ADD
          </button>
          {onQuickView && (
            <button onClick={() => onQuickView(product)} aria-label="Quick view" className="h-11 w-11 grid place-items-center bg-background rounded-full hover:bg-accent">
              <Eye className="h-4 w-4" strokeWidth={1.4} />
            </button>
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between items-start gap-3">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{product.category}</p>
          <Link to={`/product/${product.id}`} className="font-display text-lg mt-1 block hover:italic transition-all">{product.name}</Link>
        </div>
        <p className="font-serif-luxe text-lg mt-4">GHS {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};
