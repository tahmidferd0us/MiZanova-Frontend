import { Link } from 'react-router-dom';
import { env } from '@app/config/env';
import Logo from './Logo';

const columns = [
  { title: 'Product', links: [{ label: 'Features', to: '/#features' }, { label: 'Pricing', to: '/#pricing' }, { label: 'Changelog', to: '/#changelog' }] },
  { title: 'Company', links: [{ label: 'About', to: '/#about' }, { label: 'Careers', to: '/#careers' }, { label: 'Contact', to: '/#contact' }] },
  { title: 'Legal', links: [{ label: 'Privacy', to: '/#privacy' }, { label: 'Terms', to: '/#terms' }, { label: 'Security', to: '/#security' }] },
];

const Footer = () => (
  <footer className="border-t border-border-subtle bg-surface-muted">
    <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-3">
        <Logo />
        <p className="max-w-xs text-sm text-content-muted">A modular platform for teams that want to ship faster without giving up structure.</p>
      </div>

      {columns.map(({ title, links }) => (
        <nav key={title} aria-label={title} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-content">{title}</h3>
          <ul className="flex flex-col">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="inline-flex min-h-11 items-center text-sm text-content-muted transition-colors hover:text-brand-600 sm:min-h-9">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>

    <div className="border-t border-border-subtle">
      <div className="container-page flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
        <p className="text-sm text-content-muted">
          © {new Date().getFullYear()} {env.appName}. All rights reserved.
        </p>
        <p className="text-sm text-content-muted">Built with React, Vite and Tailwind CSS.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
