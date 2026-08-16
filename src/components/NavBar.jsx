import { Link, useLocation } from 'react-router-dom';
import openInNewTab from '../assets/icons/open-in-new-tab.svg';
import { resumeHref } from '../data/links';

/**
 * Three equal-width tiles. The tile for the current page is white with a black
 * border and a hard 8px offset shadow; the other two are flat grey.
 */
function tileClass(active) {
  return [
    'flex flex-1 min-w-0 items-center justify-center gap-[32px] overflow-hidden p-[16px]',
    'max-md:w-full max-md:flex-none',
    'font-mono font-semibold text-[24px] tracking-[-0.48px] text-ink whitespace-nowrap',
    'transition-transform duration-150 hover:-translate-y-[2px]',
    // Inset rings rather than borders, so the 16px padding stays exact.
    active
      ? 'bg-white shadow-[inset_0_0_0_1px_#191919,8px_8px_0_0_#222]'
      : 'bg-nav-idle shadow-[inset_0_0_0_1px_#9d9d9d] hover:bg-white',
  ].join(' ');
}

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="absolute left-0 top-[52px] z-30 flex w-[1279px] max-w-full items-center gap-[56px] px-[64px] max-md:static max-md:top-0 max-md:w-full max-md:flex-wrap max-md:gap-[16px] max-md:px-[16px] max-md:pt-[24px]">
      <Link to="/" className={tileClass(pathname === '/')}>
        WORK
      </Link>

      <Link to="/about" className={tileClass(pathname === '/about')}>
        ABOUT
      </Link>

      <a
        href={resumeHref}
        target="_blank"
        rel="noreferrer"
        className={tileClass(false)}
      >
        RESUME
        <span className="block size-[24px] shrink-0">
          <img src={openInNewTab} alt="" className="block size-full" />
        </span>
      </a>
    </nav>
  );
}
