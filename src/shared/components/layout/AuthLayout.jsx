import { Outlet } from 'react-router-dom';
import Logo from './Logo';

const highlights = ['Modular architecture that scales with your team', 'Secure JWT sessions out of the box', 'Reusable UI built on Tailwind CSS'];

const AuthLayout = () => (
  <div className="grid min-h-dvh lg:grid-cols-2">
    <aside className="relative hidden flex-col justify-between bg-brand-700 p-10 text-white lg:flex">
      <Logo className="text-white [&_span:last-child]:text-white" />
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold leading-tight">Everything your team needs, in one modular platform.</h2>
        <ul className="flex flex-col gap-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-brand-100">
              <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-brand-200">© {new Date().getFullYear()} MiZanova</p>
    </aside>

    <main className="flex items-center justify-center px-4 py-10 sm:px-8">
      <div className="w-full max-w-md">
        <Logo className="mb-8 lg:hidden" />
        <Outlet />
      </div>
    </main>
  </div>
);

export default AuthLayout;
