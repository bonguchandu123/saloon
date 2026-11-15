import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import BookingStrip from '@/components/BookingStrip';

const features = [
  {
    title: 'Expert Stylists',
    desc: 'Certified and experienced professionals who bring your vision to life with precision.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M8.252 18.459C7.462 19.764 7.107 21 5.7 21C4.209 21 3 19.757 3 18.223s1.209-2.778 2.7-2.778c1.4 0 2.55 1.095 2.686 2.498a.85.85 0 0 1-.134.515m0 0l1.948-3.476m5.548 3.476C16.538 19.764 16.893 21 18.3 21c1.491 0 2.7-1.243 2.7-2.777s-1.209-2.778-2.7-2.778c-1.4 0-2.55 1.095-2.687 2.498c-.017.182.04.36.135.515m0 0L7.093 3.346a.66.66 0 0 0-1.1-.081c-1.704 2.19-1.534 5.35.395 7.333zm-3.797-6.63l4.953-8.494a.66.66 0 0 1 1.098-.076c1.707 2.194 1.537 5.358-.395 7.345L16.5 11.742" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Elegant Interior',
    desc: 'Luxurious salon ambiance that enhances your experience from the moment you walk in.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M15.697 15H8c-1.105 0-2-.905-2-2.021s.898-2.027 2.001-1.977c4.69.214 7.294 1.146 8.383 1.65c.396.184.616.591.616 1.031A1.31 1.31 0 0 1 15.697 15" stroke="currentColor" strokeWidth="1"/>
        <path d="m17 14l3.94-10.516c.21-.575-.15-1.193-.787-1.355c-1.634-.415-3.345.182-3.883 1.656C15.644 5.496 15 8.131 15 12m0-4.04s-3.381-1.394-4.68-.82c-.39.172-.722.457-.956.82C9 8.526 9 9.35 9 11m-3 2v3c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C4.398 19 3.932 19 3 19m9-4v6m-2 0h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Relaxing Experience',
    desc: 'Enjoy a soothing and pampered atmosphere designed for complete relaxation.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none">
        <path d="M12 21.794c3.906 0 6.035 2.498 8 4.768s4.094 4.768 8 4.768m-8-14.66c3.906 0 6.035 2.499 8 4.768c1.965 2.27 4.094 4.768 8 4.768" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="21.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Premium Products',
    desc: 'We use premium-quality salon products that deliver exceptional care, and lasting results.',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M7 13a5 5 0 0 1 10 0v5c0 1.886 0 2.828-.586 3.414S14.886 22 13 22h-2c-1.886 0-2.828 0-3.414-.586S7 19.886 7 18z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 8V7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v1m-2-3V2m0 0h-2m2 0h2.745a3 3 0 0 1 2.041.802L17 3M7 13h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const galleryImages = [
  { id: 1, label: 'Salon Style 1', bg: 'bg-zinc-800' },
  { id: 2, label: 'Salon Style 2', bg: 'bg-zinc-700' },
  { id: 3, label: 'Salon Style 3', bg: 'bg-zinc-800' },
];

const instagramImages = [
  { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
];

export default function HomePage() {
  return (
    <div className="bg-dark">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1410 50%, #0b0b0b 100%)',
        }}
      >
        {/* Decorative background text */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="text-[20vw] font-forum text-white opacity-[0.03] leading-none"
          >
            STYLORA
          </span>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-6">
              Find Your Perfect Look
            </h4>
            <h1 className="font-forum text-5xl md:text-7xl text-white leading-tight mb-8">
              A Personalized Salon Experience<br />Tailored Just for You!
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Aqestic optio amet a quisquam saepe aliquid, voluptate dicta fuga dolor error voluptatem
              cupiditate totam reiciendis quam minus inventore sint rem impedit esse quasi.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-accent text-dark px-10 py-4 text-sm tracking-widest uppercase font-jost hover:bg-accent-light transition-colors"
            >
              Book Your Appointment
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M0 10L8 2M8 2H2M8 2V8" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className={`${img.bg} aspect-square flex items-center justify-center overflow-hidden group cursor-pointer`}
              >
                <div className="text-center p-8 group-hover:scale-95 transition-transform duration-500">
                  <div className="w-16 h-16 border border-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="8" stroke="#B2A096" strokeWidth="1"/>
                      <path d="m21 21-4.35-4.35" stroke="#B2A096" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-accent text-sm tracking-widest uppercase">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dark border-t border-dark-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Why Choose Us</h4>
            <h2 className="font-forum text-4xl md:text-5xl text-white">The Stylora Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 border border-dark-border hover:border-accent transition-colors group"
              >
                <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
                  {f.svg}
                </div>
                <h3 className="font-forum text-xl text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About/Stats Section */}
      <section className="py-24 bg-dark-card border-t border-dark-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-6">About Stylora</h4>
              <h2 className="font-forum text-4xl md:text-5xl text-white mb-8 leading-tight">
                Where Style Begins —<br />Book Your Appointment Today
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                At Stylora, we believe every visit should feel like a luxury retreat. Our team of certified
                stylists is passionate about bringing out the best in every client. From precision cuts
                to vibrant color transformations, we deliver personalized salon experiences tailored to your unique style.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border border-accent text-accent px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent hover:text-dark transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '15+', label: 'Expert Stylists' },
                { number: '10+', label: 'Years Experience' },
                { number: '50+', label: 'Awards Won' },
              ].map((stat) => (
                <div key={stat.label} className="border border-dark-border p-8 text-center">
                  <p className="font-forum text-5xl text-accent mb-2">{stat.number}</p>
                  <p className="text-gray-400 text-sm tracking-widest uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Instagram Section */}
      <section className="py-24 bg-dark border-t border-dark-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Follow Us on Instagram</h4>
            <h2 className="font-forum text-4xl md:text-5xl text-white">
              Connect With Us &amp; Experience the<br />Ultimate Salon Luxury!
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {instagramImages.map((img) => (
              <a
                key={img.id}
                href="https://instagram.com/stylora"
                target="_blank"
                rel="noreferrer"
                className="aspect-square bg-zinc-800 flex items-center justify-center group overflow-hidden"
              >
                <div className="text-center group-hover:scale-95 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent mx-auto">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                  <p className="text-accent text-xs mt-2">@stylora</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Strip */}
      <BookingStrip />
    </div>
  );
}

