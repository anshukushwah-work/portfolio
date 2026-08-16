import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import DisplayTitle from '../components/DisplayTitle';
import FeaturedProject from '../components/FeaturedProject';
import UiOnlyCard from '../components/UiOnlyCard';
import { OncoSearchMockup, YardMockup } from '../components/mockups';
import { featuredProjects, uiOnlyProjects } from '../data/links';

import heroBg from '../assets/img/hero-bg-work.webp';
import heroPhoto from '../assets/img/hero-photo-work.webp';
import cloudsStrip from '../assets/img/clouds-strip.webp';
import palmsRight from '../assets/img/palms-right.webp';

/**
 * Figma stacks the five "UI ONLY" cards in two columns, with the right column
 * pushed 161px down so the cards interleave. Positions are absolute on desktop
 * and collapse to a single flow column below lg.
 */
const uiOnlyPositions = {
  'hotel-booking': { left: 104, top: 1275 },
  'real-estate': { left: 616, top: 1436 },
  'fitness-landing': { left: 104, top: 1937 },
  'team-management': { left: 616, top: 2098 },
  'healthcare-landing': { left: 104, top: 2599 },
};

export default function Work() {
  const [oncosearch, yard] = featuredProjects;

  return (
    <main className="mx-auto w-[1285px] max-w-full overflow-hidden">
      {/* ---------------------------------------------------------------- *
       * Hero
       * ---------------------------------------------------------------- */}
      <section className="relative h-[923px] w-full overflow-hidden bg-white max-lg:h-auto max-lg:pb-[48px]">
        <img
          src={heroBg}
          alt=""
          className="absolute left-1/2 top-0 h-[923px] w-[1641px] max-w-none -translate-x-1/2 object-cover max-lg:h-full max-lg:w-full"
        />

        <NavBar />

        <img
          src={heroPhoto}
          alt="Anshu Kushwah"
          className="absolute left-0 top-[142px] h-[781px] w-[589px] max-w-none object-cover max-lg:relative max-lg:top-0 max-lg:mx-auto max-lg:mt-[24px] max-lg:h-auto max-lg:w-[70%]"
        />

        <DisplayTitle
          as="h1"
          stroke={4}
          className="absolute left-[calc(50%-77.5px)] top-[239px] whitespace-nowrap text-[120px] leading-[normal] max-lg:static max-lg:mt-[24px] max-lg:whitespace-normal max-lg:px-[16px] max-lg:text-center max-lg:text-[56px]"
        >
          Anshu Kushwah
        </DisplayTitle>

        <p className="absolute left-[563px] top-[403px] w-[677px] font-mono text-[24px] font-semibold leading-[normal] tracking-[-0.96px] text-ink max-lg:static max-lg:mt-[16px] max-lg:w-auto max-lg:px-[16px] max-lg:text-center max-lg:text-[18px]">
          Indore based problem solver and design enthusiast focused on finding
          creative solutions for complex problems.
        </p>

        <div className="absolute left-[571px] top-[553px] flex h-[88px] w-[608px] items-center overflow-hidden figma-border-shadow bg-white max-lg:static max-lg:mx-auto max-lg:mt-[32px] max-lg:h-auto max-lg:w-[calc(100%-32px)] max-lg:justify-center max-lg:py-[16px]">
          <p className="whitespace-nowrap pl-[27px] font-mono text-[32px] font-semibold leading-[normal] tracking-[-0.64px] text-ink max-lg:pl-0 max-md:text-[20px]">
            {/* Figma tightens the roman numeral so it reads as "2". */}
            <span className="tracking-[-4.64px]">II</span>
            <span> years of working experience</span>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Projects
       * ---------------------------------------------------------------- */}
      <section className="sky-gradient relative h-[3208px] w-full overflow-hidden max-lg:h-auto max-lg:px-[16px] max-lg:pb-[64px]">
        <img
          src={cloudsStrip}
          alt=""
          className="pointer-events-none absolute left-[-44px] top-[-9px] h-[321px] w-[964px] max-w-none object-cover max-lg:hidden"
        />
        <img
          src={palmsRight}
          alt=""
          className="pointer-events-none absolute left-[878px] top-[91px] h-[1530px] w-[408px] max-w-none object-cover max-lg:hidden"
        />

        <DisplayTitle
          stroke={4}
          className="absolute left-[321px] top-[50px] whitespace-nowrap text-[120px] leading-[normal] max-lg:static max-lg:pt-[48px] max-lg:text-center max-lg:text-[56px]"
        >
          Top II projects
        </DisplayTitle>

        <div className="absolute left-[104px] top-[183px] flex w-[1104px] flex-col gap-[50px] max-lg:static max-lg:mt-[32px] max-lg:w-full">
          <FeaturedProject
            project={oncosearch}
            textWidth={487}
            media={<OncoSearchMockup />}
          />
          <FeaturedProject
            project={yard}
            textWidth={506}
            gap="gap-[25px]"
            media={<YardMockup />}
          />
        </div>

        <DisplayTitle
          stroke={4}
          className="absolute left-[508px] top-[1117px] whitespace-nowrap text-[120px] leading-[normal] max-lg:static max-lg:pt-[48px] max-lg:text-center max-lg:text-[56px]"
        >
          UI ONLY
        </DisplayTitle>

        <div className="ui-grid">
          {uiOnlyProjects.map((project) => (
            <UiOnlyCard
              key={project.id}
              project={project}
              style={{
                '--l': `${uiOnlyPositions[project.id].left}px`,
                '--t': `${uiOnlyPositions[project.id].top}px`,
              }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
