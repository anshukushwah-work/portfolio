import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import DisplayTitle from '../components/DisplayTitle';
import { experience } from '../data/links';

import heroBg from '../assets/img/hero-bg-about.webp';
import heroPhoto from '../assets/img/hero-photo-about.webp';
import dividerLine from '../assets/icons/divider-line.svg';

/** Company | Duration | Location — the three column offsets from Figma. */
const columns = 'grid-cols-[473px_435px_240px]';

function RoleBadge({ children }) {
  return (
    /* Inset ring, not a border — Figma draws the 3px stroke inside, so a real
       border would make every row 6px taller than the design. */
    <span className="vice-gradient-faint inline-flex items-end justify-center rounded-[8px] px-[16px] py-[8px] font-mono text-[18px] font-medium leading-none tracking-[-0.36px] text-badge-text shadow-[inset_0_0_0_3px_#fec460]">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <main className="sky-gradient relative mx-auto w-[1280px] max-w-full overflow-hidden">
      {/* ------------------------------------------------------------------ *
       * Hero — 1210px tall, with the cut-out photo painted over everything.
       * ------------------------------------------------------------------ */}
      <section className="relative h-[1210px] w-full overflow-hidden max-lg:h-auto max-lg:pb-[48px]">
        <div className="absolute inset-x-[1px] top-0 h-[1210px] overflow-hidden max-lg:h-full">
          <img
            src={heroBg}
            alt=""
            className="absolute left-0 top-0 h-[140.83%] w-full max-w-none max-lg:h-full max-lg:object-cover"
          />
        </div>

        <NavBar />

        {/* "Hi i am / Anshu Kushwah" panel */}
        <div className="absolute left-[351px] top-[210px] h-[449px] w-[843px] figma-border bg-white/10 max-lg:static max-lg:mx-[16px] max-lg:mt-[24px] max-lg:h-auto max-lg:w-auto max-lg:p-[20px]">
          <DisplayTitle
            stroke={4}
            className="absolute left-[84px] top-[34px] whitespace-nowrap text-[90px] leading-[normal] max-lg:static max-lg:text-[44px]"
          >
            Hi i am
          </DisplayTitle>

          <DisplayTitle
            as="h1"
            stroke={4}
            className="absolute left-[134px] top-[134px] w-[647px] text-[120px] leading-[normal] max-lg:static max-lg:w-auto max-lg:text-[52px]"
          >
            Anshu Kushwah
          </DisplayTitle>

          <p className="absolute left-[194px] top-[282px] w-[614px] font-mono text-[32px] font-semibold leading-[normal] tracking-[-0.64px] text-white max-lg:static max-lg:mt-[16px] max-lg:w-auto max-lg:text-[18px]">
            UI/UX Designer with a background in engineering , Based in Indore ,
            Madhya Pradesh.
          </p>
        </div>

        {/* "worked on 10 + projects" panel */}
        <div className="absolute left-[351px] top-[775px] h-[234px] w-[843px] figma-border bg-white/10 max-lg:static max-lg:mx-[16px] max-lg:mt-[24px] max-lg:h-auto max-lg:w-auto max-lg:p-[20px]">
          <DisplayTitle
            stroke={3}
            className="absolute left-[151px] top-[41px] whitespace-nowrap text-[40px] leading-none tracking-[-0.8px] max-lg:static max-lg:text-[28px]"
          >
            worked on
          </DisplayTitle>
          <DisplayTitle
            stroke={4}
            className="absolute left-[151px] top-[95px] whitespace-nowrap text-[96px] leading-none tracking-[-1.92px] max-lg:static max-lg:mt-[8px] max-lg:text-[48px]"
          >
            10 + projects
          </DisplayTitle>
        </div>

        {/* The photo is narrower than its 475x1067 frame, so `object-cover`
            would centre the overflow and shave ~36px off the top of her head.
            Figma instead pins the image to the top of the frame at 106.7%
            height and lets it crop at the bottom — reproduced here. */}
        <div className="pointer-events-none absolute left-[69px] top-[143px] h-[1067px] w-[475px] overflow-hidden max-lg:relative max-lg:left-0 max-lg:top-0 max-lg:mx-auto max-lg:mt-[24px] max-lg:h-auto max-lg:w-[65%]">
          <img
            src={heroPhoto}
            alt="Anshu Kushwah"
            className="absolute left-0 top-[-0.02%] h-[106.7%] w-full max-w-none max-lg:static max-lg:h-auto"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ *
       * Experience
       * ------------------------------------------------------------------ */}
      <section className="relative min-h-[1417px] w-full figma-border bg-white max-lg:min-h-0 max-lg:px-[16px] max-lg:pb-[48px]">
        <DisplayTitle
          stroke={4}
          className="absolute left-[466px] top-[34px] whitespace-nowrap text-[90px] leading-[normal] max-lg:static max-lg:pt-[32px] max-lg:text-center max-lg:text-[48px]"
        >
          Experience
        </DisplayTitle>

        <div
          className={`absolute left-[65px] top-[200px] grid w-[1148px] ${columns} font-mono text-[24px] font-semibold tracking-[-0.48px] text-muted max-lg:static max-lg:hidden`}
        >
          <span>Company</span>
          <span>Duration</span>
          <span>Location</span>
        </div>

        <ol className="absolute left-[65px] top-[278px] flex w-[1148px] list-none flex-col gap-[60px] p-0 max-lg:static max-lg:mt-[32px] max-lg:w-auto max-lg:gap-[32px]">
          {experience.map((job, index) => (
            <li key={job.company} className="contents">
              <div
                className={`grid ${columns} items-start font-mono text-[32px] font-semibold tracking-[-0.64px] text-ink max-lg:flex max-lg:flex-col max-lg:gap-[8px] max-lg:text-[20px]`}
              >
                <div className="flex flex-col items-start gap-[16px]">
                  {/* 298px is the wrap width Figma uses for the two-line names. */}
                  <h3 className="w-[298px] font-mono text-[32px] font-semibold leading-[normal] tracking-[-0.64px] max-lg:w-auto max-lg:text-[20px]">
                    {job.company}
                  </h3>
                  <RoleBadge>{job.role}</RoleBadge>
                </div>

                <p className="whitespace-nowrap leading-[normal] max-lg:text-muted">
                  {job.duration}
                </p>
                <p className="w-[240px] leading-[normal] max-lg:w-auto max-lg:text-muted">
                  {job.location}
                </p>
              </div>

              {/* Figma's rules are zero-height vectors, so the line is taken
                  out of flow — otherwise each one pushes the rows below by 1px. */}
              {index < experience.length - 1 && (
                <div className="relative h-0 w-full max-lg:hidden">
                  <img
                    src={dividerLine}
                    alt=""
                    className="absolute left-0 top-0 w-[1146.192px] max-w-full"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </main>
  );
}
