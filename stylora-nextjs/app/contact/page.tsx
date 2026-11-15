'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-dark-card border-b border-dark-border text-center">
        <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Get In Touch</h4>
        <h1 className="font-forum text-5xl md:text-7xl text-white">Contact Us</h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Have a question? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-8">Salon Info</h4>
              <div className="space-y-8">
                {[
                  {
                    title: 'Address',
                    content: '5th Avenue, E 28th St,\nBrooklyn New York 2300 USA',
                  },
                  {
                    title: 'Phone',
                    content: '+1 (987) 654 321',
                  },
                  {
                    title: 'Email',
                    content: 'booking@stylora.com',
                  },
                  {
                    title: 'Opening Hours',
                    content: 'Monday – Friday: 08:00 AM – 10:00 PM\nSaturday – Sunday: 10:00 AM – 06:00 PM',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-px bg-accent flex-shrink-0 self-stretch" />
                    <div>
                      <h5 className="text-xs tracking-widest uppercase text-accent mb-2">{item.title}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-8">Send a Message</h4>
              {submitted ? (
                <div className="border border-accent p-8 text-center">
                  <p className="font-forum text-2xl text-white mb-2">Message Sent!</p>
                  <p className="text-gray-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email Address"
                    required
                    className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                  />
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent text-dark text-sm tracking-widest uppercase font-jost hover:bg-accent-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

