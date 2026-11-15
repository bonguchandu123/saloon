'use client';

import { useState } from 'react';

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

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('haircut');
  const active = services.find((s) => s.id === activeTab)!;

  return (
    <section className="py-24 bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Our Services</h4>
          <h2 className="font-forum text-4xl md:text-5xl text-white">What We Offer</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-6 py-3 text-sm tracking-widest uppercase border transition-colors font-jost service-tab ${
                activeTab === s.id
                  ? 'border-accent text-accent'
                  : 'border-dark-border text-gray-400 hover:border-accent hover:text-accent'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h5 className="text-xs tracking-[0.3em] uppercase text-accent mb-2">{active.tagline}</h5>
            <h3 className="font-forum text-3xl text-white">{active.title}</h3>
          </div>

          <div className="space-y-4">
            {active.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 border-b border-dark-border group hover:border-accent transition-colors"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                <div className="flex items-center gap-4">
                  <div className="flex-1 border-b border-dashed border-dark-border w-16 mx-4 hidden sm:block" />
                  <span className="font-forum text-xl text-accent">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/booking"
              className="inline-flex items-center gap-3 bg-accent text-dark px-10 py-4 text-sm tracking-widest uppercase hover:bg-accent-light transition-colors"
            >
              Book This Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

