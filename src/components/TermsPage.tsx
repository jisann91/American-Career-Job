import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
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

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">Last updated: February 23, 2026</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-4">
            By accessing and using American Career Guide ("the Website"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Website.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. Nature of Service</h2>
          <p className="text-slate-600 mb-4">
            American Career Guide is an independent career resource and marketing platform. We are not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. or its subsidiaries. We provide information about job opportunities and redirect users to official application portals.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Affiliate Disclosure</h2>
          <p className="text-slate-600 mb-4">
            The Website contains affiliate links. This means we may receive a commission if you click on a link and complete an action (such as submitting a job application). This does not affect your application or the information we provide.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Use of Information</h2>
          <p className="text-slate-600 mb-4">
            The information provided on the Website is for general informational purposes only. While we strive for accuracy, we make no guarantees regarding the availability of specific jobs, pay rates, or benefits.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-slate-600 mb-4">
            American Career Guide shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Website or the information provided herein.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Changes to Terms</h2>
          <p className="text-slate-600 mb-4">
            We reserve the right to modify these terms at any time. Your continued use of the Website after changes are posted constitutes your acceptance of the new terms.
          </p>
        </div>
      </main>
    </div>
  );
}
