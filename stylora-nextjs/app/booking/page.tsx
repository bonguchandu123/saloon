'use client';

import { useState } from 'react';

const timeSlots = [
  '08:00AM', '08:30AM', '09:00AM', '09:30AM', '10:00AM', '10:30AM',
  '11:00AM', '11:30AM', '12:00PM', '12:30PM', '01:00PM', '01:30PM',
  '02:00PM', '02:30PM', '03:00PM', '03:30PM', '04:00PM', '04:30PM',
  '05:00PM', '05:30PM', '06:00PM', '06:30PM', '07:00PM', '07:30PM',
  '08:00PM',
];

const services = [
  'Haircut & Blow-Dry',
  'Express Dry Trim',
  "Men's Fade & Style",
  'Deep Conditioning Treatment',
  'Olaplex® Bond Rebuild',
  'Keratin Smoothing Therapy',
  'Single Process Color',
  'Partial Foil Highlights',
  'Full-Head Foil Highlights',
  'Balayage Hand-Painting',
  'Hair Extensions – Tape-In',
  'Scalp Detox & Massage',
  'Bridal Package',
  'Other',
];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', date: '', time: '09:00AM', notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-dark min-h-screen flex items-center justify-center">
        <div className="text-center px-6 py-20">
          <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L20 7" stroke="#B2A096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="font-forum text-4xl text-white mb-4">Booking Confirmed!</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Thank you, {form.name}! We&apos;ve received your booking request and will confirm your appointment via email or phone shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="border border-accent text-accent px-8 py-3 text-sm tracking-widest uppercase hover:bg-accent hover:text-dark transition-colors"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen">
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-dark-card border-b border-dark-border text-center">
        <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Reserve Your Spot</h4>
        <h1 className="font-forum text-5xl md:text-7xl text-white">Book An Appointment</h1>
        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Complete the form below and our team will confirm your appointment within 24 hours.
        </p>
      </section>

      {/* Booking Form */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs tracking-widest uppercase text-accent mb-3">Your Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-accent mb-3">Email Address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-accent mb-3">Phone Number *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (234) 567 8900"
                  required
                  className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-accent mb-3">Service *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a Service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-accent mb-3">Date *</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm focus:border-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-accent mb-3">Preferred Time *</label>
                <select
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-accent mb-3">Additional Notes</label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Any special requests, allergies, or notes for your stylist..."
                rows={5}
                className="w-full px-5 py-4 bg-dark-card border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-accent text-dark text-sm tracking-widest uppercase font-jost hover:bg-accent-light transition-colors"
            >
              Confirm Booking
            </button>
          </form>

          {/* Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-dark-border pt-12">
            {[
              { title: 'Phone', info: '+1 (987) 654 321' },
              { title: 'Email', info: 'booking@stylora.com' },
              { title: 'Hours', info: 'Mon–Fri: 8AM–10PM\nSat–Sun: 10AM–6PM' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h4 className="text-xs tracking-widest uppercase text-accent mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm whitespace-pre-line">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

