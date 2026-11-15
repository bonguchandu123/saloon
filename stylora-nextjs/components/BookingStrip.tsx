'use client';

import { useState } from 'react';

const timeSlots = [
  '08:00AM', '08:30AM', '09:00AM', '09:30AM', '10:00AM', '10:30AM',
  '11:00AM', '11:30AM', '12:00PM', '12:30PM', '01:00PM', '01:30PM',
  '02:00PM', '02:30PM', '03:00PM', '03:30PM', '04:00PM', '04:30PM',
  '05:00PM', '05:30PM', '06:00PM', '06:30PM', '07:00PM', '07:30PM',
  '08:00PM',
];

export default function BookingStrip() {
  const [form, setForm] = useState({
    name: '', phone: '', date: '', time: '09:00AM',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-dark-card border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h4 className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Quick Booking</h4>
          <h2 className="font-forum text-3xl md:text-4xl text-white">Reserve Your Spot Today</h2>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <p className="text-accent font-forum text-2xl">✓ Booking Request Received!</p>
            <p className="text-gray-400 mt-2">We will contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 bg-dark border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-dark border border-dark-border text-white text-sm placeholder-gray-500 focus:border-accent outline-none transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-5 py-4 bg-dark border border-dark-border text-white text-sm focus:border-accent outline-none transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <select
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full px-5 py-4 bg-dark border border-dark-border text-white text-sm focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-accent text-dark text-sm tracking-widest uppercase font-jost hover:bg-accent-light transition-colors"
              >
                Book Your Visit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

