import React from 'react';

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">Last updated: February 23, 2026</p>
          
          <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 mb-4">
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or when you contact us.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Communicate with you, either directly or through one of our partners</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Cookies and Tracking</h2>
          <p className="text-slate-600 mb-4">
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Third-Party Links</h2>
          <p className="text-slate-600 mb-4">
            Our website contains links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Data Security</h2>
          <p className="text-slate-600 mb-4">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Contact Us</h2>
          <p className="text-slate-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@americancareerguide.com.
          </p>
        </div>
      </main>
    </div>
  );
}
