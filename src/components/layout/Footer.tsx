import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="relative bg-primary text-primary-foreground mt-32 overflow-hidden">
    <div className="absolute inset-0 pattern-bg opacity-[0.08]" />
    <div className="container relative py-20 grid md:grid-cols-4 gap-12">
      <div>
        <div className="font-display text-3xl">Ankara<span className="italic font-serif-luxe">Vogue</span></div>
        <p className="font-cinzel text-[10px] mt-2 text-primary-foreground/60 uppercase tracking-[0.3em]">Ghana / Couture</p>
        <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70 max-w-xs">
          Premium African fashion blending traditional Ankara prints with contemporary elegance, direct ordering, and bespoke atelier service.
        </p>
      </div>
      <div>
        <h4 className="font-cinzel text-xs mb-6 text-primary-foreground/80 uppercase tracking-[0.24em]">Explore</h4>
        <ul className="space-y-3 text-sm font-light">
          <li><Link to="/shop" className="story-link">Shop</Link></li>
          <li><Link to="/about" className="story-link">Our Story</Link></li>
          <li><Link to="/contact" className="story-link">Contact</Link></li>
          <li><a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="story-link">Custom Orders</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-cinzel text-xs mb-6 text-primary-foreground/80 uppercase tracking-[0.24em]">Connect</h4>
        <ul className="space-y-3 text-sm font-light">
          <li><a href="https://instagram.com/ankaravogue.gh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><Instagram className="h-4 w-4" /> @ankaravogue.gh</a></li>
          <li><a href="https://wa.me/233533824045" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><MessageCircle className="h-4 w-4" /> +233 533 824 045</a></li>
          <li><a href="mailto:hello@ankaravogue.com" className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4" /> hello@ankaravogue.com</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-cinzel text-xs mb-6 text-primary-foreground/80 uppercase tracking-[0.24em]">Newsletter</h4>
        <p className="text-sm font-light text-primary-foreground/70 mb-4">First access to drops, fittings, and private releases.</p>
        <a href="mailto:hello@ankaravogue.com?subject=Join%20the%20Ankara%20Vogue%20newsletter" className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-xs font-cinzel uppercase tracking-[0.22em] hover:bg-primary-foreground hover:text-primary transition-colors">
          Join The List
        </a>
      </div>
    </div>
    <div className="container border-t border-primary-foreground/10 py-6 text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-2">
      <p>(c) {new Date().getFullYear()} Ankara Vogue. All rights reserved.</p>
      <p>Crafted with heritage in Accra, Ghana.</p>
    </div>
  </footer>
);
