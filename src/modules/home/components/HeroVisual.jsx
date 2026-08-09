const HeroVisual = ({ className }) => (
  <svg viewBox="0 0 800 600" aria-hidden="true" className={className}>
    <defs>
      <linearGradient id="hv-base" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1c1049" />
        <stop offset="45%" stopColor="#2c1a6b" />
        <stop offset="100%" stopColor="#140b33" />
      </linearGradient>
      <radialGradient id="hv-lavender">
        <stop offset="0%" stopColor="#cbbcff" stopOpacity="0.72" />
        <stop offset="55%" stopColor="#8d78e4" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#5b47b0" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="hv-violet">
        <stop offset="0%" stopColor="#9b7cf5" stopOpacity="0.9" />
        <stop offset="55%" stopColor="#6f51d9" stopOpacity="0.42" />
        <stop offset="100%" stopColor="#3a2486" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="hv-pink">
        <stop offset="0%" stopColor="#ff3f8e" stopOpacity="1" />
        <stop offset="42%" stopColor="#e0349c" stopOpacity="0.66" />
        <stop offset="100%" stopColor="#7c2ba0" stopOpacity="0" />
      </radialGradient>
      <filter id="hv-soft" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="48" />
      </filter>
      <filter id="hv-tight" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="24" />
      </filter>
      <filter id="hv-edge" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </defs>

    <rect width="800" height="600" fill="url(#hv-base)" />
    <ellipse cx="250" cy="170" rx="330" ry="170" fill="url(#hv-lavender)" filter="url(#hv-soft)" transform="rotate(-16 250 170)" />
    <ellipse cx="470" cy="360" rx="345" ry="185" fill="url(#hv-violet)" filter="url(#hv-soft)" transform="rotate(-24 470 360)" />
    <ellipse cx="620" cy="500" rx="260" ry="140" fill="url(#hv-lavender)" filter="url(#hv-soft)" transform="rotate(-20 620 500)" />
    <ellipse cx="500" cy="355" rx="152" ry="88" fill="url(#hv-pink)" filter="url(#hv-tight)" transform="rotate(-26 500 355)" />
    <path
      d="M 372 470 C 424 392 470 330 556 292"
      fill="none"
      stroke="#efe6ff"
      strokeOpacity="0.55"
      strokeWidth="4"
      strokeLinecap="round"
      filter="url(#hv-edge)"
    />
  </svg>
);

export default HeroVisual;
