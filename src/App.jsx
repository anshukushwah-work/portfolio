import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Work from './pages/Work';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';

// Browsers restore the previous scroll offset on history navigation, which
// fights our own reset below and can leave a freshly-rendered page parked at
// an offset past its content — a blank screen until you reload. Taking manual
// control at module scope means it is set before the first navigation happens.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

/**
 * Client-side navigation otherwise keeps the previous page's scroll offset.
 *
 * This runs in useLayoutEffect, not useEffect, so the scroll resets *before*
 * the browser paints. With useEffect there is a frame where the new page is
 * already painted at the old offset, which reads as a flash — or worse on a
 * shorter page, as a blank screen.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/oncosearch" element={<CaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
