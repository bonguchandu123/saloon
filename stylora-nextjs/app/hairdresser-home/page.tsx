import type { Metadata } from 'next';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';
import ServicesSection from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Hairdresser Home – Stylora Hair Salons',
  description: 'Experience bespoke hairdressing crafted by Brooklyn’s most celebrated stylists.',
};

export default function HairdresserHomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-dark text-center px-4 overflow-hidden pt-20">
        <div className="max-w-4xl mx-auto z-10">
          <p className="text-accent text-xs tracking-widest uppercase mb-4">Master Hairdressers & Colorists</p>
          <h1 className="font-forum text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Artistry. Precision. Tailored Just for You.
          </h1>
          <p className="text-zinc-400 font-jost text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Sit back in a private styling chair while our senior hairdressers bring years of runway and editorial expertise to your personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/our-stylists" className="btn-accent w-full sm:w-auto">
              Meet the Stylists
            </Link>
            <Link href="/booking" className="btn-outline w-full sm:w-auto">
              Reserve a Chair
            </Link>
          </div>
        </div>
      </section>

      <BookingStrip />

      {/* Philosophy Statement */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <span className="text-accent text-xs uppercase tracking-widest block mb-4">Our Hairdressing Manifesto</span>
        <blockquote className="font-forum text-3xl sm:text-4xl lg:text-5xl text-white leading-relaxed mb-8">
          “Hair isn’t merely cut; it is sculpted to complement your facial architecture and reflect your innermost persona.”
        </blockquote>
        <p className="text-accent font-jost text-sm uppercase tracking-widest">— Elena Vance, Creative Director</p>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Masterclass Training Banner */}
      <section className="py-20 bg-dark-lighter border-t border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-xs tracking-widest uppercase mb-3">Education & Academy</p>
            <h2 className="font-forum text-3xl sm:text-4xl text-white mb-6">
              Stylora Advanced Hairdressing Academy
            </h2>
            <p className="text-zinc-400 font-jost leading-relaxed mb-6">
              Beyond our salon chairs, our senior hairdressers host masterclasses for aspiring colorists and stylists nationwide, teaching modern dry-cutting, foil placement techniques, and Japanese scalp therapy rituals.
            </p>
            <Link href="/contact" className="btn-outline text-xs uppercase tracking-widest inline-block">
              Inquire About Masterclasses
            </Link>
          </div>
          <div className="bg-dark-card border border-dark-border p-8 text-center">
            <h3 className="font-forum text-3xl text-accent mb-2">1,200+</h3>
            <p className="text-white text-sm uppercase tracking-wider mb-6">Stylists Trained Worldwide</p>
            <div className="h-px bg-dark-border my-6" />
            <h3 className="font-forum text-3xl text-accent mb-2">99.4%</h3>
            <p className="text-white text-sm uppercase tracking-wider">Five-Star Guest Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
}

