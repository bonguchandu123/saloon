import type { Metadata } from 'next';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Our Stylists – Stylora Hair Salon',
  description: 'Meet our world-class team of master hair stylists, color specialists, and texture artists.',
};

const stylists = [
  {
    name: 'Elena Vance',
    role: 'Creative Director & Master Stylist',
    experience: '14+ Years Experience',
    bio: 'Former senior stylist at top Manhattan salons, Elena brings high-fashion editorial precision and timeless silhouettes to every client.',
    specialties: ['Precision Bob Cuts', 'Couture Styling', 'Editorial Hair'],
    initials: 'EV',
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Colorist & Balayage Specialist',
    experience: '10+ Years Experience',
    bio: 'A certified master colorist specializing in seamless dimensional balayage, lived-in blonde formulations, and color corrections.',
    specialties: ['Sun-Kissed Balayage', 'Platinum Blonding', 'Color Correction'],
    initials: 'MC',
  },
  {
    name: 'Sophia Rossi',
    role: 'Texture & Extension Master',
    experience: '8+ Years Experience',
    bio: 'Certified in hand-tied wefts and keratin fusion extensions. Sophia creates natural, undetectable volume and transforms curls with tailored sculpting.',
    specialties: ['Hand-Tied Extensions', 'Curly Hair Sculpting', 'Silk Press'],
    initials: 'SR',
  },
  {
    name: 'David Kim',
    role: 'Senior Men’s Stylist & Barber',
    experience: '9+ Years Experience',
    bio: 'Merging classic English barbering techniques with modern street aesthetics, David excels in tailored scissor work, skin fades, and beard architecture.',
    specialties: ['Tailored Scissor Cuts', 'Skin Fades', 'Beard Sculpting'],
    initials: 'DK',
  },
  {
    name: 'Chloe Bennett',
    role: 'Junior Colorist & Blowout Specialist',
    experience: '5+ Years Experience',
    bio: 'Specializing in radiant gloss glazes, root shadows, and long-lasting red-carpet blowout styling for weddings and special occasions.',
    specialties: ['Gloss & Glow Glazes', 'Deluxe Blowouts', 'Event Styling'],
    initials: 'CB',
  },
  {
    name: 'Julian Wright',
    role: 'Hair Restoration & Scalp Specialist',
    experience: '7+ Years Experience',
    bio: 'Focused on hair fiber rejuvenation and scalp wellness therapies, Julian formulates bespoke botanical remedies to restore damaged locks.',
    specialties: ['Keratin Smoothing', 'Olaplex Bond Building', 'Scalp Detox Spa'],
    initials: 'JW',
  },
];

export default function OurStylistsPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Our Creative Team</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Meet Our Master Stylists
          </h1>
          <p className="text-zinc-400 font-jost max-w-2xl mx-auto leading-relaxed">
            Our team of internationally trained stylists and colorists are united by an unwavering dedication to the art of hair and personalized client care.
          </p>
        </div>
      </section>

      {/* Stylists Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((stylist) => (
            <div
              key={stylist.name}
              className="bg-dark-card border border-dark-border p-8 flex flex-col justify-between hover:border-accent/40 transition-colors group"
            >
              <div>
                {/* Stylist Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-dark-lighter border-2 border-accent/30 mx-auto flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                  <span className="font-forum text-2xl text-accent">{stylist.initials}</span>
                </div>

                <div className="text-center mb-4">
                  <h3 className="font-forum text-2xl text-white mb-1">{stylist.name}</h3>
                  <p className="text-accent text-sm font-medium">{stylist.role}</p>
                  <p className="text-zinc-500 text-xs mt-1 uppercase tracking-wider">{stylist.experience}</p>
                </div>

                <p className="text-zinc-400 text-sm font-jost leading-relaxed text-center mb-6">
                  {stylist.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-semibold">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {stylist.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs bg-dark-lighter border border-dark-border text-zinc-300 px-2.5 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/booking?stylist=${encodeURIComponent(stylist.name)}`}
                className="btn-outline w-full text-center text-xs uppercase tracking-widest block py-3 group-hover:bg-accent group-hover:text-dark group-hover:border-accent transition-all"
              >
                Book with {stylist.name.split(' ')[0]}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-20 bg-dark-lighter border-t border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Our Standards</p>
          <h2 className="font-forum text-3xl sm:text-4xl text-white mb-6">
            Continual Education & Global Mastery
          </h2>
          <p className="text-zinc-400 font-jost leading-relaxed mb-8">
            Every Stylora team member completes at least 80 hours of advanced continuing education annually at academies in Paris, London, and New York. When you sit in our chair, you receive techniques informed by the forefront of contemporary hair design.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-zinc-400 text-xs uppercase tracking-widest">
            <span className="border-b border-accent pb-1 text-white">Vidal Sassoon Precision Certified</span>
            <span className="border-b border-accent pb-1 text-white">L’Oréal Professionnel Master Color</span>
            <span className="border-b border-accent pb-1 text-white">Bellami Extension Masters</span>
            <span className="border-b border-accent pb-1 text-white">Olaplex Certified Pro</span>
          </div>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

