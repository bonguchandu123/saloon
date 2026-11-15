import type { Metadata } from 'next';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Service List (Light) – Stylora Hair Salons',
  description: 'Explore the complete pricing catalog for haircuts, color, treatments, and extensions.',
};

const serviceGroups = [
  {
    title: 'Haircut & Styling',
    description: 'Precision cuts tailored to your unique hair density, bone structure, and lifestyle.',
    items: [
      { name: "Women's Cut & Blow-Dry", price: '$55', note: 'Includes botanical wash & round-brush styling' },
      { name: 'Express Dry Trim', price: '$30', note: 'Maintenance dusting for clean ends' },
      { name: "Men's Fade & Style", price: '$35', note: 'Scissor precision or fade with hot towel finish' },
      { name: 'Bang / Fringe Refresh', price: '$15', note: 'Quick face-framing adjustment' },
      { name: 'Deluxe Blowout', price: '$40', note: 'Volumizing wash and bouncy silk blowout' },
      { name: 'Hot Tool Styling Add-On', price: '$20', note: 'Beach waves, flat iron silk or glam curls' },
      { name: 'Up-Style Event / Party', price: '$75', note: 'Intricate wedding, gala, or gala updo' },
    ],
  },
  {
    title: 'Hair Treatments',
    description: 'Restorative rituals targeting dry, compromised, or chemically stressed strands.',
    items: [
      { name: 'Intensive Deep Conditioning', price: '$45', note: 'Moisture infusing botanical steam masque' },
      { name: 'Olaplex® Bond Rebuild', price: '$90', note: 'Patented internal bond reparative treatment' },
      { name: 'Keratin Smoothing Therapy', price: '$250', note: 'Formaldehyde-free frizz defense for 4+ months' },
      { name: 'Scalp Detox & Massage', price: '$35', note: 'Exfoliating scrub & stimulating circulation massage' },
      { name: 'Gloss & Glow Glaze', price: '$60', note: 'High-shine transparent or tinted gloss coat' },
      { name: 'Split-End Mending Seal', price: '$35', note: 'Thermally activated cuticle binding' },
      { name: 'Aromatherapy Scalp Spa', price: '$55', note: 'Japanese head-spa ritual with essential oils' },
    ],
  },
  {
    title: 'Color & Highlights',
    description: 'Custom formulations utilizing low-ammonia premium Italian pigments.',
    items: [
      { name: 'Single Process All-Over Color', price: '$95', note: 'Full base coverage or root touch-up' },
      { name: 'Partial Foil Highlights', price: '$120', note: 'Crown and face-framing dimension' },
      { name: 'Full-Head Foil Highlights', price: '$165', note: 'Complete head multi-tonal lightness' },
      { name: 'Balayage Hand-Painting', price: '$185', note: 'Seamless lived-in sun-drenched brightness' },
      { name: 'Money-Piece Accent', price: '$65', note: 'Bold front hairline pop of blonde' },
      { name: 'Root Shadow & Melt', price: '$70', note: 'Blended gradient transition for soft grow-out' },
      { name: 'Fashion Color Add-On', price: '$40', note: 'Vibrant pastel or jewel-tone overlay' },
    ],
  },
  {
    title: 'Hair Extensions',
    description: '100% ethically sourced premium Remy human hair extensions.',
    items: [
      { name: 'Tape-In Installation (Initial)', price: '$250', note: 'Lightweight, seamless adhesive tabs' },
      { name: 'Keratin Fusion Strands', price: '$450', note: 'Individual micro-bonds for 360° motion' },
      { name: 'Beaded Weft Installation', price: '$350', note: 'No heat or glue silicone micro-links' },
      { name: 'Hand-Tied Wefts', price: '$400', note: 'Ultra-thin hand-sewn wefts for fine hair' },
      { name: 'Clip-In Set Customization', price: '$80', note: 'Blending cut and fitting consultation' },
      { name: 'Extension Move-Up / Maintenance', price: '$150', note: '6-8 week recommended realignment' },
      { name: 'Safe Removal Service', price: '$75', note: 'Gentle residue-free removal & clarifying wash' },
    ],
  },
];

export default function ServiceListLightPage() {
  return (
    <div className="bg-[#f7f5f2] text-zinc-900 min-h-screen">
      {/* Light Banner */}
      <section className="relative py-24 bg-[#ebe7e0] border-b border-[#ded7cc] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#8c7365] text-xs tracking-widest uppercase mb-3 font-semibold">Salon Service Menu</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-zinc-900 mb-6">
            Services & Pricing (Light Edition)
          </h1>
          <p className="text-zinc-600 font-jost max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for our signature cuts, transformative coloring, and regenerative treatments.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/services"
              className="text-xs uppercase tracking-widest px-4 py-2 border border-[#8c7365] text-[#8c7365] hover:bg-[#8c7365] hover:text-white transition-colors"
            >
              Switch to Dark View
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Columns */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {serviceGroups.map((group) => (
            <div key={group.title} className="bg-white p-8 sm:p-10 border border-[#e5dfd5] shadow-sm">
              <h2 className="font-forum text-3xl text-zinc-900 mb-2">{group.title}</h2>
              <p className="text-zinc-500 text-sm font-jost mb-8">{group.description}</p>

              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.name} className="border-b border-zinc-100 pb-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-forum text-lg text-zinc-900">{item.name}</span>
                      <span className="font-forum text-xl text-[#8c7365] font-semibold">{item.price}</span>
                    </div>
                    <p className="text-zinc-500 text-xs font-jost">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/booking"
                  className="block text-center text-xs uppercase tracking-widest py-3 bg-[#8c7365] text-white hover:bg-zinc-800 transition-colors font-medium"
                >
                  Book In This Category
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

