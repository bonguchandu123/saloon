import type { Metadata } from 'next';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Gallery – Stylora Hair Salon',
  description: 'Browse our gallery of stunning hair transformations, cuts, and color work.',
};

const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: i % 4 === 0 ? 'Color' : i % 4 === 1 ? 'Cut' : i % 4 === 2 ? 'Treatment' : 'Extensions',
  bg: i % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-700',
}));

export default function GalleryPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-dark-card border-b border-dark-border text-center">
        <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Our Work</h4>
        <h1 className="font-forum text-5xl md:text-7xl text-white">Gallery</h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          A showcase of stunning hair transformations from our talented team of stylists.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`${item.bg} aspect-square flex items-center justify-center group overflow-hidden cursor-pointer`}
              >
                <div className="text-center group-hover:scale-95 transition-transform duration-500 p-6">
                  <div className="w-12 h-12 border border-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-forum">{item.id}</span>
                  </div>
                  <p className="text-accent text-xs tracking-widest uppercase">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

