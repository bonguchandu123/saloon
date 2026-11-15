'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BookingStrip from '@/components/BookingStrip';

const productsData: Record<
  string,
  {
    name: string;
    category: string;
    price: string;
    rating: string;
    reviewsCount: number;
    description: string;
    features: string[];
    specifications: Record<string, string>;
  }
> = {
  'triple-barrel-wave-curler': {
    name: 'Triple Barrel Ceramic Wave Curler',
    category: 'Styling Tools',
    price: '$85.00',
    rating: '5.0',
    reviewsCount: 38,
    description:
      'Achieve effortless mermaid waves, textured beach bends, or high-fashion crimps in minutes. Engineered with customized 25mm ceramic-tourmaline barrels that emit negative ions to eliminate static and seal the cuticle for radiant luster.',
    features: [
      'Triple 25mm tourmaline ceramic barrels for rapid, uniform heat distribution',
      'Adjustable temperature from 250°F to 450°F suited for all hair textures',
      'Instant 30-second PTC ceramic heating with digital LCD display',
      'Dual voltage (110V - 240V) perfect for worldwide luxury travel',
      '60-minute automatic safety shutoff & 360° swivel tangle-free power cord',
    ],
    specifications: {
      'Barrel Diameter': '25mm (1 inch) x 3',
      'Heat Technology': 'Tourmaline Ionic Ceramic',
      'Temperature Range': '250°F – 450°F (120°C – 230°C)',
      'Heat-Up Time': '30 seconds',
      'Cord Length': '2.5 meters (8.2 ft) swivel cord',
      'Warranty': '2-Year Salon Manufacturer Warranty',
    },
  },
  'botanical-argan-elixir-oil': {
    name: 'Botanical Argan Elixir Oil 100ml',
    category: 'Hair Care',
    price: '$42.00',
    rating: '4.9',
    reviewsCount: 52,
    description:
      'A featherlight, non-greasy elixir combining virgin cold-pressed Moroccan argan oil, Japanese camellia seed, and vitamin E. Restores glossy bounce, smooths flyaways, and shields hair up to 450°F thermal styling.',
    features: [
      '100% Organic certified cold-pressed Moroccan Argan Oil',
      'Featherlight formulation that never weighs fine hair down',
      'Thermal defense shield protecting against hot tools up to 450°F',
      'Free from sulfates, parabens, silicones, and synthetic dyes',
    ],
    specifications: {
      'Volume': '100ml / 3.4 fl. oz.',
      'Scent': 'Bergamot, Amber, & White Vanilla',
      'Hair Type': 'All hair types, safe for colored hair',
      'Origin': 'Made in France',
    },
  },
  'caviar-deep-restorative-masque': {
    name: 'Caviar Deep Restorative Masque 250ml',
    category: 'Treatments',
    price: '$65.00',
    rating: '5.0',
    reviewsCount: 44,
    description:
      'An intensive salon-grade reparative treatment enriched with sustainably harvested French caviar extract, hydrolyzed silk proteins, and shea butter. Deeply reconstructs lipid bonds and replenishes deep cellular hydration.',
    features: [
      'Infused with French caviar peptides & marine minerals',
      'Repairs split ends and chemical damage in one 10-minute application',
      'Restores elasticity, bounce, and mirror-shine reflectance',
    ],
    specifications: {
      'Volume': '250ml / 8.5 fl. oz.',
      'Recommended Usage': '1-2 times weekly',
      'Hair Type': 'Bleached, dry, or chemically processed hair',
      'Origin': 'Made in Italy',
    },
  },
  'tourmaline-ionic-hair-dryer': {
    name: 'Pro Tourmaline Ionic Hair Dryer',
    category: 'Styling Tools',
    price: '$140.00',
    rating: '4.8',
    reviewsCount: 29,
    description:
      'Equipped with an ultra-quiet 110,000 RPM brushless motor and intelligent microchip temperature sensors to safeguard hair proteins from extreme heat damage.',
    features: [
      '110,000 RPM high-speed brushless digital motor',
      'Emits 50 million negative ions per cm³ to lock in moisture',
      'Magnetic 360° rotating concentrator nozzle and deep diffuser included',
    ],
    specifications: {
      'Motor': '110,000 RPM Brushless Motor',
      'Wattage': '1600W Energy-Efficient',
      'Weight': '390g ultra-lightweight ergonomic chassis',
      'Sound Level': '< 75dB whisper quiet',
    },
  },
  'scalp-detox-sea-salt-scrub': {
    name: 'Scalp Detox Sea Salt Scrub 200g',
    category: 'Hair Care',
    price: '$38.00',
    rating: '4.9',
    reviewsCount: 31,
    description:
      'Purifying scalp scrub blending mineral-rich Atlantic sea salt crystals with organic tea tree and cooling peppermint extracts. Lifts product buildup and clears follicles.',
    features: [
      'Natural Atlantic sea salt granules dissolve cleanly during rinse',
      'Botanical tea tree & peppermint stimulate circulation',
      'Balances excess sebum while calming scalp irritation',
    ],
    specifications: {
      'Weight': '200g / 7.0 oz.',
      'Scent': 'Crisp Peppermint & Tea Tree',
      'Usage': 'Once weekly pre-shampoo treatment',
    },
  },
  'handmade-boar-bristle-brush': {
    name: 'Handmade Boar Bristle Round Brush',
    category: 'Accessories',
    price: '$55.00',
    rating: '5.0',
    reviewsCount: 67,
    description:
      'Carved from FSC-certified European beechwood with dense premium boar bristles interspersed with flexible nylon pins. Distributes scalp oils uniformly for luminous, frizz-free blowouts.',
    features: [
      '100% natural first-cut boar bristles for gentle tension',
      'Tourmaline-infused nylon pins glide through dense knots',
      'Hand-carved ergonomic non-slip handle',
    ],
    specifications: {
      'Diameter': '55mm barrel',
      'Handle': 'Solid FSC Beechwood',
      'Origin': 'Handcrafted in Germany',
    },
  },
};

export default function ProductSinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'shipping'>('desc');
  const [added, setAdded] = useState(false);

  const product = productsData[params.slug];

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div>
      {/* Breadcrumb Bar */}
      <section className="bg-dark-lighter border-b border-dark-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-jost text-zinc-400">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-accent">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Gallery View */}
          <div className="bg-dark-card border border-dark-border p-8 h-[480px] flex items-center justify-center relative">
            <span className="absolute top-4 left-4 text-xs uppercase tracking-widest bg-dark-lighter border border-dark-border text-accent px-3 py-1">
              {product.category}
            </span>
            <div className="text-center">
              <svg className="w-32 h-32 text-zinc-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Official Stylora Boutique</p>
            </div>
          </div>

          {/* Product Details Column */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-yellow-500 text-sm">
                <span>★ {product.rating}</span>
                <span className="text-zinc-500 text-xs font-jost">({product.reviewsCount} customer reviews)</span>
              </div>

              <h1 className="font-forum text-3xl sm:text-4xl text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-forum text-3xl text-accent font-semibold">{product.price}</span>
                <span className="text-xs text-green-400 bg-green-950/40 border border-green-800/40 px-2.5 py-0.5 rounded">
                  In Stock & Ready to Ship
                </span>
              </div>

              <p className="text-zinc-300 font-jost text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="space-y-2 mb-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-400 font-jost">
                    <span className="text-accent font-bold">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Actions */}
            <div className="border-t border-dark-border pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-dark-border bg-dark-lighter">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-white hover:text-accent text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-white text-sm font-jost">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-white hover:text-accent text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn-accent flex-1 text-center text-xs uppercase tracking-widest py-3"
                >
                  {added ? 'Added to Bag! ✓' : `Add to Bag • $${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}`}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 font-jost pt-2">
                <span>Free 2-day delivery on orders over $75</span>
                <Link href="/cart" className="text-accent hover:underline">
                  View Shopping Bag →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specification Tabs */}
        <div className="mt-20 border-t border-dark-border pt-12">
          <div className="flex border-b border-dark-border mb-8">
            <button
              onClick={() => setActiveTab('desc')}
              className={`pb-4 px-6 text-xs uppercase tracking-widest font-medium border-b-2 transition-colors ${
                activeTab === 'desc'
                  ? 'border-accent text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Stylist Directions
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-4 px-6 text-xs uppercase tracking-widest font-medium border-b-2 transition-colors ${
                activeTab === 'specs'
                  ? 'border-accent text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Technical Specs
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-4 px-6 text-xs uppercase tracking-widest font-medium border-b-2 transition-colors ${
                activeTab === 'shipping'
                  ? 'border-accent text-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Shipping & Returns
            </button>
          </div>

          <div className="max-w-3xl font-jost text-sm text-zinc-300">
            {activeTab === 'desc' && (
              <div className="space-y-4 leading-relaxed">
                <p>
                  Start on dry, detangled hair. Section hair into horizontal rows, clamp the tool gently near the roots for 4-6 seconds, release, and move down the section overlapping the previous wave pattern.
                </p>
                <p>
                  Finish with Stylora Botanical Argan Elixir Oil through ends for glossy, salon-worthy separation and flexible hold.
                </p>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="bg-dark-card border border-dark-border p-4">
                    <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-1">{key}</span>
                    <span className="text-white font-medium">{val}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="space-y-3 leading-relaxed text-zinc-400">
                <p>All boutique orders ship from Brooklyn, NY within 24 business hours.</p>
                <p>We offer hassle-free 30-day returns on unused, unopened items in original packaging.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

