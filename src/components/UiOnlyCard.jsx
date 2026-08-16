import ScriptTitle from './ScriptTitle';
import { FigmaLink } from './ProjectLinks';

const images = import.meta.glob('../assets/img/*.webp', {
  eager: true,
  import: 'default',
});

function resolveImage(name) {
  return name ? images[`../assets/img/${name}`] : null;
}

/**
 * A 592×562 card from the "UI ONLY" grid: a script title, a 560×388 black well
 * holding the project shot, and a Figma link. The fitness card layers a second
 * mobile shot over the bottom-left corner.
 */
export default function UiOnlyCard({ project, className = '', style }) {
  const src = resolveImage(project.image);
  const overlaySrc = resolveImage(project.overlay?.image);
  const shot = project.shot ?? { width: 526, height: 299 };

  return (
    <article
      className={`gradient-border flex w-[592px] max-w-full flex-col items-center gap-[25px] p-[16px] ${className}`}
      style={style}
    >
      {/* 57px is fixed so the card stays 562 tall whichever script face loads. */}
      <ScriptTitle className="h-[57px] w-[487px] max-w-full text-center text-[45px] leading-[normal] max-md:h-auto max-md:text-[34px]">
        {project.title}
      </ScriptTitle>

      <div className="relative h-[388px] w-[560px] max-w-full overflow-hidden bg-ink-deep max-md:h-[240px]">
        {src && (
          /* Figma centres the shot at a fixed size. Carried as custom properties
             so the mobile rule can shrink it to fit rather than crop it. */
          <img
            src={src}
            alt={`${project.title} interface`}
            className="absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 object-contain lg:h-[var(--shot-h)] lg:w-[var(--shot-w)] lg:max-w-none lg:object-cover"
            style={{
              '--shot-w': `${shot.width}px`,
              '--shot-h': `${shot.height}px`,
              ...(shot.offsetY
                ? { marginTop: `${shot.offsetY}px` }
                : null),
            }}
          />
        )}

        {overlaySrc && (
          /* Same custom-property trick — a fixed px size here would refuse to
             shrink on a phone. */
          <img
            src={overlaySrc}
            alt=""
            className="absolute bottom-[4%] left-[3%] z-10 h-auto w-[21%] lg:bottom-[var(--ov-b)] lg:left-[var(--ov-l)] lg:h-[var(--ov-h)] lg:w-[var(--ov-w)]"
            style={{
              '--ov-l': `${project.overlay.left}px`,
              '--ov-b': `${project.overlay.bottom}px`,
              '--ov-w': `${project.overlay.width}px`,
              '--ov-h': `${project.overlay.height}px`,
            }}
          />
        )}
      </div>

      <div className="flex h-[35px] w-[487px] max-w-full items-center justify-center overflow-hidden">
        <FigmaLink href={project.figmaHref} className="h-[35px]" />
      </div>
    </article>
  );
}
