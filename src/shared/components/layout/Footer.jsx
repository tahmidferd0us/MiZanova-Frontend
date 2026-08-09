import { Link } from 'react-router-dom';
import { env } from '@app/config/env';
import { ROUTES } from '@app/router/routes';
import { GlobeIcon, HeartIcon, LinkedInIcon, XIcon, YouTubeIcon } from '@shared/components/icons';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/#features' },
      { label: 'Security', to: '/#security' },
      { label: 'Pricing', to: ROUTES.pricing },
      { label: 'Changelog', to: '/#changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: ROUTES.about },
      { label: 'Careers', to: '/#careers' },
      { label: 'Blog', to: ROUTES.resources },
      { label: 'Contact', to: '/#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/#privacy' },
      { label: 'Terms of Service', to: '/#terms' },
      { label: 'Cookie Policy', to: '/#cookies' },
      { label: 'Safeguarding', to: '/#safeguarding' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', to: '/#help' },
      { label: 'Community', to: '/#community' },
      { label: 'Training', to: '/#training' },
      { label: 'Status', to: '/#status' },
    ],
  },
];

const socials = [
  { label: 'X', href: 'https://x.com', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
  { label: 'YouTube', href: 'https://youtube.com', Icon: YouTubeIcon },
];

const Footer = () => (
  <footer className="bg-ink px-4 pb-8 pt-16 text-white/70 sm:px-6 lg:px-20 lg:pb-8 lg:pt-20">
    <div className="mx-auto max-w-[1280px]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {columns.map(({ title, links }) => (
          <nav key={title} aria-label={title} className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white">{title}</h3>
            <ul className="flex flex-col gap-1">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="inline-flex min-h-11 items-center text-sm text-white/65 transition-colors hover:text-white sm:min-h-9">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
          <h3 className="text-sm font-bold text-white">Connect</h3>
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:size-9"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <span className="text-sm font-bold text-white">{env.appName}</span>
          <span aria-hidden className="hidden text-white/20 sm:inline">|</span>
          <span className="text-xs text-white/50">© {new Date().getFullYear()} Special Miles Pty Ltd. ABN 12 345 678 901.</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/60">
            <GlobeIcon className="size-3.5" /> 🇦🇺 Australia
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
            Designed with <HeartIcon className="size-3.5 text-red-400" /> for inclusive learning
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
