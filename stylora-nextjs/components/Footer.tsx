import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      {/* Footer Widgets */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Opening Hours */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Opening Hours</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Monday – Friday<br />
              <span className="text-white">08:00 AM – 10:00 PM</span>
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Saturday – Sunday<br />
              <span className="text-white">10:00 AM – 06:00 PM</span>
            </p>
          </div>

          {/* Book Your Visit */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Book Your Visit</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              5th Avenue, E 28th St,<br />
              Brooklyn New York 2300 USA
            </p>
            <p className="text-2xl font-forum text-accent mb-2">+1 (987) 654 321</p>
            <p className="text-accent text-sm">booking@stylora.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Meet Our Stylists', href: '/our-stylists' },
                { label: 'Our Services', href: '/services' },
                { label: 'Boutique Shop', href: '/shop' },
                { label: 'Lookbook Gallery', href: '/gallery' },
                { label: 'Booking Form', href: '/booking' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: "FAQ's", href: '/faqs' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-dark-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { label: 'Facebook', icon: 'f' },
                { label: 'Instagram', icon: '◈' },
                { label: 'TikTok', icon: '♪' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow us on ${s.label}`}
                  className="w-9 h-9 border border-dark-border flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-colors text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Logo */}
            <Link href="/">
              <span className="font-forum text-xl text-white tracking-widest">STYLORA</span>
            </Link>

            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Copyright by DropletThemes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

