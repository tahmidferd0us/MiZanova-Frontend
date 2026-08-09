import { cn } from '@shared/utils/cn';
import Logo from './Logo';

const AuthShell = ({ headerRight, footerNote, footerLinks = [], children, className }) => (
  <div className="flex min-h-dvh flex-col bg-canvas">
    <header className="border-b border-border-subtle bg-surface">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Logo />
        {headerRight}
      </div>
    </header>

    <main className={cn('flex flex-1 items-center justify-center px-4 py-10 sm:px-6 sm:py-14', className)}>{children}</main>

    <footer className="px-4 pb-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-2 text-xs text-content-muted sm:flex-row sm:justify-between">
        <p>{footerNote}</p>
        {footerLinks.length > 0 && (
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="inline-flex min-h-11 items-center transition-colors hover:text-brand-600 sm:min-h-0">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  </div>
);

export default AuthShell;
