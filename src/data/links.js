/**
 * Every outbound URL on the site lives here.
 * Replace the '#' placeholders with the real links — nothing else needs editing.
 */

export const contact = {
  phone: '+91 9111259158',
  phoneHref: 'tel:+919111259158',
  email: 'anshukushwah.be@gmail.com',
  emailHref: 'mailto:anshukushwah.be@gmail.com',
  linkedinLabel: 'www.linkedin.com/in/anshu-kushwah',
  linkedinHref: 'https://www.linkedin.com/in/anshu-kushwah',
};

/** Opens in a new tab from the nav bar. */
export const resumeHref = 'https://drive.google.com/file/d/1euz_s-vDx6nkobK6EjyveNFyMurR8h1_/view?usp=sharing';

/** The two write-ups under "Top II projects". */
export const featuredProjects = [
  {
    id: 'oncosearch',
    title: 'OncoSearch',
    blurb:
      'A context-aware platform that suggests treatments to oncologists by backing them with relevant, up-to-date clinical trials and research papers.',
    // Internal route — the only case study written up so far.
    caseStudyHref: '/work/oncosearch',
    figmaHref: 'https://www.figma.com/design/i2dwgXAVOmFNrKLZXoQxBh/Oncosearch?node-id=0-1&t=tkKgkEnXCtbIL2DT-1',
  },
  {
    id: 'yard-management-system',
    title: 'Yard Management System',
    blurb:
      'Designed for CRIS, under the Ministry of Railways. The goal is to make yard operations more organized and easy to manage by helping staff track tasks smoothly.',
    caseStudyHref: '#',
    figmaHref: '#',
  },
];

/**
 * The "UI ONLY" grid. `image` is the main shot centred in the black well;
 * `overlay` is an optional second shot pinned to the bottom-left (only the
 * fitness card uses one). Drop files in src/assets/img/ and name them here.
 */
export const uiOnlyProjects = [
  {
    id: 'hotel-booking',
    title: 'Hotel Booking',
    image: 'hotel-booking.webp',
    shot: { width: 526, height: 299 },
    figmaHref: 'https://www.figma.com/design/PhjVheJ4j5PvhNNYPHQK6x/Stay-at-Hills?t=tkKgkEnXCtbIL2DT-1',
  },
  {
    id: 'real-estate',
    title: 'Real State',
    image: 'real-estate.webp',
    shot: { width: 516, height: 293, offsetY: -0.5 },
    figmaHref: 'https://www.figma.com/design/Zr2pnBVCBqTdVQelpUuLCY/Real-State?t=tkKgkEnXCtbIL2DT-1',
  },
  {
    id: 'fitness-landing',
    title: 'Fitness App Landing Page',
    image: 'fitness-landing.webp',
    shot: { width: 526, height: 299 },
    overlay: { image: 'fitness-mobile.webp', width: 118, height: 237, left: 17, bottom: 17 },
    figmaHref: 'https://www.figma.com/design/LmU4yrtn5Y9o5dLCMjkHbx/Trimify-Landing-Page?t=tkKgkEnXCtbIL2DT-1',
  },
  {
    id: 'team-management',
    title: 'Team Management',
    image: 'team-management.webp',
    shot: { width: 526, height: 299, offsetY: -0.5 },
    figmaHref: 'https://www.figma.com/design/FYsYN8xq2C3i3G3r9m2N1Y/SwannAve?node-id=0-1&t=tkKgkEnXCtbIL2DT-1',
  },
  {
    id: 'healthcare-landing',
    title: 'HealthCare Landing Page',
    image: 'healthcare-landing.webp',
    shot: { width: 526, height: 299 },
    figmaHref: 'https://www.figma.com/design/t5xvXkt9z7VjN3EOChLJxo/Healthcare-Landing-Page?t=tkKgkEnXCtbIL2DT-1',
  },
];

/** Reverse-chronological, exactly as listed on the About page. */
export const experience = [
  {
    company: 'Developer Bazar Technologies',
    role: 'UI/UX Designer | Full-time',
    duration: 'Nov’25 - Present',
    location: 'Indore , M.P',
  },
  {
    company: 'Atom',
    role: 'UI/UX Designer | Freelancer',
    duration: 'Apr’25 - Oct’25',
    location: 'Remote',
  },
  {
    company: 'MissCallPay',
    role: 'UI/UX Designer | Full-time',
    duration: 'Oct’24 - Mar’25',
    location: 'Mumbai , Maharashtra',
  },
  {
    company: 'HDS Infotech',
    role: 'UI/UX Designer | Intern',
    duration: 'Jul’24 - Oct’24',
    location: 'Remote',
  },
  {
    company: 'ADM Education & Welfare Society',
    role: 'UI/UX Designer | Intern',
    duration: 'May’24 - Jun’24',
    location: 'Remote',
  },
];
