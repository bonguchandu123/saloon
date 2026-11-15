import type { Metadata } from 'next';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Hairstyle Home – Stylora Hair Salons',
  description: 'Discover trending silhouettes, bespoke hair transformations, and editorial looks.',
};

const hairstyles = [
  { name: 'The Italian Bob', category: 'Short Cuts', desc: 'Blunt ends with gentle internal layers that frame jawlines gracefully.' },
  { name: 'Sun-Drenched Balayage', category: 'Color Art', desc: 'Hand-painted multidimensional blonde highlights with buttery root shadows.' },
  { name: 'Sculpted Curtain Waves', category: 'Medium Cuts', desc: 'Face-contouring retro 70s volume adapted with modern effortless texture.' },
  { name: 'Seamless Silk Tape-Ins', category: 'Extensions', desc: '100% Remy human hair giving weightless length and natural volume.' },
  { name: 'Rich Copper Cinnamon', category: 'Color Art', desc: 'Warm auburn gloss formulated to amplify natural skin undertones.' },
  { name: 'Textured French Pixie', category: 'Short Cuts', desc: 'Soft feathery edges creating an effortless, wash-and-go Parisian flair.' },
];

export default function HairstyleHomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-dark text-center px-4 overflow-hidden pt-20">
        <div className="max-w-4xl mx-auto z-10">
          <p className="text-accent text-xs tracking-widest uppercase mb-4">Autumn / Winter Hair Lookbook</p>
          <h1 className="font-forum text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Curated Styles Crafted for Your Signature Silhouette
          </h1>
          <p className="text-zinc-400 font-jost text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From precision architectural bobs to cascading dimensional balayage, find the look that elevates your confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking" className="btn-accent w-full sm:w-auto">
              Book Hairstyle Session
            </Link>
            <Link href="/gallery" className="btn-outline w-full sm:w-auto">
              Browse Lookbook
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Quick Strip */}
      <BookingStrip />

      {/* Featured Hairstyles Catalog */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Trending Right Now</p>
          <h2 className="font-forum text-3xl sm:text-4xl lg:text-5xl text-white">
            Signature Hairstyles of the Season
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hairstyles.map((style) => (
            <div
              key={style.name}
              className="bg-dark-card border border-dark-border p-6 hover:border-accent/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-64 bg-zinc-900 border border-dark-border mb-6 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-zinc-800 group-hover:text-accent/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-accent text-xs uppercase tracking-widest block mb-1">{style.category}</span>
                <h3 className="font-forum text-2xl text-white mb-2 group-hover:text-accent transition-colors">{style.name}</h3>
                <p className="text-zinc-400 text-sm font-jost leading-relaxed mb-6">{style.desc}</p>
              </div>

              <Link
                href="/booking"
                className="text-xs uppercase tracking-widest text-accent hover:text-white font-medium inline-flex items-center gap-2"
              >
                Request This Look →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}

