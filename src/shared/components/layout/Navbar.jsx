import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useAuth } from '@modules/auth/hooks/useAuth';
import { ROUTES } from '@app/router/routes';
import { cn } from '@shared/utils/cn';
import Button from '@shared/components/ui/Button';
import Logo from './Logo';

const links = [
  { label: 'For School', to: ROUTES.forSchool },
  { label: 'For Parent', to: ROUTES.forParent },
  { label: 'For Specialist', to: ROUTES.forSpecialist },
  { label: 'Pricing', to: ROUTES.pricing },
  { label: 'Resources', to: ROUTES.resources },
  { label: 'About', to: ROUTES.about },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-surface/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-4 sm:h-20" aria-label="Main navigation">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-[15px] text-content-muted transition-colors hover:bg-brand-50 hover:text-brand-700',
                    isActive && 'font-medium text-brand-700',
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          {isAuthenticated ? (
            <>
              <span className="max-w-40 truncate text-sm text-content-muted">{user?.fullName ?? user?.email}</span>
              <Button variant="secondary" size="sm" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link to={ROUTES.login} className="px-1 text-[15px] font-semibold text-brand-600 transition-colors hover:text-brand-700">
                Login
              </Link>
              <Link to={ROUTES.register}>
                <Button className="px-5 font-semibold">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="flex size-11 items-center justify-center rounded-lg text-content transition-colors hover:bg-surface-muted lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className={cn('block h-0.5 w-6 bg-current transition-transform', isOpen && 'translate-y-2 rotate-45')} />
            <span className={cn('block h-0.5 w-6 bg-current transition-opacity', isOpen && 'opacity-0')} />
            <span className={cn('block h-0.5 w-6 bg-current transition-transform', isOpen && '-translate-y-2 -rotate-45')} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border-subtle bg-surface lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-3">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      cn('block rounded-lg px-3 py-3 text-[15px] text-content-muted hover:bg-brand-50 hover:text-brand-700', isActive && 'bg-brand-50 font-medium text-brand-700')
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="container-page flex flex-col gap-2 border-t border-border-subtle py-4">
              {isAuthenticated ? (
                <Button variant="secondary" fullWidth onClick={logout}>
                  Log out
                </Button>
              ) : (
                <>
                  <Link to={ROUTES.login}>
                    <Button variant="secondary" fullWidth>
                      Login
                    </Button>
                  </Link>
                  <Link to={ROUTES.register}>
                    <Button fullWidth>Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
