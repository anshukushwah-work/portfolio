import { Link } from 'react-router-dom';
import externalLink from '../assets/icons/cs-external-link.svg';
import arrow from '../assets/icons/cs-arrow-38.svg';

/**
 * Not in the Figma file — the case study has no nav of its own, which would
 * otherwise leave no way back to the portfolio. Kept deliberately quiet and
 * pinned to the viewport so it never disturbs the pinned page geometry.
 */
export function BackLink() {
  return (
    <Link
      to="/"
      className="fixed left-[24px] top-[24px] z-50 flex items-center gap-[10px] rounded-[8px] border border-cs-border bg-cs-bg/80 px-[16px] py-[10px] backdrop-blur-sm transition-colors hover:bg-cs-tile max-md:left-[12px] max-md:top-[12px] max-md:px-[12px] max-md:py-[8px]"
    >
      <span className="block w-[20px] shrink-0 rotate-180">
        <img src={arrow} alt="" className="block w-full" />
      </span>
      <span className="font-mono text-[18px] leading-none tracking-[-0.36px] text-cs-button max-md:text-[15px]">
        Back to work
      </span>
    </Link>
  );
}

/** 64px block heading — PROLEM, SECONDARY RESEARCH, USER FLOW… */
export function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`font-inclusive text-[64px] font-medium whitespace-nowrap text-cs-heading max-lg:whitespace-normal max-md:text-[38px] ${className}`}
    >
      {children}
    </h2>
  );
}

/** 36px sub-heading used inside PRIMARY RESEARCH. */
export function SubHeading({ children, weight = 'medium', className = '' }) {
  return (
    <h3
      className={`font-inclusive text-[36px] whitespace-nowrap max-md:text-[26px] ${
        weight === 'medium'
          ? 'font-medium text-cs-heading'
          : 'font-normal tracking-[-0.72px] text-cs-bright'
      } ${className}`}
    >
      {children}
    </h3>
  );
}

/** Outlined pill with the hard white offset shadow — View Prototype / Designs. */
export function OutlineButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative block h-[67px] w-[329px] max-w-full overflow-hidden rounded-[8px] border border-cs-border shadow-[4px_4px_0px_0px_white] transition-transform duration-150 hover:-translate-y-[2px]"
    >
      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-end justify-center gap-[9px] whitespace-nowrap">
        <span className="font-mono text-[24px] leading-none tracking-[-0.48px] text-cs-button">
          {children}
        </span>
        <span className="block size-[24px] shrink-0 overflow-hidden">
          <img src={externalLink} alt="" className="block size-full" />
        </span>
      </span>
    </a>
  );
}

/** Body copy — Intel One Mono, the two sizes used across the page. */
export function Body({ size = 18, className = '', style, children }) {
  // Size is applied inline, not as a Tailwind class — an interpolated class
  // name would never survive Tailwind's static extraction.
  //
  // Figma lays Intel One Mono out at ~1.389 (18px -> 25, 24px -> 33) while the
  // browser's `normal` resolves to 1.4, which made multi-line copy a few px
  // taller per line. Pinning the value keeps blocks at their Figma heights.
  return (
    <p
      className={`font-mono text-cs-body ${className}`}
      style={{
        fontSize: size,
        lineHeight: `${Math.round(size * 1.3889)}px`,
        letterSpacing: size === 24 ? '-0.48px' : '-0.36px',
        ...style,
      }}
    >
      {children}
    </p>
  );
}
