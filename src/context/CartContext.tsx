import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product } from "@/data/products";

export type CartItem = { product: Product; size: string; qty: number };

type CartCtx = {
  items: CartItem[];
  wishlist: string[];
  add: (p: Product, size?: string, qty?: number) => void;
  remove: (id: string, size: string) => void;
  setQty: (id: string, size: string, qty: number) => void;
  toggleWish: (id: string) => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (b: boolean) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("av_cart") || "[]"); } catch { return []; }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("av_wish") || "[]"); } catch { return []; }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => { localStorage.setItem("av_cart", JSON.stringify(items)); }, [items]);
  useEffect(() => { localStorage.setItem("av_wish", JSON.stringify(wishlist)); }, [wishlist]);

  const add: CartCtx["add"] = (p, size = "M", qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.product.id === p.id && x.size === size);
      if (i >= 0) { const c = [...prev]; c[i] = { ...c[i], qty: c[i].qty + qty }; return c; }
      return [...prev, { product: p, size, qty }];
    });
    setOpen(true);
  };
  const remove: CartCtx["remove"] = (id, size) => setItems(prev => prev.filter(x => !(x.product.id === id && x.size === size)));
  const setQty: CartCtx["setQty"] = (id, size, qty) => setItems(prev => prev.map(x => x.product.id === id && x.size === size ? { ...x, qty: Math.max(1, qty) } : x));
  const toggleWish: CartCtx["toggleWish"] = id => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const clear = () => setItems([]);

  const count = items.reduce((s, x) => s + x.qty, 0);
  const subtotal = items.reduce((s, x) => s + x.qty * x.product.price, 0);

  return <Ctx.Provider value={{ items, wishlist, add, remove, setQty, toggleWish, count, subtotal, open, setOpen, clear }}>{children}</Ctx.Provider>;
};

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
};
