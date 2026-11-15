'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  slug: string;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Triple Barrel Ceramic Wave Curler',
      category: 'Styling Tools',
      price: 85,
      quantity: 1,
      slug: 'triple-barrel-wave-curler',
    },
    {
      id: '2',
      name: 'Botanical Argan Elixir Oil 100ml',
      category: 'Hair Care',
      price: 42,
      quantity: 2,
      slug: 'botanical-argan-elixir-oil',
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setItems(items.filter((item) => item.id !== id));
    } else {
      setItems(
        items.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'STYLORA10') {
      setDiscount(0.1);
      setPromoApplied(true);
    }
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 75 || items.length === 0 ? 0 : 9.99;
  const total = subtotal - discountAmount + shipping;

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Your Selection</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Shopping Bag
          </h1>
          <p className="text-zinc-400 font-jost max-w-2xl mx-auto leading-relaxed">
            Review your salon boutique selections prior to our secure checkout.
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {items.length === 0 ? (
          <div className="text-center py-16 bg-dark-card border border-dark-border">
            <h2 className="font-forum text-3xl text-white mb-4">Your bag is currently empty</h2>
            <p className="text-zinc-400 font-jost text-sm mb-8">
              Explore our boutique to find professional hot tools and nourishing botanical treatments.
            </p>
            <Link href="/shop" className="btn-accent text-xs uppercase tracking-widest inline-block">
              Browse Boutique
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Items Table */}
            <div className="lg:col-span-8">
              <div className="border border-dark-border bg-dark-card overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 text-xs uppercase tracking-widest text-zinc-400 bg-dark-lighter p-4 border-b border-dark-border">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>

                <div className="divide-y divide-dark-border">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
                    >
                      <div className="sm:col-span-6 flex items-center gap-4">
                        <div className="w-16 h-16 bg-zinc-900 border border-dark-border flex items-center justify-center flex-shrink-0">
                          <span className="text-accent text-xs">Stylora</span>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-accent mb-0.5">
                            {item.category}
                          </p>
                          <Link
                            href={`/shop/${item.slug}`}
                            className="font-forum text-lg text-white hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => updateQuantity(item.id, 0)}
                            className="text-xs text-red-400 hover:text-red-300 block mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="sm:col-span-2 text-left sm:text-center text-sm text-zinc-300 font-jost">
                        ${item.price.toFixed(2)}
                      </div>

                      <div className="sm:col-span-2 flex justify-start sm:justify-center">
                        <div className="flex items-center border border-dark-border bg-dark-lighter">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-zinc-400 hover:text-white"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-xs text-white font-jost">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-zinc-400 hover:text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="sm:col-span-2 text-left sm:text-right font-forum text-lg text-accent">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Code Strip */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Promo Code (try STYLORA10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-dark-card border border-dark-border px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent flex-1 sm:max-w-xs"
                />
                <button
                  onClick={applyPromo}
                  className="btn-outline text-xs uppercase tracking-widest px-6"
                >
                  Apply Code
                </button>
                {promoApplied && (
                  <span className="text-xs text-green-400 self-center">✓ 10% discount applied!</span>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-dark-card border border-dark-border p-6 space-y-4">
                <h3 className="font-forum text-2xl text-white pb-3 border-b border-dark-border">
                  Order Summary
                </h3>

                <div className="flex justify-between text-sm text-zinc-400 font-jost">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-green-400 font-jost">
                    <span>Discount (10%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm text-zinc-400 font-jost">
                  <span>Standard Shipping</span>
                  <span className="text-white">
                    {shipping === 0 ? 'FREE (Orders over $75)' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="border-t border-dark-border pt-4 flex justify-between items-baseline">
                  <span className="font-forum text-xl text-white">Estimated Total</span>
                  <span className="font-forum text-3xl text-accent font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="pt-4">
                  <Link
                    href="/checkout"
                    className="btn-accent w-full block text-center text-xs uppercase tracking-widest py-3.5"
                  >
                    Proceed to Checkout
                  </Link>
                </div>

                <p className="text-[11px] text-zinc-500 text-center font-jost pt-2">
                  🔒 Encrypted 256-Bit SSL Checkout Protection
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

