import type { Metadata } from 'next';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'About Us – Stylora Hair Salon',
  description: 'Learn about Stylora hair salon, our expert team, and our commitment to excellence.',
};

const stylists = [
  { name: 'Sophia L.', role: 'Senior Colorist', bio: '12 years of experience specializing in balayage and color corrections.' },
  { name: 'Marcus T.', role: 'Master Stylist', bio: 'Award-winning hairdresser known for precision cuts and creative styling.' },
  { name: 'Aria M.', role: 'Extension Specialist', bio: 'Expert in all types of hair extensions with over 8 years of experience.' },
  { name: 'James K.', role: 'Color Technician', bio: 'Certified in Olaplex treatments and advanced coloring techniques.' },
];

export default function AboutPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-dark-card border-b border-dark-border text-center">
        <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Our Story</h4>
        <h1 className="font-forum text-5xl md:text-7xl text-white">About Stylora</h1>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-6">Who We Are</h4>
              <h2 className="font-forum text-4xl text-white mb-8 leading-tight">
                Passion for Hair,<br />Dedication to You
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Stylora was born from a passion for beauty and an unwavering commitment to client satisfaction.
                We believe that a great hair experience is transformative — not just for how you look, but for
                how you feel. Our salon is designed to be your sanctuary.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Founded over a decade ago, Stylora has grown into one of the most trusted names in hair care.
                Our team of certified stylists continually trains in the latest techniques to bring you
                cutting-edge services in a luxurious, welcoming environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '500+', label: 'Happy Clients' },
                  { number: '15+', label: 'Expert Stylists' },
                  { number: '10+', label: 'Years Experience' },
                  { number: '50+', label: 'Awards Won' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-dark-border p-6 text-center">
                    <p className="font-forum text-4xl text-accent mb-1">{stat.number}</p>
                    <p className="text-gray-400 text-xs tracking-widest uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-800 aspect-square flex items-center justify-center">
              <div className="text-center p-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-accent mx-auto mb-6">
                  <path d="M8.252 18.459C7.462 19.764 7.107 21 5.7 21C4.209 21 3 19.757 3 18.223s1.209-2.778 2.7-2.778c1.4 0 2.55 1.095 2.686 2.498a.85.85 0 0 1-.134.515m0 0l1.948-3.476m5.548 3.476C16.538 19.764 16.893 21 18.3 21c1.491 0 2.7-1.243 2.7-2.777s-1.209-2.778-2.7-2.778c-1.4 0-2.55 1.095-2.687 2.498c-.017.182.04.36.135.515m0 0L7.093 3.346a.66.66 0 0 0-1.1-.081c-1.704 2.19-1.534 5.35.395 7.333zm-3.797-6.63l4.953-8.494a.66.66 0 0 1 1.098-.076c1.707 2.194 1.537 5.358-.395 7.345L16.5 11.742" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-forum text-2xl text-white mb-2">Stylora Salon</p>
                <p className="text-accent text-sm tracking-widest">Since 2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-dark-card border-t border-dark-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">The Team</h4>
            <h2 className="font-forum text-4xl md:text-5xl text-white">Meet Our Stylists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stylists.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="bg-zinc-800 aspect-square flex items-center justify-center mb-6 overflow-hidden">
                  <div className="text-center group-hover:scale-95 transition-transform duration-500">
                    <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-forum text-2xl text-accent">{s.name[0]}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-forum text-xl text-white mb-1">{s.name}</h3>
                <p className="text-accent text-xs tracking-widest uppercase mb-3">{s.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{s.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

