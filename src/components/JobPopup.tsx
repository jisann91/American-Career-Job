import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, ArrowRight } from 'lucide-react';

const AFFILIATE_LINK = "https://www.af9m8trk.com/ZAK11BD6/QLQ11Y4B/";

export default function JobPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showPopup = () => {
      setIsOpen(true);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrolled = window.scrollY;
      const scrollPercentage = (scrolled / scrollHeight) * 100;

      if (scrollPercentage > 30) {
        showPopup();
      }
    };

    const timer = setTimeout(() => {
      showPopup();
    }, 5000); // 5s fallback

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenJobPopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Header Image/Pattern */}
            <div className="h-32 bg-orange-500 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
              <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <button 
                onClick={closePopup}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/10 text-white hover:bg-black/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Are you looking for a job?
              </h2>
              <p className="text-slate-600 mb-8">
                Amazon has part-time and full-time opportunities available in your area. Apply today and start your career!
              </p>

              <div className="space-y-3">
                <a
                  href={AFFILIATE_LINK}
                  onClick={closePopup}
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-orange-500 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all"
                >
                  Apply Now <ArrowRight className="h-5 w-5" />
                </a>
                <button
                  onClick={closePopup}
                  className="w-full py-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
                >
                  No, maybe later
                </button>
              </div>
            </div>

            {/* Bottom Badge */}
            <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Hiring Now in your area
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
