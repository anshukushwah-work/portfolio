import { Link } from 'react-router-dom';
import arrowLine from '../assets/icons/arrow-line.svg';
import openInNewTab from '../assets/icons/open-in-new-tab.svg';
import btnTexture from '../assets/img/btn-texture.webp';

/**
 * Solid sunset-gradient button with the palm texture washed over it at 30%.
 * Case studies that live on this site route client-side; anything else (or a
 * bare '#' placeholder) falls back to a plain anchor.
 */
export function CaseStudyLink({ href }) {
  const internal = href?.startsWith('/');
  const Tag = internal ? Link : 'a';
  const linkProps = internal ? { to: href } : { href };

  return (
    <Tag
      {...linkProps}
      className="vice-gradient relative h-[67px] min-w-0 flex-1 overflow-hidden transition-transform duration-150 hover:-translate-y-[2px]"
    >
      <span className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <img
          src={btnTexture}
          alt=""
          className="absolute left-0 top-[-240.13%] h-[2286.23%] w-[124.01%] max-w-none"
        />
      </span>

      <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-end justify-center gap-[9px] whitespace-nowrap">
        <span className="font-mono text-[24px] font-semibold leading-none tracking-[-0.48px] text-white">
          Case Study
        </span>
        {/* Figma rotates the shared arrow glyph 90° to point right. */}
        <span className="flex size-[24px] shrink-0 items-center justify-center">
          <span className="block size-[24px] rotate-90">
            <img src={arrowLine} alt="" className="block size-full" />
          </span>
        </span>
      </span>
    </Tag>
  );
}

/**
 * Borderless link whose label is filled with the same sunset ramp.
 *
 * The label centres itself with flexbox rather than absolute positioning, so
 * the anchor still has a width when it isn't being stretched by a flex parent
 * — the "UI ONLY" cards size it to its content, the project rows stretch it.
 * Callers supply the height and any flex behaviour.
 */
export function FigmaLink({ href, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`relative flex items-center justify-center overflow-hidden transition-transform duration-150 hover:-translate-y-[2px] ${className}`}
    >
      <span className="flex items-end justify-center gap-[9px] whitespace-nowrap">
        <span className="vice-gradient-text font-mono text-[24px] font-semibold leading-none tracking-[-0.48px]">
          Figma
        </span>
        <span className="block size-[24px] shrink-0">
          <img src={openInNewTab} alt="" className="block size-full" />
        </span>
      </span>
    </a>
  );
}
