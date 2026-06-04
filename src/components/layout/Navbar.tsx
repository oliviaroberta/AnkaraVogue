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
  const isHomeHero = loc.pathname === "/" && !scrolled;
  const logoSrc = isHomeHero ? "/logo-mark.png" : "/logo-navbar-stacked.png";

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
      isHomeHero
        ? "border-transparent bg-transparent"
        : "border-b border-border/80 bg-background/95 backdrop-blur-xl shadow-soft"
    )}>
      <div className={cn(
        "border-b transition-colors",
        isHomeHero ? "border-white/15 bg-transparent text-primary-foreground" : "border-border/60 bg-background/70 text-secondary"
      )}>
        <div className="container flex h-9 items-center justify-center text-center">
          <p className={cn(
            "font-cinzel text-[10px] font-semibold uppercase tracking-[0.28em]",
            isHomeHero ? "text-primary-foreground" : "text-secondary"
          )}>
            MADE IN GHANA | WORLDWIDE SHIPPING
          </p>
        </div>
      </div>
      <div className="container flex items-center justify-between h-[4.6rem] md:h-[5.1rem]">
        <button
          onClick={() => setMenu(true)}
          aria-label="Open menu"
          className={cn(
            "inline-flex items-center gap-2 md:hidden",
            isHomeHero ? "text-primary-foreground" : "text-foreground"
          )}
        >
          <Menu className="h-5 w-5" strokeWidth={1.6} />
          <span className={cn(
            "font-cinzel text-[11px] font-semibold uppercase tracking-[0.22em]",
            isHomeHero ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]" : ""
          )}>Menu</span>
        </button>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center md:hidden" aria-label="Ankara Vogue home">
          <img
            src={logoSrc}
            alt="Ankara Vogue"
            className={cn(
              "w-auto object-contain",
              isHomeHero ? "h-16 brightness-0 invert" : "h-10"
            )}
          />
        </Link>

        {isHomeHero ? (
          <>
            <Link to="/" className="hidden md:flex lg:flex items-center" aria-label="Ankara Vogue home">
              <img
                src={logoSrc}
                alt="Ankara Vogue"
                className="h-16 w-auto object-contain brightness-0 invert md:h-20"
              />
            </Link>

            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => cn(
                    "story-link font-cinzel text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]",
                    isActive && "text-primary-foreground"
                  )}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </>
        ) : (
          <>
            <Link to="/" className="hidden md:flex items-center" aria-label="Ankara Vogue home">
              <img
                src={logoSrc}
                alt="Ankara Vogue"
                className="h-12 w-auto object-contain md:h-14"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => cn(
                    "story-link text-[11px] tracking-[0.22em] uppercase font-light",
                    isActive && "text-primary font-normal"
                  )}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open cart"
            className={cn(
              "relative p-3 transition-colors",
              isHomeHero ? "text-primary-foreground hover:bg-white/10" : "rounded-full hover:bg-accent"
            )}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
            {count > 0 && (
              <span className={cn(
                "absolute top-1 right-1 text-[10px] h-4 w-4 grid place-items-center font-medium",
                isHomeHero ? "bg-[#ff7e8a] text-white" : "rounded-full bg-primary text-primary-foreground"
              )}>{count}</span>
            )}
          </button>
          {!isHomeHero && (
            <button onClick={() => setMenu(true)} aria-label="Open menu" className="hidden">
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>
          )}
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 z-50 bg-background transition-transform duration-500 md:hidden",
        menu ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center h-20 container border-b border-border/70">
          <Link to="/" className="flex items-center pr-4" aria-label="Ankara Vogue home">
            <img
              src={logoSrc}
              alt="Ankara Vogue"
              className="h-10 w-auto object-contain"
            />
          </Link>
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
