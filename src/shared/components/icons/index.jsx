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
