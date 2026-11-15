import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BookingStrip from '@/components/BookingStrip';

const postsData: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    content: string[];
  }
> = {
  'trendy-haircuts-transform-your-look': {
    title: 'Trendy Haircuts That Will Transform Your Look',
    category: 'Trends',
    date: 'November 2026',
    author: 'Elena Vance',
    readTime: '4 min read',
    content: [
      'Every season brings fresh perspectives on classic silhouettes, and this year is no exception. Whether you are looking for an edgy update or a subtle elevation of your natural hair texture, current trends emphasize healthy hair with effortless movement.',
      'From modern butterfly cuts and face-framing curtain bangs to sharp Italian bobs and textured shags, our master stylists guide you through selecting the ideal cut tailored to your personal bone structure and lifestyle.',
      'Book a one-on-one consultation with our senior stylists to explore custom cut designs, personalized styling tips, and home care routines that keep your hair runway-ready every day.',
    ],
  },
  'maintain-vibrant-hair-color': {
    title: 'How to Maintain Vibrant Hair Color for Longer',
    category: 'Tips & Tricks',
    date: 'October 2026',
    author: 'Marcus Chen',
    readTime: '5 min read',
    content: [
      'Investing in a stunning hair color transformation is only half the journey. Maintaining rich tonality, high gloss, and fiber strength between salon visits requires a disciplined yet rewarding care regimen.',
      'Sulfate-free shampoos, lukewarm wash temperatures, and UV protectants are essential barriers against oxidation and fading. Incorporating bond-building conditioning masks once a week restores internal integrity after chemical processes.',
      'Our color specialists recommend scheduling an express Gloss & Glow treatment every 4-6 weeks to refresh your shine and lock in rich tones.',
    ],
  },
  'celebrity-inspired-beauty-trends': {
    title: 'Celebrity-Inspired Hair and Beauty Trends',
    category: 'Inspiration',
    date: 'October 2026',
    author: 'Sophia Rossi',
    readTime: '3 min read',
    content: [
      'Red carpets and fashion weeks serve as a vibrant canvas for hair innovation. High-octane blowouts, micro bangs, and copper-toned balayage are captivating audiences worldwide.',
      'At Stylora, we adapt high-fashion editorial looks into wearable, practical hairstyles tailored to your routine and personal aesthetic.',
      'Whether you desire sleek glass hair or romantic loose waves, our team brings celebrity-grade styling directly to Brooklyn.',
    ],
  },
  'how-often-trim-hair': {
    title: 'How Often Should You Trim Your Hair?',
    category: 'Hair Care',
    date: 'September 2026',
    author: 'David Kim',
    readTime: '4 min read',
    content: [
      'A common question clients ask is how frequently they need a trim. The answer depends heavily on your cut, chemical treatments, and growth objectives.',
      'Short pixie cuts and fades typically require touch-ups every 3 to 4 weeks to maintain sharp outlines. Medium to long styles thrive with trims every 8 to 10 weeks to prevent split ends from traveling up the shaft.',
      'Regular dry dusting or express trims preserve your length while guaranteeing bouncy, healthy ends.',
    ],
  },
  'day-in-life-hairdresser': {
    title: 'A Day in the Life of a Professional Hairdresser',
    category: 'Behind the Scenes',
    date: 'September 2026',
    author: 'Elena Vance',
    readTime: '6 min read',
    content: [
      'Step into Stylora before our doors open: the aroma of botanical oils, the hum of sterilized tools, and team discussions on the day\'s bespoke color formulations.',
      'Our stylists blend artistic intuition with chemical science, tailoring every consultation to our guests\' unique expectations and hair biology.',
      'Discover the passion, dedication, and ongoing education that fuels our craft and elevates the salon experience.',
    ],
  },
  'keratin-treatment-guide': {
    title: 'The Complete Guide to Keratin Treatments',
    category: 'Treatments',
    date: 'September 2026',
    author: 'Marcus Chen',
    readTime: '5 min read',
    content: [
      'Frizz, humidity resistance, and smoothing are among the top hair care goals. Keratin smoothing therapies rebuild porous hair cuticles, infusing natural proteins back into each strand.',
      'The result is dramatically reduced drying time, silky softness, and mirror-like shine lasting up to 4 to 6 months with appropriate sulfate-free maintenance.',
      'Consult with our treatment specialists to decide whether a full smoothing therapy or express express botox treatment best suits your texture.',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = postsData[params.slug];
  if (!post) {
    return { title: 'Post Not Found – Stylora' };
  }
  return {
    title: `${post.title} – Stylora Hair Salon`,
    description: post.content[0],
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = postsData[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-accent mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-forum text-4xl sm:text-5xl text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-sm">
            By <span className="text-white">{post.author}</span>
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <div className="prose prose-invert max-w-none space-y-6 text-zinc-300 font-jost text-lg leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border flex items-center justify-between">
          <Link
            href="/blog"
            className="text-accent hover:text-white transition-colors text-sm uppercase tracking-wider inline-flex items-center gap-2"
          >
            ← Back to All Articles
          </Link>
          <Link
            href="/booking"
            className="btn-accent text-sm"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      <BookingStrip />
    </div>
  );
}

