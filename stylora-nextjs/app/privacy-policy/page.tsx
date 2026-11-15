import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms – Stylora Hair Salon',
  description: 'Privacy policy, booking cancellations, and terms of service for Stylora Salon.',
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-dark-lighter border-b border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-accent text-xs tracking-widest uppercase mb-3">Client Policies</p>
          <h1 className="font-forum text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Privacy Policy & Terms
          </h1>
          <p className="text-zinc-400 font-jost max-w-2xl mx-auto leading-relaxed">
            Last Updated: November 2026. Please review our client policies regarding appointments, data handling, and cancellation guidelines.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 font-jost text-zinc-300 space-y-10">
        <div>
          <h2 className="font-forum text-2xl sm:text-3xl text-white mb-4">1. Information We Collect</h2>
          <p className="leading-relaxed text-zinc-400 mb-4">
            When you schedule an appointment or purchase products through Stylora, we collect essential details including your full name, email address, phone number, and service preferences. We also keep a record of your color formulations and past styling treatments to ensure consistent, personalized care.
          </p>
          <p className="leading-relaxed text-zinc-400">
            Payment transactions are processed securely through certified PCI-compliant gateways. We do not store complete credit card numbers on salon servers.
          </p>
        </div>

        <div>
          <h2 className="font-forum text-2xl sm:text-3xl text-white mb-4">2. Appointment & Cancellation Policy</h2>
          <p className="leading-relaxed text-zinc-400 mb-4">
            We value the dedicated time of our master stylists. If you need to reschedule or cancel your appointment, please provide at least <span className="text-white font-medium">24 hours advance notice</span>.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>Cancellations with less than 24 hours notice may incur a 50% service fee.</li>
            <li>No-shows will be charged the full value of the scheduled session.</li>
            <li>For extensive treatments (Balayage, Keratin, Extensions), a non-refundable deposit is required at booking.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-forum text-2xl sm:text-3xl text-white mb-4">3. How We Use Your Information</h2>
          <p className="leading-relaxed text-zinc-400 mb-4">
            We utilize your information strictly to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>Confirm, manage, and send reminders for your appointments via SMS and email.</li>
            <li>Maintain historical notes on your customized color formulations and scalp sensitivity records.</li>
            <li>Send occasional salon announcements, seasonal offers, and beauty masterclasses (you may opt out anytime).</li>
          </ul>
        </div>

        <div>
          <h2 className="font-forum text-2xl sm:text-3xl text-white mb-4">4. Contact & Inquiries</h2>
          <p className="leading-relaxed text-zinc-400">
            For questions regarding privacy, your personal records, or salon terms, please reach out to our front desk team at{' '}
            <a href="mailto:privacy@stylora.com" className="text-accent hover:underline">
              privacy@stylora.com
            </a>{' '}
            or call us at +1 (987) 654 321.
          </p>
        </div>

        <div className="pt-8 border-t border-dark-border text-center">
          <Link href="/" className="btn-accent inline-block text-xs uppercase tracking-widest">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

