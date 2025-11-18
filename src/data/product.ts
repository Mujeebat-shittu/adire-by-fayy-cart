import ImageOne from "../assets/short-step-gown.jpg"
import ImageTwo from "../assets/long-step-gown.png"
import ImageThree from "../assets/long-flare.jpg"
import ImageFour from "../assets/short-flare-gown.png"
import ImageFive from "../assets/long-parts-couple.jpg"
import ImageSix from "../assets/short-nikka.png"
import ImageSeven from "../assets/short-skirt.jpg"
import ImageEight from "../assets/boubou-gown.png"

 export type Product = {
  id: number;
  title: string;
  description: string;
  price: string;        // "$10,000" — for display
  numericPrice: number; // 10000 — for calculation
  image: string ;
  category: string;
  note: string;
};


export const products: Product[] = [
    {
        id: 1,
        title:"SHORT STEP GOWN",
        description: "A playful yet refined silhouette that flatters effortlessly. The Short Step Gown combines comfort with a touch of flair, perfect for casual outings or elevated daytime looks. Crafted in authentic Adire fabric, it speaks style in every step.",
        price: "₦10,000",
        numericPrice: 10000,
        image: ImageOne ,
        category: "gowns",
        note: "A chic, above-the-knee gown with layered steps that add texture and movement.",
    },
    {
        id: 2,
        title:"LONG STEP GOWN",
        description: "Graceful and easy to wear, the Long Step Gown flows beautifully with each movement. Designed for comfort and elegance, it’s ideal for days you want to feel confident and free while keeping your look rooted in tradition.",
        price: "₦22,000",
        numericPrice: 22000,
        image: ImageTwo ,
        category: "gowns",
        note: "A graceful, full-length gown featuring soft, cascading steps for effortless elegance.",
    },
    {
        id: 3,
        title:"LONG FLARE GOWN",
        description: "Timeless and fluid, the Long Flare Gown captures the essence of modern elegance. Its flowing form and Adire artistry make it perfect for occasions where ease meets sophistication.",
        price: "₦12,000",
        numericPrice: 12000,
        image: ImageThree ,
        category: "gowns",
        note: "A flowing, ankle-length gown with a flattering flare that moves beautifully.",
    },
    {
        id: 4,
        title:"SHORT FLARE GOWN",
        description: "Light, expressive, and full of movement. The Short Flare Gown brings a soft feminine energy to your look while keeping things chic and effortless. A go-to piece for simple gatherings or warm-weather moments.",
        price: "₦6,000",
        numericPrice: 6000,
        image: ImageFour ,
        category: "gowns",
        note: "A breezy, short gown with a flared hem for a playful, feminine touch.",
    },
    {
        id: 5,
        title:"LONG TROUSERS",
        description: "Tailored with precision and comfort in mind, our Long Trousers offer a modern fit that transitions seamlessly from day to evening. The Adire detailing adds a unique, bold touch that elevates everyday wear.",
        price: "₦8,000",
        numericPrice: 8000,
        image: ImageFive ,
        category: "pants",
        note: "Classic full-length trousers tailored for comfort and modern style.",
    },
    {
        id: 6,
        title:"SHORT NIKKA",
        description: "A playful yet refined silhouette that flatters effortlessly. The Short Step Gown combines comfort with a touch of flair, perfect for casual outings or elevated daytime looks. Crafted in authentic Adire fabric, it speaks style in every step.",
        price: "₦5,000",
        numericPrice: 5000,
        image: ImageSix ,
        category: "pants",
        note: "Easygoing above-the-knee shorts with a relaxed fit and cultural flair.",
    },
    {
        id: 7,
        title:"SHORT SKIRT",
        description: "Simple, stylish, and full of personality. The Short Skirt brings a playful edge to your Adire collection, pairing easily with tops for a laid-back or polished look. Designed for comfort and movement, it’s a wardrobe staple that celebrates effortless style.",
        price: "₦4,000",
        numericPrice: 4000,
        image: ImageSeven ,
        category: "skirts",
        note: "A simple, stylish skirt that sits above the knee and pairs effortlessly with any top.",
    },
    {
        id: 8,
        title:"BUBU GOWN",
        description: "Classic, flowing, and undeniably elegant. The Boubou Gown embodies the spirit of Adire — expressive, bold, and timeless. Designed for those who love freedom of movement and understated sophistication.",
        price: "₦16,000",
        numericPrice: 16000,
        image: ImageEight ,
        category: "gowns",
        note: "A loose, free-flowing gown that combines comfort with timeless Adire elegance.",
    },

]