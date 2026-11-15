import type { Metadata } from 'next';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Boutique Shop – Stylora Hair Salons',
  description: 'Shop luxury hair styling tools, professional treatment serums, and organic botanical care products.',
};

const products = [
  {
    slug: 'triple-barrel-wave-curler',
    name: 'Triple Barrel Ceramic Wave Curler',
    category: 'Styling Tools',
    price: '$85.00',
    rating: '5.0',
    reviewsCount: 38,
    isFeatured: true,
    description: 'Create effortless mermaid waves and beachy texture in minutes with tourmaline ceramic barrels.',
  },
  {
    slug: 'botanical-argan-elixir-oil',
    name: 'Botanical Argan Elixir Oil 100ml',
    category: 'Hair Care',
    price: '$42.00',
    rating: '4.9',
    reviewsCount: 52,
    isFeatured: false,
    description: 'Weightless cold-pressed Moroccan argan oil infused with camellia seed to tame frizz and lock in luster.',
  },
  {
    slug: 'caviar-deep-restorative-masque',
    name: 'Caviar Deep Restorative Masque 250ml',
    category: 'Treatments',
    price: '$65.00',
    rating: '5.0',
    reviewsCount: 44,
    isFeatured: true,
    description: 'Intense peptide-rich reconstruction treatment that heals bleached, heat-damaged, or fragile cuticles.',
  },
  {
    slug: 'tourmaline-ionic-hair-dryer',
    name: 'Pro Tourmaline Ionic Hair Dryer',
    category: 'Styling Tools',
    price: '$140.00',
    rating: '4.8',
    reviewsCount: 29,
    isFeatured: false,
    description: 'Ultra-lightweight salon-grade brushless motor with negative ion tech to cut blow-dry time by 50%.',
  },
  {
    slug: 'scalp-detox-sea-salt-scrub',
    name: 'Scalp Detox Sea Salt Scrub 200g',
    category: 'Hair Care',
    price: '$38.00',
    rating: '4.9',
    reviewsCount: 31,
    isFeatured: false,
    description: 'Clarifying exfoliating scalp scrub with tea tree and peppermint to rebalance oil and boost root volume.',
  },
  {
    slug: 'handmade-boar-bristle-brush',
    name: 'Handmade Boar Bristle Round Brush',
    category: 'Accessories',
    price: '$55.00',
    rating: '5.0',
    reviewsCount: 67,
    isFeatured: true,
    description: 'Sustainably sourced beechwood brush with natural boar bristles that distribute sebum for maximum shine.',
  },
];

export default function ShopPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Salon Boutique</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Luxury Hair Care & Tools
          </h1>
          <p className="text-zinc-400 font-jost max-w-2xl mx-auto leading-relaxed">
            Take the salon experience home. The exact professional formulas and ergonomic tools trusted daily by our master stylists.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-6 border-b border-dark-border gap-4">
          <p className="text-zinc-400 text-sm font-jost">
            Showing all <span className="text-white font-medium">{products.length}</span> curated products
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400 uppercase tracking-wider">Free Shipping:</span>
            <span className="text-xs bg-dark-lighter border border-dark-border px-3 py-1 text-accent">
              On all orders over $75
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-dark-card border border-dark-border p-6 flex flex-col justify-between hover:border-accent/40 transition-all group"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative h-64 bg-zinc-900 border border-dark-border mb-6 flex items-center justify-center overflow-hidden">
                  {product.isFeatured && (
                    <span className="absolute top-3 left-3 bg-accent text-dark text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 z-10">
                      Best Seller
                    </span>
                  )}
                  <svg
                    className="w-16 h-16 text-zinc-800 group-hover:text-accent/40 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span className="uppercase tracking-widest text-accent">{product.category}</span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    ★ {product.rating} <span className="text-zinc-500">({product.reviewsCount})</span>
                  </span>
                </div>

                <h3 className="font-forum text-2xl text-white mb-2 group-hover:text-accent transition-colors">
                  <Link href={`/shop/${product.slug}`}>{product.name}</Link>
                </h3>

                <p className="text-zinc-400 text-xs font-jost leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-forum text-2xl text-accent font-semibold">{product.price}</span>
                  <span className="text-xs text-green-400 font-jost">In Stock</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="btn-outline text-center text-xs uppercase tracking-widest py-2.5 block"
                  >
                    Details
                  </Link>
                  <Link
                    href="/cart"
                    className="btn-accent text-center text-xs uppercase tracking-widest py-2.5 block"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}
