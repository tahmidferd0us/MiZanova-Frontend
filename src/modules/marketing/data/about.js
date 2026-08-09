export const MISSION_PARAGRAPHS = [
  "We believe that special education shouldn't be a separate, isolated track. Every student deserves access to high-quality, evidence-based support directly within their primary learning environment.",
  'Our platform bridges the gap between clinical intervention and classroom instruction, using data-driven insights to provide educators with actionable strategies that work for every brain type.',
  "By reducing the cognitive load on teachers and the stigma on students, we're creating an educational landscape where diversity is a celebrated strength rather than a barrier.",
];

export const VALUES = [
  { title: 'Strength-based always', description: 'We focus on what students can do, not just their challenges, building confidence through success.' },
  { title: 'Privacy is non-negotiable', description: 'Sensitive student data is protected with enterprise-grade security and Australian compliance.' },
  { title: 'Evidence over hype', description: 'Every tool and strategy in our platform is backed by peer-reviewed pedagogical research.' },
  { title: 'Educators are heroes', description: "We build for the reality of the classroom, making the teacher's day easier and more impactful." },
];

export const TEAM = [
  { name: 'Sarah Mitchell', role: 'CEO & Founder', bio: 'Former special education lead with 15 years experience in inclusive curriculum design.' },
  { name: 'Dr. James Okafor', role: 'Chief Specialist Officer', bio: 'Clinical psychologist specializing in neuro-developmental pedagogy and assessment.' },
  { name: 'Priya Sharma', role: 'Head of Product', bio: 'Tech veteran focused on human-centered design for accessibility and educational equity.' },
  { name: 'Marcus Reid', role: 'Head of Engineering', bio: 'System architect with a passion for building secure, scalable education infrastructure.' },
];

export const ADVISORY_BOARD = [
  { name: 'Prof. Helen Tran', role: 'Ed Psychology, UNSW' },
  { name: 'Dr. Anand Mehta', role: 'Pediatric Neurology' },
  { name: 'Dr. Sarah Chen', role: 'Autism Research Center' },
  { name: 'James Wilson', role: 'Inclusive Ed Policy' },
  { name: 'Elena Rodriguez', role: 'Speech Pathology Dr.' },
  { name: 'Thomas Kim', role: 'Assistive Tech Expert' },
];

export const AWARDS = ['Award 1', 'Award 2', 'Award 3', 'Award 4', 'Award 5', 'Award 6'];

export const initialsOf = (name) =>
  name
    .replace(/^(Dr\.|Prof\.)\s+/, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
