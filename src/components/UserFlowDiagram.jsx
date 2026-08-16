import { userFlowNodes } from '../data/caseStudy';

import arrowDown from '../assets/icons/cs-arrow-down.svg';
import arrow10 from '../assets/icons/cs-arrow-10.svg';
import arrow11 from '../assets/icons/cs-arrow-11.svg';
import arrow12 from '../assets/icons/cs-arrow-12.svg';
import arrow5 from '../assets/icons/cs-arrow-5.svg';
import arrow6 from '../assets/icons/cs-arrow-6.svg';

/**
 * Figma draws every connector as a horizontal line rotated 90°, so each one is
 * an outer box of the final on-screen size wrapping a rotated inner box of the
 * line's own size. `flip` mirrors the one arrow that points back left.
 */
const connectors = [
  { src: arrowDown, left: 45.5, top: 48.99, w: 0, h: 31.017, lineW: 31.017, lineH: 0, inset: '-3.68px -1.61% -3.68px 0' },
  { src: arrowDown, left: 45.5, top: 129.99, w: 0, h: 31.017, lineW: 31.017, lineH: 0, inset: '-3.68px -1.61% -3.68px 0' },
  { src: arrowDown, left: 45.5, top: 210.99, w: 0, h: 31.017, lineW: 31.017, lineH: 0, inset: '-3.68px -1.61% -3.68px 0' },
  { src: arrowDown, left: 45.5, top: 291.99, w: 0, h: 31.017, lineW: 31.017, lineH: 0, inset: '-3.68px -1.61% -3.68px 0' },
  { src: arrow10, left: 494, top: 373, w: 0, h: 53.017, lineW: 53.017, lineH: 0, inset: '-3.68px -0.94% -3.68px 0' },
  { src: arrow11, left: 494, top: 411.51, w: 249, h: 15.508, lineW: 15.508, lineH: 249, inset: '-1.48% -3.22% 0 -3.22%' },
  { src: arrow12, left: 301, top: 411.51, w: 197, h: 15.508, lineW: 15.508, lineH: 197, inset: '-1.87% -3.22% 0 -3.22%', flip: true },
  { src: arrow5, left: 158, top: 268.51, w: 122, h: 55.508, lineW: 55.508, lineH: 122, inset: '-3.02% -0.9% 0 -0.9%' },
  { src: arrow6, left: 272, top: 268.51, w: 222, h: 55.508, lineW: 55.508, lineH: 222, inset: '-1.66% -0.9% 0 -0.9%' },
  { src: arrow6, left: 472, top: 268.51, w: 222, h: 55.508, lineW: 55.508, lineH: 222, inset: '-1.66% -0.9% 0 -0.9%' },
  { src: arrow6, left: 695, top: 268.51, w: 222, h: 55.508, lineW: 55.508, lineH: 222, inset: '-1.66% -0.9% 0 -0.9%' },
  { src: arrow6, left: 880, top: 268.51, w: 222, h: 55.508, lineW: 55.508, lineH: 222, inset: '-1.66% -0.9% 0 -0.9%' },
];

function Connector({ src, left, top, w, h, lineW, lineH, inset, flip }) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left, top, width: w, height: h }}
    >
      <div className={`flex-none rotate-90${flip ? ' -scale-y-100' : ''}`}>
        <div className="relative" style={{ width: lineW, height: lineH }}>
          <div className="absolute" style={{ inset }}>
            <img src={src} alt="" className="block size-full max-w-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserFlowDiagram() {
  return (
    /* 1142x652 in Figma. On small screens it scrolls sideways rather than
       reflowing — a site map only reads correctly at its drawn proportions. */
    <div className="w-full overflow-x-auto lg:overflow-visible">
      <div className="relative h-[652px] w-[1142px] shrink-0">
        {userFlowNodes.map((node) => (
          <div
            key={node.label}
            className="absolute flex items-center justify-end overflow-hidden bg-cs-tile px-[16px] py-[10px]"
            style={{ left: node.left, top: node.top }}
          >
            <span className="whitespace-nowrap font-inclusive text-[24px] font-medium text-cs-heading">
              {node.label}
            </span>
          </div>
        ))}

        {connectors.map((c, i) => (
          <Connector key={i} {...c} />
        ))}
      </div>
    </div>
  );
}
