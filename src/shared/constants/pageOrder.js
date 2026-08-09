import { ROUTES } from '@app/router/routes';

export const PAGE_ORDER = [
  { to: ROUTES.home, label: 'Home' },
  { to: ROUTES.forSchool, label: 'For School' },
  { to: ROUTES.forParent, label: 'For Parent' },
  { to: ROUTES.forSpecialist, label: 'For Specialist' },
  { to: ROUTES.pricing, label: 'Pricing' },
  { to: ROUTES.resources, label: 'Resources' },
  { to: ROUTES.about, label: 'About' },
];

export const findPageNeighbours = (pathname) => {
  const index = PAGE_ORDER.findIndex((page) => page.to === pathname);
  if (index === -1) return { previous: null, next: null };

  return { previous: PAGE_ORDER[index - 1] ?? null, next: PAGE_ORDER[index + 1] ?? null };
};
