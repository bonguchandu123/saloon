'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col justify-center items-center py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-xs tracking-widest uppercase mb-4">Something Exceptional Is In The Works</p>
        <h1 className="font-forum text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
          Stylora Manhattan Studio
        </h1>
        <p className="text-zinc-400 font-jost text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          We are expanding our luxury hair sanctuary to Soho, New York. Prepare to indulge in couture hair styling and restorative head spa treatments.
        </p>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">
          <div className="bg-dark-card border border-dark-border p-4">
            <span className="font-forum text-3xl sm:text-4xl text-white block">48</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Days</span>
          </div>
          <div className="bg-dark-card border border-dark-border p-4">
            <span className="font-forum text-3xl sm:text-4xl text-white block">14</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Hours</span>
          </div>
          <div className="bg-dark-card border border-dark-border p-4">
            <span className="font-forum text-3xl sm:text-4xl text-white block">32</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Minutes</span>
          </div>
          <div className="bg-dark-card border border-dark-border p-4">
            <span className="font-forum text-3xl sm:text-4xl text-white block">18</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Seconds</span>
          </div>
        </div>

        {/* VIP Waitlist Form */}
        <div className="max-w-md mx-auto mb-10">
          {subscribed ? (
            <div className="p-4 bg-dark-card border border-accent text-accent text-sm font-jost">
              Thank you! You are on our VIP opening guest list.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for VIP access"
                className="bg-dark-lighter border border-dark-border px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent flex-1"
              />
              <button type="submit" className="btn-accent whitespace-nowrap text-xs uppercase tracking-widest">
                Notify Me
              </button>
            </form>
          )}
        </div>

        <Link
          href="/"
          className="text-zinc-500 hover:text-accent text-xs uppercase tracking-widest transition-colors inline-block"
        >
          ← Return to Main Salon Website
        </Link>
      </div>
    </div>
  );
}

