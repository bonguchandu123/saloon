import type { Metadata } from 'next';
import ServicesSection from '@/components/ServicesSection';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Services Tabbed (Dark) – Stylora Hair Salons',
  description: 'Interactive tabbed catalog of salon treatments, styling, and color services.',
};

export default function ServicesTabbedDarkPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Service Menu</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Services Tabbed (Dark)
          </h1>
          <p className="text-zinc-400 font-jost max-w-2xl mx-auto leading-relaxed">
            Select a category to view specialized treatments, formulas, and pricing.
          </p>
        </div>
      </section>

      <ServicesSection />

      <BookingStrip />
    </div>
  );
}

