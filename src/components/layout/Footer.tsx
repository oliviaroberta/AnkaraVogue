import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { brand } from "@/data/brand";

export const Footer = () => (
  <footer className="relative ankara-panel text-primary-foreground mt-32 overflow-hidden">
    <div className="absolute inset-0 adinkra-overlay" />
    <div className="container relative py-12 md:py-14 grid md:grid-cols-4 gap-8 md:gap-8">
      <div>
        <img
          src="/logo-navbar-stacked.png"
          alt="Ankara Vogue"
          className="h-14 w-auto object-contain brightness-0 invert"
        />
        <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70 max-w-xs">
          {brand.story} {brand.storyExtended}
        </p>
      </div>
      <div>
        <h4 className="font-cinzel text-xs mb-4 text-primary-foreground/80 uppercase tracking-[0.24em]">Explore</h4>
        <ul className="space-y-3 text-sm font-light">
          <li><Link to="/shop" className="story-link">Shop</Link></li>
          <li><Link to="/about" className="story-link">Our Story</Link></li>
          <li><Link to="/contact" className="story-link">Contact</Link></li>
          <li><a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="story-link">Custom Orders</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-cinzel text-xs mb-4 text-primary-foreground/80 uppercase tracking-[0.24em]">Connect</h4>
        <ul className="space-y-3 text-sm font-light">
          <li><a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><Instagram className="h-4 w-4" /> {brand.instagram}</a></li>
          <li><a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><MessageCircle className="h-4 w-4" /> {brand.phone}</a></li>
          <li><a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4" /> {brand.email}</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-cinzel text-xs mb-4 text-primary-foreground/80 uppercase tracking-[0.24em]">Brand Promise</h4>
        <p className="text-sm font-light text-primary-foreground/70 mb-4">{brand.logoDirection}</p>
        <a href={`mailto:${brand.email}?subject=Ankara%20Vogue%20Enquiry`} className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-xs font-cinzel uppercase tracking-[0.22em] hover:bg-primary-foreground hover:text-primary transition-colors">
          Contact The Atelier
        </a>
      </div>
    </div>
    <div className="container border-t border-primary-foreground/10 py-5 text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-2">
      <p>(c) {new Date().getFullYear()} Ankara Vogue. All rights reserved.</p>
      <p>Crafted with heritage in Accra, Ghana.</p>
    </div>
  </footer>
);
