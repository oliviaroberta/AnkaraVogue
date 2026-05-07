import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  fabric: string;
  description: string;
};

export const products: Product[] = [
  { id: "ankara-grace", name: "Grace Two-Piece Set", price: 1850, category: "Two-piece sets", image: p1, badge: "New", fabric: "100% Premium Ankara Wax Cotton", description: "An exquisite two-piece statement crafted from hand-selected Ankara wax cotton. The Grace set marries traditional symmetry with a modern silhouette." },
  { id: "ankara-amara", name: "Amara Maxi Dress", price: 2200, category: "Dresses", image: p2, badge: "Best Seller", fabric: "Premium Ankara Wax Print", description: "A flowing maxi gown featuring our signature heritage motif. Designed for moments that demand quiet, regal confidence." },
  { id: "ankara-nia", name: "Nia Off-Shoulder Set", price: 1650, category: "Two-piece sets", image: p3, fabric: "Soft-touch Ankara Cotton Blend", description: "Romantic ruffled silhouette with bare shoulders and a sweeping skirt. Effortlessly feminine, distinctly Ankara." },
  { id: "ankara-zola", name: "Zola Wrap Skirt", price: 980, category: "Skirts", image: p4, badge: "New", fabric: "Heritage Ankara Print", description: "A statement wrap skirt with a hand-tied bow detail. Pair with anything; own every room." },
  { id: "ankara-eshe", name: "Eshe Off-Shoulder Top", price: 720, category: "Tops", image: p5, fabric: "Lustrous Ankara Brocade", description: "Sculpted bodice and gilded print make this top our most-loved silhouette." },
  { id: "ankara-imani", name: "Imani Tailored Suit", price: 3400, category: "Custom fits", image: p6, badge: "Couture", fabric: "Bespoke Ankara Tailoring", description: "Couture-cut suit hand-tailored in our Accra atelier. Power, poise, heritage." },
];

export const categories = ["All", "Dresses", "Two-piece sets", "Tops", "Skirts", "Custom fits"];
