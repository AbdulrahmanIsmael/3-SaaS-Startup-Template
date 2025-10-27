import { T_menuPaths } from '@/types/ui-types';

export const paths = [
  { name: 'Home', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'FEATURES', path: '/features' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'PAGES', path: '/pages' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact' },
];

export const submenuMap: Record<string, T_menuPaths> = {
  PROJECTS: [{ label: 'Project A', path: '/projects/a' }],
  PAGES: [
    { label: 'Our Team', path: '/team' },
    { label: 'Pricing Table', path: '/pricing' },
    { label: '404 Error', path: '/notfound' },
  ],
  BLOG: [
    { label: 'Blog Grid', path: '/blog/grid' },
    { label: 'Blog Classic', path: '/blog/classic' },
    { label: 'Blog Single', path: '/blog/single' },
  ],
};
