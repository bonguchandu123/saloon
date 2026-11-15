'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'We offer haircuts, styling, coloring, treatments, makeup, facials, and more. Some branches also offer bridal packages and nail services.',
  },
  {
    q: 'Do I need to book an appointment in advance?',
    a: 'While walk-ins are welcome, we recommend booking in advance to ensure availability with your preferred stylist or time slot.',
  },
  {
    q: 'What hair products do you use?',
    a: 'We use high-quality, salon-grade products from trusted brands to protect and enhance your hair\'s health and shine.',
  },
  {
    q: 'Do you offer services for men and children?',
    a: 'Yes! We provide haircuts and grooming services for men and kids in a comfortable, family-friendly environment.',
  },
  {
    q: 'Do you offer bridal and party makeup?',
    a: 'Yes, we specialize in bridal, party, and event makeup with customized packages for individuals and groups.',
  },
  {
    q: 'Do you offer any loyalty programs?',
    a: 'Yes! We offer seasonal discounts, referral bonuses, and loyalty cards for regular clients. Ask at the front desk or follow us online for updates.',
  },
  {
    q: 'Are your stylists trained and certified?',
    a: 'Yes. All of our hairstylists are trained professionals with certifications and ongoing education in the latest techniques and trends.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-dark border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-[3/4] bg-zinc-800 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-accent mx-auto mb-4">
                  <path d="M8.252 18.459C7.462 19.764 7.107 21 5.7 21C4.209 21 3 19.757 3 18.223s1.209-2.778 2.7-2.778c1.4 0 2.55 1.095 2.686 2.498a.85.85 0 0 1-.134.515m0 0l1.948-3.476m5.548 3.476C16.538 19.764 16.893 21 18.3 21c1.491 0 2.7-1.243 2.7-2.777s-1.209-2.778-2.7-2.778c-1.4 0-2.55 1.095-2.687 2.498c-.017.182.04.36.135.515m0 0L7.093 3.346a.66.66 0 0 0-1.1-.081c-1.704 2.19-1.534 5.35.395 7.333zm-3.797-6.63l4.953-8.494a.66.66 0 0 1 1.098-.076c1.707 2.194 1.537 5.358-.395 7.345L16.5 11.742" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-accent text-sm tracking-widest uppercase">Stylora Gallery</p>
              </div>
            </div>
          </div>

          {/* Right: FAQs */}
          <div>
            <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">FAQ&apos;S</h4>
            <h2 className="font-forum text-4xl md:text-5xl text-white mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-1">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-dark-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-white text-sm font-jost group-hover:text-accent transition-colors pr-4">
                      {faq.q}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                    >
                      <path d="M7 17L17 7M17 7H10M17 7V14" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </button>
                  <div className={`faq-content ${openIndex === i ? 'open' : ''}`}>
                    <p className="text-gray-400 text-sm leading-relaxed pb-5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

