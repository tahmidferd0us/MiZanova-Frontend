export const SCHOOL_PLANS = [
  {
    name: 'Small Schools',
    audience: '≤150 students',
    price: '$2,400',
    unit: '/ term',
    annual: 'or $8,000 / year (save 16%)',
    features: [
      { label: 'All teachers & staff' },
      { label: 'Parent accounts included' },
      { label: 'AI classroom strategies' },
      { label: 'Daily student reports' },
      { label: 'Safeguarding workflow' },
      { label: 'Compliance dashboard' },
      { label: 'Email support', excluded: true },
      { label: 'Offline mode access', excluded: true },
    ],
    action: 'Start for Small Schools',
  },
  {
    name: 'Mid-size Schools',
    audience: '150-600 students',
    price: '$5,800',
    unit: '/ term',
    annual: 'or $19,500 / year (save 15%)',
    inheritsFrom: 'Everything in Small, plus:',
    features: [
      { label: 'Specialist review queue' },
      { label: 'Multi-campus support' },
      { label: 'Advanced behavior analytics' },
      { label: 'Priority support (phone + chat)' },
      { label: 'Quarterly outcomes reports' },
      { label: 'Custom data exports' },
    ],
    action: 'Start for Mid-size Schools',
    featured: true,
  },
  {
    name: 'Large Schools',
    audience: '600+ students',
    price: 'Custom',
    annual: 'Enterprise scale pricing',
    inheritsFrom: 'Everything in Mid, plus:',
    features: [
      { label: 'Dedicated success manager' },
      { label: 'Custom LMS integrations' },
      { label: 'Single Sign-On (SAML/SSO)' },
      { label: 'Full API access' },
      { label: 'White-labeled parent portal' },
      { label: 'Annual on-site staff training' },
    ],
    action: 'Contact Sales',
  },
];

export const PARENT_PLANS = [
  {
    name: 'Essential',
    chip: 'Starter',
    audience: 'Best for keeping track of daily progress',
    price: 'AUD $9.99',
    unit: '/ month',
    annual: 'or $99 / year (Save $20)',
    features: [
      { label: 'Daily behaviour reports' },
      { label: 'Up to 3 AI strategies/day' },
      { label: 'Direct message with teacher' },
      { label: 'Home observation logging' },
      { label: 'Basic library access' },
    ],
    action: 'Choose Essential',
  },
  {
    name: 'Premium',
    chip: 'Most popular',
    audience: 'Comprehensive support for specialized needs',
    price: 'AUD $19.99',
    unit: '/ month',
    annual: 'or $199 / year (Save $40)',
    inheritsFrom: 'Everything in Essential, plus:',
    features: [
      { label: 'Unlimited AI strategies' },
      { label: 'Quarterly 3-month progress (PDF)' },
      { label: 'Specialist booking system' },
      { label: 'Strategy effectiveness tracking' },
      { label: 'Premium video modules' },
      { label: 'Export all data & Priority support' },
    ],
    action: 'Choose Premium',
    featured: true,
  },
];

export const PARENT_ADD_ONS = [
  { title: 'Additional child', price: '+ $4.99/month', unit: 'per child', description: 'Perfect for multi-child families requiring individual logging.' },
  { title: 'External teacher collaborator', price: '+ $4.99/month', unit: 'per teacher', description: 'Invite tutors or extracurricular teachers to view logs and strategies.' },
  { title: 'Specialist collaborator', price: '+ $19.99/month', unit: 'per specialist', description: 'Full collaboration with external Psychologists or Occupational Therapists.' },
];

export const SCHOOL_COMPARISON = {
  columns: ['Small', 'Mid-size', 'Large'],
  groups: [
    {
      title: 'Logging & Strategies',
      rows: [
        { label: 'Digital incident logging', values: [true, true, true] },
        { label: 'AI strategy suggestions', values: [true, true, true] },
        { label: 'Teacher intervention library', values: [true, true, true] },
        { label: 'Behavior pattern detection', values: [false, true, true] },
        { label: 'Individual Learning Plans (ILP)', values: [false, true, true] },
      ],
    },
    {
      title: 'Reporting',
      rows: [
        { label: 'Standard daily reports', values: [true, true, true] },
        { label: 'Advanced behavior analytics', values: [false, true, true] },
        { label: 'Multi-campus aggregated data', values: [false, true, true] },
        { label: 'Custom SQL data exports', values: [false, false, true] },
      ],
    },
    {
      title: 'Compliance & Safeguarding',
      rows: [
        { label: 'Safeguarding triage workflow', values: [true, true, true] },
        { label: 'Audit trail logs', values: [true, true, true] },
        { label: 'Compliant data storage (AU-East)', values: [true, true, true] },
      ],
    },
    {
      title: 'Collaboration',
      rows: [
        { label: 'Parent portal access', values: [true, true, true] },
        { label: 'Specialist review queue', values: [false, true, true] },
        { label: 'White-labeled portal', values: [false, false, true] },
      ],
    },
    {
      title: 'Support & Onboarding',
      rows: [
        { label: 'Self-service knowledge base', values: [true, true, true] },
        { label: 'Phone & Chat support', values: [false, true, true] },
        { label: 'Dedicated Success Manager', values: [false, false, true] },
      ],
    },
  ],
};

export const PARENT_COMPARISON = {
  columns: ['Essential', 'Premium'],
  groups: [
    {
      title: 'Logging & Strategies',
      rows: [
        { label: 'Digital incident & observation logging', values: [true, true] },
        { label: 'AI strategy suggestions', values: ['3 per day', 'Unlimited'] },
        { label: 'Home-school strategy syncing', values: [true, true] },
        { label: 'Strategy effectiveness tracking', values: [false, true] },
        { label: 'Premium video modules & learning', values: [false, true] },
      ],
    },
    {
      title: 'Reporting',
      rows: [
        { label: 'Standard daily behavior reports', values: [true, true] },
        { label: '3-month comprehensive progress PDF', values: [false, true] },
        { label: 'Growth milestones tracking', values: ['Basic', 'Advanced'] },
        { label: 'Export data for external specialists', values: [false, true] },
      ],
    },
    {
      title: 'Compliance & Safeguarding',
      rows: [
        { label: 'Secure AU-based data storage', values: [true, true] },
        { label: 'GDPR & Australian Privacy Act compliance', values: [true, true] },
        { label: 'Multi-factor authentication', values: [true, true] },
      ],
    },
    {
      title: 'Collaboration',
      rows: [
        { label: 'Direct messaging with class teacher', values: [true, true] },
        { label: 'Specialist booking & portal', values: [false, true] },
        { label: 'Invite additional family members', values: [true, true] },
      ],
    },
    {
      title: 'Support & Onboarding',
      rows: [
        { label: 'Help center access', values: [true, true] },
        { label: 'Email support', values: [true, true] },
        { label: 'Priority chat support', values: [false, true] },
      ],
    },
  ],
};

export const PRICING_FAQS = [
  {
    question: 'How does the trial work?',
    answer:
      'Schools get a 60-90 day pilot with full access and no payment details required. Families get 7 days free — we only bill once the trial ends, and you can cancel any time within the window.',
  },
  {
    question: 'Can we upgrade or downgrade?',
    answer: 'Yes, at any time. Upgrades take effect immediately and are pro-rated. Downgrades apply from your next billing period, and your data is never removed when you change tier.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Card payments and direct debit through Stripe for families. Schools can also pay by invoice with purchase-order details and 30-day terms.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Families can request a full refund within 14 days of a charge. School contracts are refundable pro-rata if service levels are not met, as set out in your agreement.',
  },
  {
    question: 'Is GST included?',
    answer: 'All Australian prices are shown in AUD and include GST. Your tax invoice itemises the GST component, and international schools are billed in their configured regional currency.',
  },
  {
    question: 'What happens if my school grows mid-year?',
    answer: 'Nothing breaks. We review enrolment at renewal rather than mid-term, so you will not be charged automatically for growth — we will contact you before any tier change.',
  },
];
