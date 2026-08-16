/**
 * Copy for the OncoSearch case study page.
 *
 * NOTE: `problem.heading` reads "PROLEM" because that is exactly what the Figma
 * file says. It looks like a typo — change the string here to fix it.
 */

export const prototypeHref = '#';
export const designsHref = '#';

export const meta = [
  { label: 'PROJECT SCOPE', value: 'End-to-End Web' },
  { label: 'INDUSTRY', value: 'Healthcare' },
  { label: 'TYPE', value: 'Self-initiated' },
  { label: 'PROJECT DURATION', value: '6 Weeks' },
];

export const intro = {
  title: 'OncoSearch',
  blurb:
    'A context-aware platform that suggests treatments to oncologists by backing them with relevant, up-to-date clinical trials and research papers.',
};

export const problem = {
  heading: 'PROLEM',
  body: 'Oncologists find it difficult to keep up with new research and clinical trials because so many studies are published every year. This makes it hard for them to quickly find patient-specific, relevant information and choose the best treatment for each case.',
};

export const secondaryResearch = {
  stats: [
    {
      image: 'cs-research-1.webp',
      caption: 'WHO predicts 35 million new cancer cases and 18.2 million deaths by 2050.',
      well: 'bg-white',
      width: 359,
      shot: { width: 359, height: 261, align: 'left' },
    },
    {
      image: 'cs-research-2.webp',
      caption: 'Cancer is one of the most research-intensive medical fields.',
      well: 'bg-white',
      width: 358,
      shot: { width: 324, height: 260 },
    },
    {
      image: 'cs-research-3.webp',
      caption: 'There’s a severe shortage of oncologists worldwide',
      well: 'bg-[#e9f8ec]',
      width: 359,
      shot: { width: 359, height: 206 },
    },
  ],
  articles: [
    {
      title: 'Article 1',
      before: 'Dr. Maurie Markman, President of Medicine and Science at City of Hope, said ',
      linkText:
        'oncologists spend too much time on electronic health records (EHR) and too little with patients.',
      href: 'https://www.medscape.com/viewarticle/895319',
      after: '',
    },
    {
      title: 'Article 2',
      before: '“',
      linkText:
        'A Wave of New Cancer Treatments Challenges Community Oncologists to Keep Up',
      href: 'https://www.myaccesshope.org/recent-news/a-wave-of-new-cancer-treatments-challenges-community-oncologists-to-keep-up',
      after:
        '” explained that thousands of new studies and drug approvals come out every year, making it nearly impossible for oncologists to stay updated for each patient.',
    },
  ],
};

export const objectives = [
  {
    n: '1',
    title: 'Understand the daily workflow',
    body: 'How do oncologists currently search for treatments and trials during patient consultations?',
    bodyTop: 44,
  },
  {
    n: '2',
    title: 'Assess trust in existing tools',
    body: 'What sources do clinicians trust and why? What makes them doubt a result?',
    bodyTop: 46,
  },
];

export const userGroup = {
  title: 'Oncologists',
  body: 'All genders aged 22-65 who is working as Oncologists',
};

export const researchInsights = {
  rowOne: {
    body: 'Oncologists spend an average of 30–40% of consultation time searching for treatment information across multiple disconnected tools like EMR, PubMed, ClinicalTrials.gov.',
    bodyWidth: 464,
    tiles: [
      { lines: ['Time', 'Intensive'], bg: 'bg-[#ececec]' },
      { lines: ['Outdated', 'Trials'], bg: 'bg-cs-bright' },
      { lines: ['No', 'Specificity'], bg: 'bg-cs-bright' },
    ],
  },
  rowTwo: [
    {
      body: 'Doctors lost trust when trial information was outdated. They sometimes referred patients to trials that were already closed, which caused confusion and disrupted their work.',
      width: 441,
      top: -63,
    },
    {
      body: 'Oncologists struggle to find data related to specific case types like cancer type, stage, and past treatments.',
      width: 456,
      top: -37,
    },
  ],
};

export const persona = {
  name: 'Dr. Ravi Kumar',
  tags: [
    { text: '48 years old', left: 87 },
    { text: '18 yrs experience', left: 266 },
    { text: 'Sees 12–15 patients/day', left: 493 },
  ],
  summary:
    'Senior oncologist with 18 years of experience. Sees 12–15 patients daily and is responsible for complex treatment decisions including clinical trial referrals. Constantly racing against time to find accurate, patient-specific data.',
  panels: [
    {
      label: 'Motivations',
      left: 159,
      top: 323,
      listLeft: 228,
      items: [
        'Find the best trial for each patient fast',
        'Trust the data before making a referral',
        'Filter results by cancer type, stage & history',
      ],
    },
    {
      label: 'Frustrations',
      left: 165,
      top: 461,
      listLeft: 283,
      items: [
        'Switches between 3–4 tools every search',
        'Referred patients to already-closed trials',
        'No filtering by specific patient criteria',
      ],
    },
    {
      label: 'Needs',
      left: 165,
      top: 598,
      listLeft: 325,
      items: [
        'One unified search across all sources',
        'Real-time trial status with clear timestamps',
        'Scannable eligibility — no full docs to read',
      ],
    },
  ],
};

export const howMightWe = {
  heading: 'These insights lead me consider how might we...',
  cards: [
    {
      body: 'Consolidate search so oncologists find trials and papers in one place — without switching between tools?',
      width: 311,
    },
    {
      body: 'Signal data freshness clearly so clinicians can trust what they see before acting on it?',
      width: 292,
    },
    {
      body: 'Enable patient-specific filtering without requiring oncologists to manually construct complex queries?',
      width: 295,
    },
  ],
};

export const similarPlatforms = [
  {
    name: 'GE CareIntellect',
    body: 'Uses generative AI to summarize patient data and provide quick insights.',
  },
  {
    name: 'IBM Watson',
    body: 'Analyzes patient records and research to recommend evidence-based treatments.',
  },
  {
    name: 'Flatiron Assist',
    body: 'Helps doctors find matching treatments and clinical trials directly from EHR systems.',
  },
  {
    name: 'xCures xDECIDE',
    body: 'Uses AI and expert review to suggest personalized cancer treatments.',
  },
];

/** Flow-chart nodes, positioned exactly as in Figma. */
export const userFlowNodes = [
  { label: 'Login', left: 0, top: 0 },
  { label: 'Setup Password', left: 0, top: 81 },
  { label: 'Setup Profile', left: 0, top: 162 },
  { label: 'Dashboard', left: 0, top: 243 },
  { label: 'Settings', left: 0, top: 324 },
  { label: 'Discovery Center', left: 166, top: 324 },
  { label: 'Patients', left: 433, top: 324 },
  { label: 'Doctor Profile', left: 599, top: 324 },
  { label: 'Notifications', left: 828, top: 324 },
  { label: 'Logout', left: 1046, top: 324 },
  { label: 'Test', left: 257, top: 427 },
  { label: 'Treatment', left: 420, top: 427 },
  { label: 'Explore Treatments', left: 615, top: 427 },
  { label: 'Treatment Suggestion', left: 599, top: 515 },
  { label: 'Save Treatment', left: 635, top: 603 },
];
