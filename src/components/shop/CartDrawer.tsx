import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

const formatMoney = (value: number) => `GHS ${value.toLocaleString()}`;

export const CartDrawer = () => {
  const { items, open, setOpen, remove, setQty, subtotal } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background">
        <SheetHeader className="px-6 py-6 border-b border-border">
          <SheetTitle className="font-display text-2xl text-left">Your Bag</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 grid place-items-center text-center px-6">
            <div>
              <p className="font-display text-3xl mb-2">Your bag awaits</p>
              <p className="text-sm text-muted-foreground mb-6">Begin your edit of heritage pieces.</p>
              <Link to="/shop" onClick={() => setOpen(false)} className="story-link font-cinzel text-xs inline-flex">Shop Collection</Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <div key={item.product.id + item.size} className="flex gap-4">
                  <img src={item.product.image} alt="" className="w-24 h-32 object-cover rounded-lg" />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-2">
                      <p className="font-display text-base">{item.product.name}</p>
                      <button onClick={() => remove(item.product.id, item.size)} aria-label="Remove"><X className="h-4 w-4" /></button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Size {item.size}</p>
                    <p className="font-serif-luxe mt-auto">{formatMoney(item.product.price * item.qty)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => setQty(item.product.id, item.size, item.qty - 1)} className="h-7 w-7 grid place-items-center border rounded-full"><Minus className="h-3 w-3" /></button>
                      <span className="text-sm w-4 text-center">{item.qty}</span>
                      <button onClick={() => setQty(item.product.id, item.size, item.qty + 1)} className="h-7 w-7 grid place-items-center border rounded-full"><Plus className="h-3 w-3" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border px-6 py-6 space-y-4">
              <div className="flex justify-between font-display text-xl">
                <span>Subtotal</span>
                <span>{formatMoney(subtotal)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping and payment confirmation continue at checkout with the atelier.</p>
              <Link to="/checkout" onClick={() => setOpen(false)} className="block w-full bg-primary text-primary-foreground text-center font-cinzel text-xs py-4 rounded-full uppercase tracking-[0.22em] hover:bg-secondary transition-colors">
                Checkout
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
