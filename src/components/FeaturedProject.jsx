import ScriptTitle from './ScriptTitle';
import { CaseStudyLink, FigmaLink } from './ProjectLinks';

/**
 * One of the two write-ups under "Top II projects": a 1104×420 white card with
 * the copy on the left and a device mockup (passed in as `media`) on the right.
 */
export default function FeaturedProject({ project, textWidth, media, gap }) {
  return (
    <article
      className={`gradient-border flex w-full items-center overflow-hidden px-[32px] py-[16px] max-lg:flex-col max-lg:gap-[32px] max-lg:px-[20px] max-lg:py-[24px] ${
        gap ?? 'justify-between'
      }`}
    >
      {/* The Figma column width is carried as a custom property rather than an
          inline width, so the mobile rule below can still override it. */}
      <div
        className="flex w-full shrink-0 flex-col items-center gap-[32px] lg:w-[var(--col-w)]"
        style={{ '--col-w': `${textWidth}px` }}
      >
        <ScriptTitle className="h-[57px] w-[448px] max-w-full text-center text-[45px] leading-[normal] max-md:h-auto max-md:text-[34px]">
          {project.title}
        </ScriptTitle>

        <p className="w-full text-center font-mono text-[20px] tracking-[-1px] text-ink-deep max-md:text-[16px]">
          {project.blurb}
        </p>

        <div className="flex w-full items-start gap-[32px]">
          <CaseStudyLink href={project.caseStudyHref} />
          <FigmaLink href={project.figmaHref} className="h-[67px] min-w-0 flex-1" />
        </div>
      </div>

      <div className="mockup-shell">{media}</div>
    </article>
  );
}
