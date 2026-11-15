'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Main Home', href: '/' },
      { label: 'Hairstyle Home', href: '/hairstyle-home' },
      { label: 'Hairdresser Home', href: '/hairdresser-home' },
    ],
  },
  {
    label: 'Pages',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Stylists', href: '/our-stylists' },
      { label: 'Booking Form', href: '/booking' },
      { label: 'Gallery Masonry', href: '/gallery-masonry' },
      { label: 'Gallery Grid', href: '/gallery' },
      { label: "FAQ's", href: '/faqs' },
      { label: 'Contact', href: '/contact' },
      { label: 'Coming Soon', href: '/coming-soon' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Service List – Dark', href: '/services' },
      { label: 'Service List – Light', href: '/services/list-light' },
      { label: 'Services Tabbed – Dark', href: '/services/tabbed-dark' },
      { label: 'Services Tabbed – Light', href: '/services/tabbed-light' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      { label: 'Blog Right Sidebar', href: '/blog' },
      { label: 'Blog Left Sidebar', href: '/blog/left-sidebar' },
    ],
  },
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'Products List', href: '/shop' },
      { label: 'Product Single', href: '/shop/triple-barrel-wave-curler' },
      { label: 'Cart', href: '/cart' },
      { label: 'Checkout', href: '/checkout' },
      { label: 'My account', href: '/my-account' },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNav = navItems.slice(0, 2);
  const rightNav = navItems.slice(2);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark border-b border-dark-border shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left Nav */}
            <nav className="flex items-center gap-8">
              {leftNav.map((item) => (
                <div key={item.label} className="relative group nav-dropdown">
                  <Link
                    href={item.href}
                    className="text-white text-sm font-jost tracking-widest uppercase hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="nav-submenu hidden absolute top-full left-0 mt-2 w-52 bg-dark border border-dark-border z-50 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-accent hover:bg-dark-card transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 mx-8">
              <span className="font-forum text-2xl text-white tracking-widest">STYLORA</span>
            </Link>

            {/* Right Nav + Book Now */}
            <div className="flex items-center gap-8">
              {rightNav.map((item) => (
                <div key={item.label} className="relative group nav-dropdown">
                  <Link
                    href={item.href}
                    className="text-white text-sm font-jost tracking-widest uppercase hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="nav-submenu hidden absolute top-full left-0 mt-2 w-52 bg-dark border border-dark-border z-50 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-accent hover:bg-dark-card transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/booking"
                className="text-white text-sm tracking-widest uppercase hover:text-accent transition-colors flex items-center gap-2"
              >
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8.856 8.876" fill="none">
                  <path d="M0 8L7 1M7 1H1.5M7 1V6.5" stroke="currentColor" strokeWidth="1" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark border-b border-dark-border' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <span className="font-forum text-xl text-white tracking-widest">STYLORA</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu bg-dark border-t border-dark-border ${mobileOpen ? 'open' : ''}`}>
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between py-3 border-b border-dark-border">
                  <Link
                    href={item.href}
                    className="text-white text-sm tracking-widest uppercase"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}
                      className="text-accent text-lg"
                    >
                      {openMobileMenu === item.label ? '−' : '+'}
                    </button>
                  )}
                </div>
                {item.children && openMobileMenu === item.label && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block text-gray-400 text-sm py-1 hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/booking"
              className="block mt-4 text-center bg-accent text-dark py-3 text-sm tracking-widest uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

