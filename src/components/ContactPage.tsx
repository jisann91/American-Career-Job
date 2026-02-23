import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-lg">
              A
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">American Career Guide</span>
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions about Amazon job opportunities? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-orange-500 focus:ring-orange-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-orange-500 focus:ring-orange-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-orange-500 focus:ring-orange-500" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full rounded-xl bg-orange-500 py-4 text-sm font-bold text-white hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-6">Our Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Email</p>
                    <p className="text-sm text-slate-600">support@americancareerguide.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Office</p>
                    <p className="text-sm text-slate-600">123 Career Way, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <h3 className="text-lg font-bold mb-2">Looking for a job?</h3>
              <p className="text-slate-400 text-sm mb-6">Apply directly through our portal for the fastest response.</p>
              <a href="https://www.af9m8trk.com/ZAK11BD6/QLQ11Y4B/" className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-400">
                Go to Application Portal →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
