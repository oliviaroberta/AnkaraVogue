import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export const ProductCard = ({ product, onQuickView }: { product: Product; onQuickView?: (p: Product) => void }) => {
  const { add, toggleWish, wishlist } = useCart();
  const wished = wishlist.includes(product.id);

  return (
    <div className="group w-full max-w-[186px] overflow-hidden border border-border/70 bg-background shadow-soft transition-transform duration-300 hover:-translate-y-1 md:max-w-[240px] lg:max-w-[280px]">
      <div className="relative aspect-[186/231.53] overflow-hidden bg-muted">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </Link>
        {product.badge && (
          <span
            className={cn(
              "absolute top-3 left-3 px-2.5 py-1 text-[9px] font-cinzel backdrop-blur",
              product.badge === "New"
                ? "bg-emerald-600 text-white"
                : "bg-background/95 text-foreground"
            )}
          >
            {product.badge}
          </span>
        )}
        <button
          onClick={() => toggleWish(product.id)}
          aria-label="Wishlist"
          className={cn(
            "absolute top-3 right-3 h-9 w-9 grid place-items-center bg-background/95 backdrop-blur transition-all hover:scale-110",
            wished && "text-secondary"
          )}
        >
          <Heart className={cn("h-4 w-4", wished && "fill-current")} strokeWidth={1.4} />
        </button>

        <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-0 opacity-100 transition-all duration-500 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            onClick={() => add(product)}
            className="flex-1 bg-primary text-primary-foreground text-[11px] font-cinzel py-2.5 hover:bg-secondary transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> ADD
          </button>
          {onQuickView && (
            <button onClick={() => onQuickView(product)} aria-label="Quick view" className="h-10 w-10 grid place-items-center bg-background hover:bg-accent">
              <Eye className="h-4 w-4" strokeWidth={1.4} />
            </button>
          )}
        </div>
      </div>
      <div className="border-t border-border/60 bg-background px-5 py-4">
        <Link to={`/product/${product.id}`} className="block truncate whitespace-nowrap font-display text-[0.98rem] leading-tight transition-all hover:italic md:text-[1.05rem]">
          {product.name}
        </Link>
        <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {product.category}
        </p>
        <p className="mt-3 whitespace-nowrap font-serif-luxe text-sm md:text-base">
          GHS {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
