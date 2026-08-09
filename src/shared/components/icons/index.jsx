const Outline = ({ children, className = 'size-5', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    {children}
  </svg>
);

const Solid = ({ children, className = 'size-5', ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
    {children}
  </svg>
);

export const ClockIcon = (props) => (
  <Outline {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </Outline>
);

export const BrainIcon = (props) => (
  <Outline {...props}>
    <path d="M12 5a2.6 2.6 0 0 0-5-1 2.6 2.6 0 0 0-2.5 3.4A2.6 2.6 0 0 0 5 12.6 2.6 2.6 0 0 0 7.6 17 2.6 2.6 0 0 0 12 18.6V5Z" />
    <path d="M12 5a2.6 2.6 0 0 1 5-1 2.6 2.6 0 0 1 2.5 3.4A2.6 2.6 0 0 1 19 12.6 2.6 2.6 0 0 1 16.4 17 2.6 2.6 0 0 1 12 18.6V5Z" />
  </Outline>
);

export const WifiIcon = (props) => (
  <Outline {...props}>
    <path d="M4.5 11.5a10.5 10.5 0 0 1 15 0" />
    <path d="M8 15a5.6 5.6 0 0 1 8 0" />
    <path d="M11.6 18.6h.8" />
  </Outline>
);

export const GlobeIcon = (props) => (
  <Outline {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </Outline>
);

export const HeartIcon = (props) => (
  <Solid {...props}>
    <path d="M12 20.6 4.3 13.2a4.7 4.7 0 0 1 6.6-6.7l1.1 1 1.1-1a4.7 4.7 0 0 1 6.6 6.7L12 20.6Z" />
  </Solid>
);

export const MailIcon = (props) => (
  <Outline {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </Outline>
);

export const LockIcon = (props) => (
  <Outline {...props}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </Outline>
);

export const EyeIcon = (props) => (
  <Outline {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Outline>
);

export const EyeOffIcon = (props) => (
  <Outline {...props}>
    <path d="M10.6 6.1A9.9 9.9 0 0 1 12 6c6 0 9.5 6 9.5 6a17 17 0 0 1-3.3 4M6.2 7.9A17 17 0 0 0 2.5 12S6 18 12 18a9.6 9.6 0 0 0 4-.85" />
    <path d="m9.9 9.9a3 3 0 0 0 4.2 4.2" />
    <path d="m3 3 18 18" />
  </Outline>
);

export const ArrowRightIcon = (props) => (
  <Outline {...props}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Outline>
);

export const GraduationCapIcon = (props) => (
  <Outline {...props}>
    <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" />
    <path d="M6.5 11.2V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.8" />
    <path d="M21.5 9v5.5" />
  </Outline>
);

export const SchoolIcon = (props) => (
  <Outline {...props}>
    <path d="M4 20V9.5L12 5l8 4.5V20" />
    <path d="M3 20h18" />
    <path d="M10 20v-4.5h4V20" />
    <path d="M9.5 10.5h1M13.5 10.5h1" />
  </Outline>
);

export const UsersIcon = (props) => (
  <Outline {...props}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
    <path d="M16.5 6.2a3 3 0 0 1 0 5.6" />
    <path d="M18 14.4a5.5 5.5 0 0 1 2.5 4.6" />
  </Outline>
);

export const SpecialistIcon = (props) => (
  <Outline {...props}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M12 3.2V2" />
  </Outline>
);

export const ShieldIcon = (props) => (
  <Outline {...props}>
    <path d="M12 3.2 5 6v5.5c0 4.2 2.9 7.6 7 9.3 4.1-1.7 7-5.1 7-9.3V6l-7-2.8Z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </Outline>
);

export const ShieldDocIcon = (props) => (
  <Outline {...props}>
    <path d="M13.5 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h5" />
    <path d="M13.5 3.5 18 8v3" />
    <path d="M18.2 13.2 15 14.3v2.4c0 1.7 1.2 3.2 3.2 3.9 2-.7 3.2-2.2 3.2-3.9v-2.4l-3.2-1.1Z" />
  </Outline>
);

export const AuditIcon = (props) => (
  <Outline {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 4.5 4.5" />
    <path d="M8 12.5v-2M10.5 12.5v-4M13 12.5v-3" />
  </Outline>
);

export const TrendingUpIcon = (props) => (
  <Outline {...props}>
    <path d="m3.5 16.5 5-5 3.5 3.5 6-6.5" />
    <path d="M14.5 8.5h4v4" />
  </Outline>
);

export const CheckIcon = (props) => (
  <Outline {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Outline>
);

export const InfoIcon = (props) => (
  <Outline {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </Outline>
);

export const GoogleIcon = ({ className = 'size-5', ...props }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...props}>
    <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.45a5.5 5.5 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.8Z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.93-2.91l-3.88-3.01c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.76-2.1-6.7-4.94H1.28v3.1A12 12 0 0 0 12 24Z" />
    <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6v-3.1H1.28a12 12 0 0 0 0 10.8l4.02-3.1Z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.18 15.24 0 12 0A12 12 0 0 0 1.28 6.6l4.02 3.1C6.24 6.85 8.88 4.75 12 4.75Z" />
  </svg>
);

export const MicrosoftIcon = ({ className = 'size-5', ...props }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...props}>
    <path fill="#F25022" d="M2 2h9.5v9.5H2Z" />
    <path fill="#7FBA00" d="M12.5 2H22v9.5h-9.5Z" />
    <path fill="#00A4EF" d="M2 12.5h9.5V22H2Z" />
    <path fill="#FFB900" d="M12.5 12.5H22V22h-9.5Z" />
  </svg>
);

export const XIcon = (props) => (
  <Solid {...props}>
    <path d="M18.24 2H21.5l-7.1 8.11L22.5 22h-6.53l-5.11-6.68L4.99 22H1.73l7.6-8.68L1.5 2h6.7l4.62 6.11L18.24 2Zm-1.14 18h1.8L7.02 3.9H5.09L17.1 20Z" />
  </Solid>
);

export const LinkedInIcon = (props) => (
  <Solid {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z" />
  </Solid>
);

export const YouTubeIcon = (props) => (
  <Solid {...props}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
  </Solid>
);
