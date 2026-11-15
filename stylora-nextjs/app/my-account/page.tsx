'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'appointments' | 'orders' | 'profile'>('dashboard');

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Client Portal</p>
          <h1 className="font-forum text-4xl sm:text-5xl text-white mb-2">
            My Account
          </h1>
          <p className="text-zinc-400 font-jost text-sm">
            Manage your salon reservations, product orders, and hair profile.
          </p>
        </div>
      </section>

      {/* Account Dashboard */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Navigation */}
          <aside className="lg:col-span-3 space-y-1">
            <div className="bg-dark-card border border-dark-border p-6 mb-4 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent font-forum text-xl flex items-center justify-center mx-auto mb-3">
                JD
              </div>
              <h3 className="font-forum text-lg text-white">Jessica Davis</h3>
              <p className="text-xs text-accent font-jost">Stylora VIP Member</p>
              <p className="text-[11px] text-zinc-500 font-jost mt-1">2,450 Beauty Reward Points</p>
            </div>

            <nav className="bg-dark-card border border-dark-border divide-y divide-dark-border text-sm font-jost">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left px-5 py-3 transition-colors ${
                  activeTab === 'dashboard' ? 'text-accent bg-dark-lighter font-medium' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Dashboard Overview
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`w-full text-left px-5 py-3 transition-colors ${
                  activeTab === 'appointments' ? 'text-accent bg-dark-lighter font-medium' : 'text-zinc-300 hover:text-white'
                }`}
              >
                My Appointments (1 Upcoming)
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-5 py-3 transition-colors ${
                  activeTab === 'orders' ? 'text-accent bg-dark-lighter font-medium' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Boutique Orders
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-5 py-3 transition-colors ${
                  activeTab === 'profile' ? 'text-accent bg-dark-lighter font-medium' : 'text-zinc-300 hover:text-white'
                }`}
              >
                Hair Profile & Addresses
              </button>
            </nav>
          </aside>

          {/* Right Tab Content */}
          <main className="lg:col-span-9 bg-dark-card border border-dark-border p-8">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-forum text-2xl text-white mb-2">Welcome Back, Jessica!</h2>
                  <p className="text-zinc-400 font-jost text-sm leading-relaxed">
                    From your account dashboard you can view your recent appointments, manage shipping addresses, and review your customized color formula history.
                  </p>
                </div>

                {/* Upcoming Appointment Card */}
                <div className="p-6 bg-dark-lighter border border-dark-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">Next Confirmed Visit</span>
                    <h3 className="font-forum text-xl text-white mt-1">Balayage Hand-Painting + Deluxe Blowout</h3>
                    <p className="text-zinc-400 text-xs font-jost mt-1">
                      📅 Friday, Nov 27, 2026 • 10:30 AM • Stylist: Marcus Chen
                    </p>
                  </div>
                  <Link href="/booking" className="btn-outline text-xs uppercase tracking-widest py-2 px-4 whitespace-nowrap">
                    Reschedule
                  </Link>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-dark-lighter border border-dark-border text-center">
                    <span className="font-forum text-2xl text-accent block">5</span>
                    <span className="text-xs uppercase tracking-wider text-zinc-400">Total Visits</span>
                  </div>
                  <div className="p-4 bg-dark-lighter border border-dark-border text-center">
                    <span className="font-forum text-2xl text-accent block">2,450</span>
                    <span className="text-xs uppercase tracking-wider text-zinc-400">Reward Points</span>
                  </div>
                  <div className="p-4 bg-dark-lighter border border-dark-border text-center">
                    <span className="font-forum text-2xl text-accent block">$50 OFF</span>
                    <span className="text-xs uppercase tracking-wider text-zinc-400">Next Tier Reward</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="space-y-6">
                <h2 className="font-forum text-2xl text-white mb-4">Your Appointment History</h2>
                <div className="space-y-4">
                  <div className="p-5 border border-dark-border bg-dark-lighter flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                      <span className="text-[10px] text-green-400 font-semibold uppercase tracking-widest">Upcoming</span>
                      <h4 className="font-forum text-lg text-white">Balayage Hand-Painting & Blowout</h4>
                      <p className="text-xs text-zinc-400">Nov 27, 2026 at 10:30 AM • Marcus Chen • $225.00</p>
                    </div>
                    <span className="text-xs text-accent uppercase tracking-wider font-semibold">Confirmed</span>
                  </div>

                  <div className="p-5 border border-dark-border bg-dark-lighter/40 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-widest">Completed</span>
                      <h4 className="font-forum text-lg text-zinc-300">Intensive Deep Conditioning & Trim</h4>
                      <p className="text-xs text-zinc-500">Aug 14, 2026 at 02:00 PM • Elena Vance • $75.00</p>
                    </div>
                    <Link href="/booking" className="text-xs text-accent hover:underline">
                      Book Again
                    </Link>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/booking" className="btn-accent text-xs uppercase tracking-widest inline-block">
                    Book New Appointment
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="font-forum text-2xl text-white mb-4">Boutique Orders</h2>
                <div className="border border-dark-border divide-y divide-dark-border text-sm font-jost">
                  <div className="p-4 bg-dark-lighter flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Order #STY-849201</p>
                      <p className="text-xs text-zinc-400">Oct 12, 2026 • 2 items • $127.00</p>
                    </div>
                    <span className="text-xs text-green-400 bg-green-950/40 px-3 py-1 border border-green-800/40">
                      Delivered
                    </span>
                  </div>
                </div>
                <Link href="/shop" className="btn-outline text-xs uppercase tracking-widest inline-block">
                  Shop More Products
                </Link>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="font-forum text-2xl text-white mb-4">Hair Profile & Formula Notes</h2>
                <div className="bg-dark-lighter p-5 border border-dark-border space-y-3 text-xs font-jost text-zinc-300">
                  <div className="flex justify-between border-b border-dark-border/60 pb-2">
                    <span className="text-zinc-500">Hair Type / Texture:</span>
                    <span className="text-white">Fine, Wavy (Type 2A), High Porosity</span>
                  </div>
                  <div className="flex justify-between border-b border-dark-border/60 pb-2">
                    <span className="text-zinc-500">Primary Colorist:</span>
                    <span className="text-white">Marcus Chen</span>
                  </div>
                  <div className="flex justify-between border-b border-dark-border/60 pb-2">
                    <span className="text-zinc-500">Recent Formulation:</span>
                    <span className="text-white">L&apos;Oréal DiaLight 9.02 Milkshake Pearl + 6 Vol</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Allergies / Notes:</span>
                    <span className="text-white">Prefers sulfate-free lavender wash</span>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}

