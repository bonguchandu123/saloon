import type { Metadata } from 'next';
import Link from 'next/link';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: 'Blog (Left Sidebar) – Stylora Hair Salons',
  description: 'Hair care advice, coloring guides, and celebrity trends with curated sidebar navigation.',
};

const posts = [
  {
    slug: 'trendy-haircuts-transform-your-look',
    title: 'Trendy Haircuts That Will Transform Your Look',
    excerpt: 'Discover the hottest haircut trends of the season and find the perfect style for your face shape.',
    category: 'Trends',
    date: 'November 2026',
    author: 'Elena Vance',
  },
  {
    slug: 'maintain-vibrant-hair-color',
    title: 'How to Maintain Vibrant Hair Color for Longer',
    excerpt: 'Expert tips from our colorists on keeping your hair color fresh, vibrant, and beautiful between salon visits.',
    category: 'Tips & Tricks',
    date: 'October 2026',
    author: 'Marcus Chen',
  },
  {
    slug: 'celebrity-inspired-beauty-trends',
    title: 'Celebrity-Inspired Hair and Beauty Trends',
    excerpt: 'Get the looks you love from the red carpet, adapted for real life by our styling experts.',
    category: 'Inspiration',
    date: 'October 2026',
    author: 'Sophia Rossi',
  },
  {
    slug: 'how-often-trim-hair',
    title: 'How Often Should You Trim Your Hair?',
    excerpt: 'The definitive guide to hair trimming frequency based on your hair type, length, and styling goals.',
    category: 'Hair Care',
    date: 'September 2026',
    author: 'David Kim',
  },
  {
    slug: 'day-in-life-hairdresser',
    title: 'A Day in the Life of a Professional Hairdresser',
    excerpt: 'Go behind the scenes with our senior stylists and discover what it takes to create beautiful hair every day.',
    category: 'Behind the Scenes',
    date: 'September 2026',
    author: 'Elena Vance',
  },
  {
    slug: 'keratin-treatment-guide',
    title: 'The Complete Guide to Keratin Treatments',
    excerpt: 'Everything you need to know about keratin treatments — what they are, how they work, and if they are right for you.',
    category: 'Treatments',
    date: 'September 2026',
    author: 'Marcus Chen',
  },
];

const categories = [
  { name: 'Trends', count: 4 },
  { name: 'Tips & Tricks', count: 6 },
  { name: 'Hair Care', count: 8 },
  { name: 'Inspiration', count: 3 },
  { name: 'Treatments', count: 5 },
  { name: 'Behind the Scenes', count: 2 },
];

const tags = ['Balayage', 'Bob Cut', 'Keratin', 'Blonde Care', 'Extensions', 'Styling', 'Gloss'];

export default function BlogLeftSidebarPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Our Journal</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Blog – Left Sidebar
          </h1>
          <p className="text-zinc-400 font-jost max-w-2xl mx-auto leading-relaxed">
            Professional hair advice, product knowledge, and seasonal styling direction from our master team.
          </p>
        </div>
      </section>

      {/* Main Container: Left Sidebar + Right Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 space-y-10 order-2 lg:order-1">
            {/* Search Widget */}
            <div className="bg-dark-card border border-dark-border p-6">
              <h3 className="font-forum text-xl text-white mb-4">Search Journal</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="bg-dark-lighter border border-dark-border px-3 py-2 text-sm text-white placeholder-zinc-500 w-full focus:outline-none focus:border-accent"
                />
                <button className="bg-accent text-dark px-4 text-sm font-semibold">🔍</button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-dark-card border border-dark-border p-6">
              <h3 className="font-forum text-xl text-white mb-4">Categories</h3>
              <ul className="space-y-2 text-sm font-jost">
                {categories.map((cat) => (
                  <li key={cat.name} className="flex justify-between items-center text-zinc-400 hover:text-accent transition-colors cursor-pointer border-b border-dark-border/40 pb-2">
                    <span>{cat.name}</span>
                    <span className="text-xs bg-dark-lighter px-2 py-0.5 rounded text-zinc-500">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Salon Hours Widget */}
            <div className="bg-dark-card border border-dark-border p-6">
              <h3 className="font-forum text-xl text-white mb-4">Salon Hours</h3>
              <div className="space-y-3 text-xs font-jost text-zinc-400">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-white">08:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday – Sunday:</span>
                  <span className="text-white">10:00 AM – 06:00 PM</span>
                </div>
              </div>
              <Link href="/booking" className="btn-accent w-full block text-center mt-6 text-xs uppercase tracking-widest">
                Book Visit
              </Link>
            </div>

            {/* Tag Cloud */}
            <div className="bg-dark-card border border-dark-border p-6">
              <h3 className="font-forum text-xl text-white mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-dark-lighter border border-dark-border text-zinc-300 px-3 py-1 hover:border-accent hover:text-accent cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Posts Grid */}
          <main className="lg:col-span-8 space-y-10 order-1 lg:order-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-dark-card border border-dark-border p-8 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-accent mb-3">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="font-forum text-2xl sm:text-3xl text-white mb-4 hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-zinc-400 font-jost text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-dark-border pt-4">
                  <span className="text-xs text-zinc-500 font-jost">By {post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-accent text-xs uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>

      <BookingStrip />
    </div>
  );
}

