'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';

const services = [
  {
    id: 'haircut',
    tagline: 'Shape Your Signature Look',
    title: 'Haircut & Styling',
    items: [
      { name: "Women's Cut & Blow-Dry", price: '$55' },
      { name: 'Express Dry Trim', price: '$30' },
      { name: "Men's Fade & Style", price: '$35' },
      { name: 'Bang/Fringe Refresh', price: '$15' },
      { name: 'Deluxe Blowout', price: '$40' },
      { name: 'Hot Tool Styling Add-On', price: '$20' },
      { name: 'Up-Style Event/Party', price: '$75' },
    ],
  },
  {
    id: 'treatments',
    tagline: 'Revive, Repair, Reveal Shine',
    title: 'Hair Treatments',
    items: [
      { name: 'Intensive Deep Conditioning', price: '$45' },
      { name: 'Olaplex® Bond Rebuild', price: '$90' },
      { name: 'Keratin Smoothing Therapy', price: '$250' },
      { name: 'Scalp Detox & Massage', price: '$35' },
      { name: 'Gloss & Glow Treatment', price: '$60' },
      { name: 'Split-End Mending Seal', price: '$35' },
      { name: 'Aromatherapy Scalp Spa', price: '$55' },
    ],
  },
  {
    id: 'color',
    tagline: 'Painted to Perfection',
    title: 'Color & Highlights',
    items: [
      { name: 'Single Process Color', price: '$95' },
      { name: 'Partial Foil Highlights', price: '$120' },
      { name: 'Full-Head Foil Highlights', price: '$165' },
      { name: 'Balayage Hand-Painting', price: '$185' },
      { name: 'Money-Piece Accent', price: '$65' },
      { name: 'Root Shadow & Melt', price: '$70' },
      { name: 'Fashion Color Add-On', price: '$40' },
    ],
  },
  {
    id: 'extensions',
    tagline: 'Length, Volume, Confidence',
    title: 'Hair Extensions',
    items: [
      { name: 'Tape-In Installation (Initial)', price: '$250' },
      { name: 'Keratin Fusion Strands', price: '$450' },
      { name: 'Beaded Weft Installation', price: '$350' },
      { name: 'Hand-Tied Wefts', price: '$400' },
      { name: 'Clip-In Set Application', price: '$80' },
      { name: 'Extension Move-Up / Maintenance', price: '$150' },
      { name: 'Removal Service', price: '$75' },
    ],
  },
];

export default function ServicesTabbedLightPage() {
  const [activeTab, setActiveTab] = useState('haircut');
  const active = services.find((s) => s.id === activeTab)!;

  return (
    <div className="bg-[#f7f5f2] text-zinc-900 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#ebe7e0] border-b border-[#ded7cc] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#8c7365] text-xs tracking-widest uppercase mb-3 font-semibold">Interactive Menu</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-zinc-900 mb-6">
            Services Tabbed (Light)
          </h1>
          <p className="text-zinc-600 font-jost max-w-2xl mx-auto leading-relaxed">
            Click through our categories to view services, formulations, and starting prices.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-6 py-3 text-xs uppercase tracking-widest font-medium transition-all ${
                activeTab === s.id
                  ? 'bg-[#8c7365] text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-[#ded7cc] hover:text-zinc-900'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white p-8 sm:p-12 border border-[#ded7cc] shadow-sm max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#8c7365] text-xs uppercase tracking-widest mb-1">{active.tagline}</p>
            <h2 className="font-forum text-3xl text-zinc-900">{active.title}</h2>
          </div>

          <div className="space-y-4">
            {active.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-3 border-b border-zinc-100"
              >
                <span className="font-forum text-lg text-zinc-900">{item.name}</span>
                <span className="font-forum text-xl text-[#8c7365] font-semibold">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/booking"
              className="inline-block px-8 py-3 bg-[#8c7365] text-white text-xs uppercase tracking-widest font-medium hover:bg-zinc-900 transition-colors"
            >
              Book {active.title}
            </Link>
          </div>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

