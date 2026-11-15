'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';

const categories = ['All', 'Haircuts', 'Color & Highlights', 'Styling & Updos', 'Treatments'];

const galleryItems = [
  { id: 1, title: 'Platinum Ash Balayage', category: 'Color & Highlights', stylist: 'Marcus Chen', height: 'h-96' },
  { id: 2, title: 'Precision Bob & Gloss', category: 'Haircuts', stylist: 'Elena Vance', height: 'h-72' },
  { id: 3, title: 'Hollywood Waves Up-Style', category: 'Styling & Updos', stylist: 'Chloe Bennett', height: 'h-80' },
  { id: 4, title: 'Hand-Tied Weft Transformation', category: 'Treatments', stylist: 'Sophia Rossi', height: 'h-96' },
  { id: 5, title: 'Textured Shag & Curtain Bangs', category: 'Haircuts', stylist: 'Elena Vance', height: 'h-80' },
  { id: 6, title: 'Copper Sunset Red Melt', category: 'Color & Highlights', stylist: 'Marcus Chen', height: 'h-72' },
  { id: 7, title: 'Tailored Men’s Scissor Taper', category: 'Haircuts', stylist: 'David Kim', height: 'h-80' },
  { id: 8, title: 'Bridal Chignon with Floral Pins', category: 'Styling & Updos', stylist: 'Chloe Bennett', height: 'h-96' },
  { id: 9, title: 'Glass Keratin Smoothing', category: 'Treatments', stylist: 'Julian Wright', height: 'h-72' },
];

export default function GalleryMasonryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Portfolio Lookbook</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Gallery Masonry
          </h1>
          <p className="text-zinc-400 font-jost max-w-2xl mx-auto leading-relaxed">
            Explore our curated lookbook capturing authentic transformations crafted inside our Brooklyn salon chairs.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-dark border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-accent text-dark'
                  : 'bg-dark-card text-zinc-400 hover:text-white border border-dark-border hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`break-inside-avoid relative bg-dark-card border border-dark-border overflow-hidden group ${item.height}`}
            >
              {/* Background Geometric / Image Canvas */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent flex flex-col justify-end p-6 z-10 transition-opacity">
                <span className="text-accent text-xs uppercase tracking-widest font-medium mb-1">
                  {item.category}
                </span>
                <h3 className="font-forum text-2xl text-white mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs font-jost">Stylist: {item.stylist}</p>
              </div>

              {/* Decorative Placeholder SVG Pattern */}
              <div className="w-full h-full flex items-center justify-center bg-zinc-900 group-hover:scale-105 transition-transform duration-500">
                <svg
                  className="w-16 h-16 text-zinc-800 group-hover:text-accent/30 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

