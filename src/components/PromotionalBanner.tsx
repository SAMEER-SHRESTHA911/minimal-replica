'use client';

import { useState, useEffect } from 'react';

const messages = [
  { text: 'about:blank // flatlist eyewear available now', href: '/' },
  { text: "drop:three of spring:summer '26 is now live", href: '/' },
  { text: 'US and EU orders now shipped duties & taxes paid', href: '/' },
];

export default function PromotionalBanner() {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('ab_promotional_banner');
      if (dismissed === '0') setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try { sessionStorage.setItem('ab_promotional_banner', '0'); } catch {}
  };

  return (
    <div
      className="flex items-center justify-center text-xs h-(--banner-h) relative"
      style={{ backgroundColor: '#4e4e4e', color: '#ffffff' }}
    >
      <a
        href={messages[current].href}
        className="flex items-center gap-xxxs tabular-nums truncate max-w-[65vw]"
      >
        <span className="truncate">{messages[current].text}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" fill="none" viewBox="0 0 12 8">
          <path stroke="currentColor" strokeWidth=".75" d="M1 4h10M8 .5 11 4 8 7.5" />
        </svg>
      </a>
      <button onClick={dismiss} className="absolute right-3 top-1/2 -translate-y-1/2" aria-label="Close banner">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 11.7 11.7" stroke="currentColor">
          <path d="M11.3.4L.4,11.3" />
          <path d="M.4.4l10.9,10.9" />
        </svg>
      </button>
    </div>
  );
}
