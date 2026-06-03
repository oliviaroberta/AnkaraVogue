import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreditCard, Smartphone, Tag } from "lucide-react";
import { toast } from "sonner";
import { BackButton } from "@/components/BackButton";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const formatMoney = (value: number) => `GHS ${value.toLocaleString()}`;

const Checkout = () => {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [pay, setPay] = useState<"momo" | "card">("momo");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    provider: "MTN",
    momoNumber: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const shipping = subtotal > 2000 || subtotal === 0 ? 0 : 80;
  const total = Math.max(0, subtotal - discount) + shipping;

  const apply = () => {
    if (coupon.toUpperCase() === "VOGUE10") {
      setDiscount(subtotal * 0.1);
      toast.success("10% applied.");
    } else {
      toast.error("Invalid code.");
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = items.map((item) => `- ${item.product.name} / Size ${item.size} / Qty ${item.qty} / ${formatMoney(item.product.price * item.qty)}`);
    const paymentSummary = pay === "momo"
      ? `Payment: Mobile Money (${form.provider} / ${form.momoNumber || "number to confirm"})`
      : `Payment: Card (${form.cardNumber ? `ending ${form.cardNumber.slice(-4)}` : "details to confirm"})`;
    const message = encodeURIComponent(
      [
        "Hello Ankara Vogue, I would like to place an order.",
        "",
        `Name: ${form.firstName} ${form.lastName}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Address: ${form.address}, ${form.city}, ${form.region}`,
        paymentSummary,
        "",
        "Order Summary:",
        ...lines,
        "",
        `Subtotal: ${formatMoney(subtotal)}`,
        discount > 0 ? `Discount: - ${formatMoney(discount)}` : "",
        `Shipping: ${shipping === 0 ? "Free" : formatMoney(shipping)}`,
        `Total: ${formatMoney(total)}`,
      ].filter(Boolean).join("\n")
    );

    window.open(`https://wa.me/233533824045?text=${message}`, "_blank", "noopener,noreferrer");
    toast.success("Order summary sent to WhatsApp.");
    clear();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="container pt-40 pb-32 text-center">
        <BackButton fallbackTo="/shop" className="mb-8" />
        <h1 className="font-display text-5xl">Your bag is empty</h1>
        <Link to="/shop" className="story-link font-cinzel text-xs mt-8 inline-flex">Discover The Collection</Link>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 container">
      <BackButton fallbackTo="/shop" className="mb-8" />
      <p className="section-kicker text-secondary mb-3">Checkout</p>
      <h1 className="font-display text-4xl md:text-6xl mb-4">Complete your order</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">Orders are confirmed directly with the atelier. Submit your details and we will continue payment confirmation through WhatsApp.</p>

      <form onSubmit={submit} className="grid lg:grid-cols-[1.45fr_1fr] gap-12">
        <div className="space-y-10">
          <div className="editorial-card p-8 md:p-10">
            <h2 className="font-display text-2xl mb-6">Delivery</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                ["firstName", "First name", "text"],
                ["lastName", "Last name", "text"],
                ["email", "Email", "email"],
                ["phone", "Phone", "tel"],
              ].map(([key, label, type]) => (
                <div key={key}>
                  <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">{label}</label>
                  <input
                    required
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Address</label>
                <input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">City</label>
                <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Region</label>
                <input required value={form.region} onChange={(e) => setForm({ ...form, region: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" />
              </div>
            </div>
          </div>

          <div className="editorial-card p-8 md:p-10">
            <h2 className="font-display text-2xl mb-6">Payment Preference</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPay("momo")}
                className={cn("flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left", pay === "momo" ? "border-primary bg-accent" : "border-border")}
              >
                <Smartphone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-display text-lg leading-none">Mobile Money</p>
                  <p className="text-xs text-muted-foreground mt-1">MTN / Vodafone / AirtelTigo</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setPay("card")}
                className={cn("flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left", pay === "card" ? "border-primary bg-accent" : "border-border")}
              >
                <CreditCard className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-display text-lg leading-none">Visa / Mastercard</p>
                  <p className="text-xs text-muted-foreground mt-1">Card details for confirmation</p>
                </div>
              </button>
            </div>
            {pay === "momo" ? (
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Provider</label>
                  <input value={form.provider} onChange={(e) => setForm({ ...form, provider: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" placeholder="MTN" />
                </div>
                <div>
                  <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">MoMo Number</label>
                  <input value={form.momoNumber} onChange={(e) => setForm({ ...form, momoNumber: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" placeholder="024 ..." />
                </div>
              </div>
            ) : (
              <div className="mt-6 grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Card Number</label>
                  <input value={form.cardNumber} onChange={(e) => setForm({ ...form, cardNumber: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" placeholder="1234 5678 9012 3456" />
                </div>
                <div>
                  <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">Expiry</label>
                  <input value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="font-cinzel text-[10px] block mb-2 uppercase tracking-[0.2em]">CVC</label>
                  <input value={form.cvc} onChange={(e) => setForm({ ...form, cvc: e.target.value })} className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-primary" placeholder="123" />
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="bg-gradient-cream rounded-3xl p-8 h-fit border border-border lg:sticky lg:top-32 space-y-6">
          <h2 className="font-display text-2xl">Order Summary</h2>
          <div className="space-y-4 max-h-72 overflow-y-auto">
            {items.map((item) => (
              <div key={item.product.id + item.size} className="flex gap-3">
                <img src={item.product.image} alt="" className="w-16 h-20 object-cover rounded-lg" />
                <div className="flex-1 text-sm">
                  <p className="font-display">{item.product.name}</p>
                  <p className="text-xs text-muted-foreground">Size {item.size} / Qty {item.qty}</p>
                </div>
                <p className="font-serif-luxe text-sm">{formatMoney(item.product.price * item.qty)}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 border border-border rounded-full px-4">
                <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Promo code" className="bg-transparent flex-1 py-2.5 text-sm outline-none" />
              </div>
              <button type="button" onClick={apply} className="font-cinzel text-[10px] px-5 border border-primary rounded-full uppercase tracking-[0.2em]">Apply</button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-[0.16em]">Try VOGUE10 for 10% off.</p>
          </div>

          <div className="border-t border-border pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatMoney(subtotal)}</span></div>
            {discount > 0 && <div className="flex justify-between text-secondary"><span>Discount</span><span>- {formatMoney(discount)}</span></div>}
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatMoney(shipping)}</span></div>
            <div className="flex justify-between font-display text-2xl pt-3 border-t border-border mt-3">
              <span>Total</span><span>{formatMoney(total)}</span>
            </div>
          </div>

          <button className="w-full bg-primary text-primary-foreground py-4 rounded-full font-cinzel text-xs uppercase tracking-[0.22em] hover:bg-secondary transition-colors">
            Place Order Via WhatsApp
          </button>
        </aside>
      </form>
    </section>
  );
};

export default Checkout;
