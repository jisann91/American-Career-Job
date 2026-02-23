import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck, Star, Users } from 'lucide-react';

const AFFILIATE_LINK = "https://www.af9m8trk.com/ZAK11BD6/QLQ11Y4B/";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-xl">
              A
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">American Career Guide</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#jobs" className="hover:text-orange-500 transition-colors">Available Jobs</a>
            <a href="#benefits" className="hover:text-orange-500 transition-colors">Benefits</a>
            <a href="#how-it-works" className="hover:text-orange-500 transition-colors">How it Works</a>
          </div>
          <a
            href={AFFILIATE_LINK}
            className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all shadow-sm"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600 ring-1 ring-inset ring-orange-500/20 mb-6">
                <Star className="h-4 w-4 fill-current" />
                <span>Hiring Now: Amazon Fulfillment & Delivery</span>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                Start Your Career at <span className="text-orange-500 underline decoration-orange-200 underline-offset-8">Amazon</span> Today.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
                Find stable, high-paying jobs in your area. Whether you're looking for full-time careers or flexible part-time shifts, we guide you to the best opportunities at Amazon.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={AFFILIATE_LINK}
                  className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
                >
                  Apply Now <ArrowRight className="h-5 w-5" />
                </a>
                <div className="flex items-center gap-4 px-4 py-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-white object-cover"
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    <span className="text-slate-900 font-bold">500+</span> people applied today
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
                <img
                  src="https://picsum.photos/seed/amazon-warehouse/800/600"
                  alt="Amazon Warehouse"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Updates</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  New positions opened in your zip code.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Starting Pay', value: '$19+/hr' },
              { label: 'Full/Part Time', value: 'Available' },
              { label: 'Sign-on Bonus', value: 'Up to $3,000' },
              { label: 'Benefits', value: 'Day 1' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Types */}
      <section id="jobs" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Positions Available Nationwide</h2>
            <p className="mt-4 text-lg text-slate-600">
              Amazon is hiring for a variety of roles. No previous experience required for most entry-level positions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Fulfillment Center',
                desc: 'Pick, pack, and ship customer orders. Great for those who like to stay active.',
                icon: <MapPin className="h-6 w-6 text-orange-500" />,
                type: 'Full-Time / Part-Time'
              },
              {
                title: 'Delivery Station',
                desc: 'The final stop before packages head to customers. Sort and prepare for delivery.',
                icon: <Clock className="h-6 w-6 text-orange-500" />,
                type: 'Flexible Shifts'
              },
              {
                title: 'Amazon Air',
                desc: 'Load and unload cargo from planes. Exciting roles in the aviation logistics sector.',
                icon: <Users className="h-6 w-6 text-orange-500" />,
                type: 'Full-Time'
              }
            ].map((job, i) => (
              <div key={i} className="group relative rounded-3xl border border-slate-200 bg-white p-8 hover:border-orange-500/50 hover:shadow-xl transition-all">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {job.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="mt-2 text-sm font-medium text-orange-600">{job.type}</p>
                <p className="mt-4 text-slate-600 leading-relaxed">{job.desc}</p>
                <a
                  href={AFFILIATE_LINK}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:justify-between gap-16">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Work at Amazon?</h2>
              <p className="mt-6 text-lg text-slate-400">
                Beyond the competitive pay, Amazon offers a comprehensive benefits package that starts on your very first day.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  'Health, Dental, and Vision Insurance',
                  '401(k) with Company Match',
                  'Paid Time Off (PTO) and Holiday Pay',
                  'Career Choice: 95% Tuition Coverage',
                  'Employee Assistance Program (EAP)'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a
                  href={AFFILIATE_LINK}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-slate-900 hover:bg-slate-100 transition-all"
                >
                  Apply Now
                </a>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/benefit1/400/500" alt="Benefit" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/benefit2/400/500" alt="Benefit" className="rounded-2xl shadow-2xl mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-slate-400 mb-6" />
          <h2 className="text-2xl font-bold text-slate-900">Your Trusted Career Partner</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            American Career Guide is dedicated to connecting hard-working individuals with the best employment opportunities at top companies like Amazon. We simplify the application process so you can start working faster.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-lg">
                  A
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">American Career Guide</span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Helping Americans find stable careers and flexible work opportunities at Amazon locations nationwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li><a href="#jobs" className="hover:text-orange-500">Available Jobs</a></li>
                <li><a href="#benefits" className="hover:text-orange-500">Benefits</a></li>
                <li><a href="/contact" className="hover:text-orange-500">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li><a href="/privacy" className="hover:text-orange-500">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-500">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} American Career Guide. All rights reserved. Not affiliated with Amazon.com, Inc.
            </p>
            <div className="flex gap-6">
              <a href={AFFILIATE_LINK} className="text-xs font-bold text-orange-600 hover:underline">Apply Now</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
