import type { Metadata } from 'next';
import ServicesSection from '@/components/ServicesSection';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Services – Stylora Hair Salon',
  description: 'Explore our full range of hair salon services including cuts, coloring, treatments, and extensions.',
};

export default function ServicesPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-dark-card border-b border-dark-border text-center">
        <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">What We Do</h4>
        <h1 className="font-forum text-5xl md:text-7xl text-white">Our Services</h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          From precision cuts to vibrant color transformations — every service is crafted for you.
        </p>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Service Cards */}
      <section className="py-24 bg-dark border-t border-dark-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Haircut & Styling', desc: 'Expert cuts and styling for every hair type and occasion.', price: 'From $15' },
              { title: 'Hair Treatments', desc: 'Deep conditioning, Olaplex, keratin, and scalp therapies.', price: 'From $35' },
              { title: 'Color & Highlights', desc: 'Single process, balayage, foils, and fashion colors.', price: 'From $40' },
              { title: 'Hair Extensions', desc: 'Tape-in, fusion, beaded weft, and hand-tied extensions.', price: 'From $75' },
            ].map((card, i) => (
              <div key={i} className="border border-dark-border p-8 hover:border-accent transition-colors group">
                <div className="w-12 h-12 border border-dark-border group-hover:border-accent flex items-center justify-center mb-6 transition-colors">
                  <span className="text-accent font-forum text-xl">{i + 1}</span>
                </div>
                <h3 className="font-forum text-xl text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{card.desc}</p>
                <p className="text-accent text-sm tracking-widest uppercase">{card.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

