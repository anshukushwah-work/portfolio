import UserFlowDiagram from '../components/UserFlowDiagram';
import {
  SectionHeading,
  SubHeading,
  OutlineButton,
  BackLink,
  Body,
} from '../components/caseStudyParts';
import {
  meta,
  intro,
  problem,
  secondaryResearch,
  objectives,
  userGroup,
  researchInsights,
  persona,
  howMightWe,
  similarPlatforms,
  prototypeHref,
  designsHref,
} from '../data/caseStudy';

import cover from '../assets/img/casestudy-cover.webp';
import problemArt from '../assets/img/cs-problem.webp';
import personaArt from '../assets/img/cs-persona.webp';
import wireframes from '../assets/img/cs-wireframes.webp';
import design1 from '../assets/img/cs-design-1.webp';
import design2 from '../assets/img/cs-design-2.webp';
import design3 from '../assets/img/cs-design-3.webp';
import design4 from '../assets/img/cs-design-4.webp';
import arrow38 from '../assets/icons/cs-arrow-38.svg';

const statImages = import.meta.glob('../assets/img/cs-research-*.webp', {
  eager: true,
  import: 'default',
});

const designShots = [
  { src: design1, left: -54, top: 0 },
  { src: design2, left: 513, top: 0 },
  { src: design3, left: 662, top: 409 },
  { src: design4, left: 95, top: 409 },
];

/** `--t`/`--l` are the Figma coordinates inside the 1198x9590 content frame. */
const at = (top, left = 28, width) => ({
  '--t': `${top}px`,
  '--l': `${left}px`,
  ...(width ? { '--w': `${width}px` } : null),
});

export default function CaseStudy() {
  return (
    <>
      <BackLink />

      <main className="relative mx-auto w-[1280px] max-w-full overflow-hidden bg-cs-bg">
        <div className="cs-flow">
          {/* ------------------------------------------------------------ *
           * Cover + project meta
           * ------------------------------------------------------------ */}
          <section style={at(28)} className="flex flex-col gap-[64px]">
            {/* The isometric composition is a flattened export — Figma builds it
                from 3D-transformed containers that don't survive as CSS. */}
            <img
              src={cover}
              alt="OncoSearch screens arranged isometrically"
              className="block h-[542px] w-full bg-cs-panel object-cover max-lg:h-auto"
            />

            <div className="flex items-center justify-between gap-[24px] max-lg:flex-wrap">
              {meta.map((item) => (
                <div key={item.label} className="flex shrink-0 flex-col gap-[4px]">
                  <p className="font-inclusive text-[28px] font-medium text-cs-heading max-md:text-[20px]">
                    {item.label}
                  </p>
                  <Body size={24} className="max-md:!text-[18px]">
                    {item.value}
                  </Body>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------------------------------------------ *
           * Title + prototype link
           * ------------------------------------------------------------ */}
          <section style={at(866)} className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-inclusive text-[114px] font-medium text-cs-heading max-md:text-[56px]">
                {intro.title}
              </h1>
              <Body size={24} className="max-md:!text-[18px]">
                {intro.blurb}
              </Body>
            </div>
            <OutlineButton href={prototypeHref}>View Prototype</OutlineButton>
          </section>

          {/* ------------------------------------------------------------ *
           * Problem
           * ------------------------------------------------------------ */}
          <section
            style={at(1398, 29)}
            className="flex items-start gap-[24px] max-lg:flex-col max-lg:items-stretch"
          >
            <div className="flex min-w-0 flex-1 flex-col gap-[12px] max-lg:w-full">
              <SectionHeading>{problem.heading}</SectionHeading>
              <Body size={24} className="w-[448px] max-w-full max-md:!text-[18px]">
                {problem.body}
              </Body>
            </div>

            <div className="relative h-[386px] w-[628px] shrink-0 max-lg:h-auto max-lg:w-full">
              <div className="absolute right-[-84px] top-[-28px] h-[441px] w-[796px] overflow-hidden max-lg:static max-lg:h-auto max-lg:w-full">
                <img
                  src={problemArt}
                  alt="Illustration of an oncologist reviewing research papers"
                  className="absolute left-0 top-[-12.99%] h-[129.16%] w-full max-w-none max-lg:static max-lg:h-auto"
                />
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------ *
           * Secondary research
           * ------------------------------------------------------------ */}
          <section style={at(1984, 29)} className="flex flex-col gap-[32px]">
            <SectionHeading>SECONDARY RESEARCH</SectionHeading>

            <div className="flex items-start gap-[32px] max-lg:flex-col">
              {secondaryResearch.stats.map((stat) => (
                <div
                  key={stat.caption}
                  className="flex shrink-0 flex-col gap-[12px] lg:w-[var(--card-w)] max-lg:w-full"
                  style={{ '--card-w': `${stat.width}px` }}
                >
                  <div
                    className={`relative h-[279px] w-full overflow-hidden ${stat.well}`}
                  >
                    <img
                      src={statImages[`../assets/img/${stat.image}`]}
                      alt=""
                      className={
                        stat.shot.align === 'left'
                          ? 'absolute left-0 top-1/2 max-w-none -translate-y-1/2'
                          : 'absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
                      }
                      style={{ width: stat.shot.width, height: stat.shot.height }}
                    />
                  </div>
                  <Body>{stat.caption}</Body>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-[32px] max-lg:flex-col">
              {secondaryResearch.articles.map((article) => (
                <div key={article.title} className="flex min-w-0 flex-1 flex-col gap-[12px] max-lg:w-full">
                  <div className="flex items-start overflow-hidden bg-cs-panel p-[10px]">
                    <span className="whitespace-nowrap font-inclusive text-[48px] font-medium text-cs-heading max-md:text-[32px]">
                      {article.title}
                    </span>
                  </div>
                  <Body>
                    {article.before}
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noreferrer"
                      className="cs-link"
                    >
                      {article.linkText}
                    </a>
                    {article.after}
                  </Body>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------------------------------------------ *
           * Primary research
           * ------------------------------------------------------------ */}
          <section style={at(2981)} className="flex flex-col gap-[32px]">
            <SectionHeading>PRIMARY RESEARCH</SectionHeading>

            <div className="flex flex-col gap-[100px] max-lg:gap-[64px]">
              {/* Objective */}
              <div className="flex flex-col gap-[32px] lg:ml-[10px]">
                <SubHeading>Objective</SubHeading>
                <div className="flex items-start gap-[32px] max-lg:flex-col">
                  {objectives.map((o) => (
                    <div
                      key={o.n}
                      className="relative h-[127px] min-w-0 flex-1 bg-cs-tile max-lg:h-auto max-lg:w-full max-lg:p-[16px]"
                    >
                      <div className="absolute left-[7px] top-0 flex h-[43px] w-[26px] flex-col items-center justify-center bg-cs-bright max-lg:hidden">
                        <span className="font-mono text-[24px] leading-[normal] tracking-[-0.48px] text-cs-bg">
                          {o.n}
                        </span>
                      </div>
                      <p className="absolute left-[49px] top-[5px] w-[496px] font-mono text-[24px] leading-[normal] tracking-[-0.48px] text-cs-bright max-lg:static max-lg:w-auto max-md:text-[18px]">
                        {o.title}
                      </p>
                      <Body
                        className="absolute left-[49px] w-[481px] max-lg:!static max-lg:mt-[8px] max-lg:!w-auto"
                        style={{ top: o.bodyTop }}
                      >
                        {o.body}
                      </Body>
                    </div>
                  ))}
                </div>
              </div>

              {/* User group */}
              <div className="flex flex-col gap-[32px] lg:ml-[10px]">
                <SubHeading>User Group</SubHeading>
                <div className="relative h-[127px] w-full bg-cs-tile max-lg:h-auto max-lg:p-[16px]">
                  <p className="absolute left-[49px] top-[27px] w-[496px] font-mono text-[24px] leading-[normal] tracking-[-0.48px] text-cs-bright max-lg:static max-lg:w-auto max-md:text-[18px]">
                    {userGroup.title}
                  </p>
                  <Body className="absolute left-[49px] top-[74px] whitespace-nowrap max-lg:!static max-lg:mt-[8px] max-lg:whitespace-normal">
                    {userGroup.body}
                  </Body>
                </div>
              </div>

              {/* Research insight */}
              <div className="flex flex-col gap-[32px] lg:ml-[10px]">
                <SubHeading>Research Insight</SubHeading>

                <div className="flex items-start gap-[32px] max-lg:flex-col">
                  <div className="relative h-[198px] min-w-0 flex-1 bg-cs-tile max-lg:h-auto max-lg:w-full max-lg:p-[16px]">
                    <Body
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:!static max-lg:!translate-x-0 max-lg:!translate-y-0"
                      style={{ width: researchInsights.rowOne.bodyWidth, maxWidth: '100%' }}
                    >
                      {researchInsights.rowOne.body}
                    </Body>
                  </div>

                  {researchInsights.rowOne.tiles.map((tile) => (
                    <div
                      key={tile.lines.join(' ')}
                      className={`relative flex h-[198px] w-[162px] shrink-0 items-center justify-center max-lg:h-[120px] max-lg:w-full ${tile.bg}`}
                    >
                      <p className="text-center font-mono text-[22px] leading-[normal] tracking-[-0.44px] whitespace-nowrap text-cs-bg">
                        {tile.lines[0]}
                        <br />
                        {tile.lines[1]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-[32px] max-lg:flex-col">
                  {researchInsights.rowTwo.map((card) => (
                    <div
                      key={card.width}
                      className="relative h-[198px] min-w-0 flex-1 bg-cs-tile max-lg:h-auto max-lg:w-full max-lg:p-[16px]"
                    >
                      <Body
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:!static max-lg:!translate-x-0 max-lg:!translate-y-0"
                        style={{ width: card.width, maxWidth: '100%' }}
                      >
                        {card.body}
                      </Body>
                    </div>
                  ))}
                </div>
              </div>

              {/* User persona */}
              <div className="flex flex-col gap-[32px] lg:ml-[10px]">
                <SubHeading weight="regular">User Persona</SubHeading>

                {/* 704px, not the 492 the panels occupy — the cut-out photo
                    overflows below them and Figma's frame grows to fit it. */}
                <div className="relative h-[704px] w-full max-lg:h-auto">
                  <div className="absolute left-[159px] top-[71px] h-[223px] w-[973px] bg-cs-panel max-lg:static max-lg:h-auto max-lg:w-full max-lg:p-[16px]">
                    <p className="absolute left-[87px] top-[18px] whitespace-nowrap font-mono text-[24px] font-semibold leading-[normal] tracking-[-0.48px] text-white max-lg:static">
                      {persona.name}
                    </p>
                    <div className="max-lg:mt-[12px] max-lg:flex max-lg:flex-wrap max-lg:gap-[8px]">
                      {persona.tags.map((tag) => (
                        <div
                          key={tag.text}
                          className="absolute top-[62px] flex items-center justify-center rounded-full bg-cs-tile px-[16px] py-[8px] max-lg:static"
                          style={{ left: tag.left }}
                        >
                          <span className="whitespace-nowrap font-mono text-[18px] leading-[normal] tracking-[-0.36px] text-white">
                            {tag.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="absolute left-[85px] top-[129px] h-[74px] w-[878px] font-mono text-[18px] leading-[1.5] tracking-[-0.36px] text-white max-lg:static max-lg:mt-[12px] max-lg:h-auto max-lg:w-auto">
                      {persona.summary}
                    </p>
                  </div>

                  {persona.panels.map((panel) => (
                    <div
                      key={panel.label}
                      className="absolute h-[109px] w-[973px] bg-cs-panel max-lg:static max-lg:mt-[16px] max-lg:h-auto max-lg:w-full max-lg:p-[16px]"
                      style={{ left: panel.left, top: panel.top }}
                    >
                      <div className="absolute right-0 top-0 flex items-center justify-center bg-cs-bright p-[10px] max-lg:static max-lg:mb-[8px] max-lg:inline-flex">
                        <span className="whitespace-nowrap font-mono text-[24px] font-semibold leading-[normal] tracking-[-0.48px] text-cs-bg">
                          {panel.label}
                        </span>
                      </div>
                      <ul
                        className="absolute top-[calc(50%-46.5px)] list-disc font-mono text-[18px] tracking-[-0.36px] whitespace-nowrap text-white max-lg:static max-lg:whitespace-normal max-lg:pl-[20px]"
                        style={{ left: panel.listLeft }}
                      >
                        {panel.items.map((item) => (
                          <li key={item} className="ms-[27px] leading-[1.7] max-lg:ms-0">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Cut-out photo bleeds above the panels on the left. */}
                  <div className="absolute left-0 top-[-22px] h-[728px] w-[482px] overflow-hidden max-lg:hidden">
                    <img
                      src={personaArt}
                      alt="Dr. Ravi Kumar"
                      className="absolute left-[-45.39%] top-0 h-full w-[226.27%] max-w-none"
                    />
                  </div>
                </div>
              </div>

              {/* How might we */}
              <div className="flex flex-col gap-[32px] lg:ml-[10px]">
                <p className="font-inclusive text-[51px] tracking-[-1.02px] whitespace-nowrap text-cs-bright max-lg:whitespace-normal max-md:text-[28px]">
                  {howMightWe.heading}
                </p>
                <div className="flex items-start gap-[32px] max-lg:flex-col">
                  {howMightWe.cards.map((card) => (
                    <div
                      key={card.width}
                      className="relative h-[198px] min-w-0 flex-1 bg-cs-tile max-lg:h-auto max-lg:w-full max-lg:p-[16px]"
                    >
                      <Body
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:!static max-lg:!translate-x-0 max-lg:!translate-y-0"
                        style={{ width: card.width, maxWidth: '100%' }}
                      >
                        {card.body}
                      </Body>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------ *
           * Similar existing platforms
           * ------------------------------------------------------------ */}
          <section style={at(5667)} className="flex flex-col gap-[32px]">
            <SectionHeading>SIMILAR EXISTING PLATFORMS</SectionHeading>
            <div className="grid grid-cols-2 gap-[32px] max-lg:grid-cols-1">
              {similarPlatforms.map((platform) => (
                <div key={platform.name} className="flex min-w-0 flex-col gap-[12px]">
                  <div className="flex items-start overflow-hidden bg-cs-tile p-[10px]">
                    <span className="whitespace-nowrap font-inclusive text-[40px] font-medium text-cs-heading max-md:text-[26px]">
                      {platform.name}
                    </span>
                  </div>
                  <Body>{platform.body}</Body>
                </div>
              ))}
            </div>
          </section>

          {/* ------------------------------------------------------------ *
           * User flow
           * ------------------------------------------------------------ */}
          <section style={at(6268)} className="flex flex-col gap-[32px]">
            <SectionHeading>USER FLOW</SectionHeading>
            <UserFlowDiagram />
          </section>

          {/* The last two connectors live on the page frame in Figma, not inside
              the flow-chart, so they are positioned here. */}
          <div
            style={{ ...at(6853, 770), '--w': '0px' }}
            className="cs-pinned-only flex h-[38.017px] items-center justify-center"
          >
            <div className="flex-none rotate-90">
              <div className="relative h-0 w-[38.017px]">
                <div className="absolute inset-[-3.68px_-1.32%_-3.68px_0]">
                  <img src={arrow38} alt="" className="block size-full max-w-none" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ ...at(6941, 770), '--w': '0px' }}
            className="cs-pinned-only flex h-[38.017px] items-center justify-center"
          >
            <div className="flex-none rotate-90">
              <div className="relative h-0 w-[38.017px]">
                <div className="absolute inset-[-3.68px_-1.32%_-3.68px_0]">
                  <img src={arrow38} alt="" className="block size-full max-w-none" />
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ *
           * Wireframes
           * ------------------------------------------------------------ */}
          <section style={at(7229)} className="flex flex-col gap-[32px]">
            <SectionHeading>WIREFRAMES</SectionHeading>
            <div className="relative h-[652px] w-full max-lg:flex max-lg:h-auto max-lg:flex-col max-lg:gap-[24px]">
              <img
                src={wireframes}
                alt="Low-fidelity wireframes"
                className="absolute left-[-294px] top-[-16px] h-[668px] w-[841px] max-w-none object-cover max-lg:static max-lg:h-auto max-lg:w-full"
              />
              <img
                src={wireframes}
                alt=""
                className="absolute left-[523px] top-[-96px] h-[662px] w-[834px] max-w-none object-cover shadow-[-4px_4px_24px_0px_rgba(0,0,0,0.25)] max-lg:hidden"
              />
            </div>
          </section>

          {/* ------------------------------------------------------------ *
           * Designs
           * ------------------------------------------------------------ */}
          <section style={at(8190)} className="flex flex-col gap-[32px]">
            <SectionHeading>DESIGNS</SectionHeading>

            <div className="relative h-[798px] w-full max-lg:flex max-lg:h-auto max-lg:flex-col max-lg:gap-[24px]">
              {designShots.map((shot, i) => (
                <img
                  key={i}
                  src={shot.src}
                  alt={`OncoSearch screen ${i + 1}`}
                  className="absolute h-[389px] w-[547px] max-w-none object-cover shadow-[4px_4px_14px_0px_rgba(121,121,121,0.25)] max-lg:static max-lg:h-auto max-lg:w-full"
                  style={{ left: shot.left, top: shot.top }}
                />
              ))}
            </div>

            <OutlineButton href={designsHref}>View Designs</OutlineButton>
          </section>

          {/* ------------------------------------------------------------ *
           * Outro
           * ------------------------------------------------------------ */}
          <p
            style={at(9287, 244, 710)}
            className="font-inclusive text-[128px] font-medium whitespace-nowrap text-cs-heading max-lg:text-center max-md:text-[56px]"
          >
            THANK YOU
          </p>
          {/* Figma sets this one line solid (24px text in a 24px box). */}
          <Body
            size={24}
            style={{ ...at(9470, 413, 372), lineHeight: '24px' }}
            className="whitespace-nowrap max-lg:text-center"
          >
            Will Explain More if want.
          </Body>
        </div>
      </main>
    </>
  );
}
