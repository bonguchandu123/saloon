import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import BookingStrip from '@/components/BookingStrip';

export const metadata: Metadata = {
  title: "FAQ's – Stylora Hair Salon",
  description: 'Answers to your most common questions about Stylora hair salon services, booking, and policies.',
};

const additionalFaqs = [
  {
    q: 'What is your cancellation policy?',
    a: 'We ask that you cancel or reschedule at least 24 hours in advance. Late cancellations or no-shows may incur a fee of 50% of the service cost.',
  },
  {
    q: 'How long does a typical appointment take?',
    a: 'Service times vary. A basic haircut takes 30–60 minutes, while color services can take 2–4 hours. Consult our team for an accurate estimate.',
  },
  {
    q: 'Do you offer gift cards?',
    a: 'Yes! We offer gift cards in any amount. They make the perfect gift for birthdays, anniversaries, or any special occasion.',
  },
  {
    q: 'Can I request a specific stylist?',
    a: 'Absolutely! When booking, simply mention your preferred stylist and we will do our best to accommodate your request.',
  },
  {
    q: 'Do you offer a free consultation before color services?',
    a: 'Yes, we offer complimentary consultations for all color services. We want to ensure we understand your vision before we begin.',
  },
];

export default function FAQsPage() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-dark-card border-b border-dark-border text-center">
        <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Help Center</h4>
        <h1 className="font-forum text-5xl md:text-7xl text-white">FAQ&apos;s</h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Everything you need to know about our services, policies, and what to expect at Stylora.
        </p>
      </section>

      {/* Main FAQ */}
      <FAQSection />

      {/* Additional FAQs */}
      <section className="py-24 bg-dark-card border-t border-dark-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-forum text-4xl text-white">More Questions</h2>
          </div>
          <div className="space-y-6">
            {additionalFaqs.map((faq, i) => (
              <div key={i} className="border border-dark-border p-8">
                <h3 className="font-jost text-white text-base mb-4 font-medium">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Strip */}
      <BookingStrip />
    </div>
  );
}

