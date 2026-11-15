import type { Metadata } from 'next';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Blog – Stylora Hair Salon',
  description: 'Hair care tips, trends, and inspiration from the Stylora team.',
};

const posts = [
  {
    slug: 'trendy-haircuts-transform-your-look',
    title: 'Trendy Haircuts That Will Transform Your Look',
    excerpt: 'Discover the hottest haircut trends of the season and find the perfect style for your face shape.',
    category: 'Trends',
    date: 'November 2026',
  },
  {
    slug: 'maintain-vibrant-hair-color',
    title: 'How to Maintain Vibrant Hair Color for Longer',
    excerpt: 'Expert tips from our colorists on keeping your hair color fresh, vibrant, and beautiful between salon visits.',
    category: 'Tips & Tricks',
    date: 'October 2026',
  },
  {
    slug: 'celebrity-inspired-beauty-trends',
    title: 'Celebrity-Inspired Hair and Beauty Trends',
    excerpt: 'Get the looks you love from the red carpet, adapted for real life by our styling experts.',
    category: 'Inspiration',
    date: 'October 2026',
  },
  {
    slug: 'how-often-trim-hair',
    title: 'How Often Should You Trim Your Hair?',
    excerpt: "The definitive guide to hair trimming frequency based on your hair type, length, and styling goals.",
    category: 'Hair Care',
    date: 'September 2026',
  },
  {
    slug: 'day-in-life-hairdresser',
    title: 'A Day in the Life of a Professional Hairdresser',
    excerpt: 'Go behind the scenes with our senior stylists and discover what it takes to create beautiful hair every day.',
    category: 'Behind the Scenes',
    date: 'September 2026',
  },
  {
    slug: 'keratin-treatment-guide',
    title: 'The Complete Guide to Keratin Treatments',
    excerpt: 'Everything you need to know about keratin treatments — what they are, how they work, and if they\'re right for you.',
    category: 'Treatments',
    date: 'August 2026',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-dark-card border-b border-dark-border text-center">
        <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Hair Inspiration</h4>
        <h1 className="font-forum text-5xl md:text-7xl text-white">Our Blog</h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Tips, trends, and transformations from the Stylora team.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="border border-dark-border group hover:border-accent transition-colors">
                <div className="bg-zinc-800 aspect-video flex items-center justify-center overflow-hidden">
                  <div className="text-center group-hover:scale-95 transition-transform duration-500 p-8">
                    <p className="text-accent text-xs tracking-widest uppercase mb-2">{post.category}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent mx-auto">
                      <path d="M8.252 18.459C7.462 19.764 7.107 21 5.7 21C4.209 21 3 19.757 3 18.223s1.209-2.778 2.7-2.778c1.4 0 2.55 1.095 2.686 2.498a.85.85 0 0 1-.134.515m0 0l1.948-3.476" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-xs tracking-widest uppercase">{post.category}</span>
                    <span className="text-dark-border">•</span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-forum text-xl text-white mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs tracking-widest uppercase text-accent flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M0 10L8 2M8 2H2M8 2V8" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

