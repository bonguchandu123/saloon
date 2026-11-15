'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: 'NY',
    zip: '',
    paymentMethod: 'card',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-xl mx-auto bg-dark-card border border-dark-border p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            ✓
          </div>
          <p className="text-accent text-xs uppercase tracking-widest mb-2">Order Confirmed</p>
          <h1 className="font-forum text-3xl sm:text-4xl text-white mb-4">
            Thank You For Your Purchase
          </h1>
          <p className="text-zinc-400 font-jost text-sm leading-relaxed mb-6">
            We have sent an order confirmation and tracking details to <span className="text-white">{formData.email || 'your email'}</span>. Your luxury hair essentials are being prepared for dispatch.
          </p>
          <p className="text-xs text-zinc-500 font-jost mb-8">
            Order Reference: #STY-{Math.floor(100000 + Math.random() * 900000)}
          </p>
          <Link href="/shop" className="btn-accent text-xs uppercase tracking-widest inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Secure Payment</p>
          <h1 className="font-forum text-4xl sm:text-5xl text-white mb-3">
            Boutique Checkout
          </h1>
          <p className="text-zinc-400 font-jost text-sm">
            Complete your order details below.
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Billing & Shipping Information */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-dark-card border border-dark-border p-6 sm:p-8">
              <h2 className="font-forum text-2xl text-white mb-6">1. Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="House number and street name"
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-dark-card border border-dark-border p-6 sm:p-8">
              <h2 className="font-forum text-2xl text-white mb-6">2. Payment Method</h2>
              <div className="space-y-3 font-jost text-sm">
                <label className="flex items-center gap-3 p-3 border border-dark-border bg-dark-lighter cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="accent-accent"
                  />
                  <span className="text-white">Credit / Debit Card (Visa, Mastercard, Amex)</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-dark-border bg-dark-lighter cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="apple"
                    checked={formData.paymentMethod === 'apple'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'apple' })}
                    className="accent-accent"
                  />
                  <span className="text-white">Apple Pay / Google Pay</span>
                </label>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="mt-4 pt-4 border-t border-dark-border space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number (•••• •••• •••• ••••)"
                    className="w-full bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="bg-dark-lighter border border-dark-border px-3 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-5">
            <div className="bg-dark-card border border-dark-border p-6 sm:p-8 space-y-4 sticky top-28">
              <h3 className="font-forum text-2xl text-white pb-3 border-b border-dark-border">
                Your Order
              </h3>

              <div className="space-y-3 font-jost text-sm divide-y divide-dark-border/40">
                <div className="flex justify-between pt-2">
                  <span className="text-zinc-300">Triple Barrel Wave Curler × 1</span>
                  <span className="text-white">$85.00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-zinc-300">Botanical Argan Elixir × 2</span>
                  <span className="text-white">$84.00</span>
                </div>
                <div className="flex justify-between pt-2 text-zinc-400">
                  <span>Shipping</span>
                  <span className="text-white">FREE</span>
                </div>
              </div>

              <div className="border-t border-dark-border pt-4 flex justify-between items-baseline">
                <span className="font-forum text-xl text-white">Order Total</span>
                <span className="font-forum text-3xl text-accent font-semibold">$169.00</span>
              </div>

              <button
                type="submit"
                className="btn-accent w-full text-center text-xs uppercase tracking-widest py-3.5 mt-6 block"
              >
                Place Order • $169.00
              </button>

              <p className="text-[11px] text-zinc-500 text-center font-jost pt-2">
                By placing your order, you agree to Stylora&apos;s Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

