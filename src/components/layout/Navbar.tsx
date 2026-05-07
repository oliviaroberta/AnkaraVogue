import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const loc = useLocation();

  useEffect(() => { setMenu(false); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500",
      scrolled ? "bg-background/90 backdrop-blur-xl shadow-soft border-b border-border" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">Ankara<span className="italic font-serif-luxe text-secondary">Vogue</span></span>
          <span className="font-cinzel text-[9px] text-muted-foreground mt-1">GHANA / COUTURE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => cn(
                "story-link text-sm tracking-[0.18em] uppercase font-light",
                isActive && "text-primary font-normal"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)} aria-label="Open cart" className="relative p-3 hover:bg-accent rounded-full transition-colors">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
            {count > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] rounded-full h-4 w-4 grid place-items-center font-medium">{count}</span>
            )}
          </button>
          <button onClick={() => setMenu(true)} aria-label="Open menu" className="md:hidden p-3 hover:bg-accent rounded-full">
            <Menu className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 z-50 bg-background transition-transform duration-500 md:hidden",
        menu ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center h-20 container">
          <span className="font-display text-2xl">Ankara<span className="italic font-serif-luxe">Vogue</span></span>
          <button onClick={() => setMenu(false)} aria-label="Close menu" className="p-3"><X className="h-6 w-6" strokeWidth={1.2} /></button>
        </div>
        <nav className="container flex flex-col gap-2 mt-12">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={{ animationDelay: `${i * 80}ms` }}
              className="font-display text-4xl py-4 border-b border-border animate-fade-in"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
