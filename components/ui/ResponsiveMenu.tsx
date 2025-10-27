import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowRight } from 'react-icons/md';
import { paths } from '@/lib/constants/navigation';
import { submenuMap } from '@/lib/constants/navigation';
import { useState } from 'react';

const ResponsiveMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  // Track which parent menu is expanded (PROJECTS | PAGES | BLOG)
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  return (
    <motion.div
      className="container absolute top-[84px] shadow-md left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isMenuOpen ? 1 : 0,
        y: isMenuOpen ? 0 : -20,
        display: isMenuOpen ? 'block' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <ul className="bg-white px-4 py-5 flex flex-col gap-2 lg:hidden w-full mx-auto">
        {
          /* Rendering Nav Links With Their Paths */
          paths.map((link, index) => {
            const isExpandable = ['PROJECTS', 'PAGES', 'BLOG'].includes(
              link.name
            );
            const isOpen = openMenu === link.name;

            return (
              <li
                key={index}
                className="cursor-pointer w-full"
                onClick={(e) => {
                  if ((e.target as HTMLElement).tagName === 'A') return;
                  toggleMenu(link.name);
                }}
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={link.path}
                    className="text-lg font-medium text-(--secondary-color) py-3"
                  >
                    {link.name[0].toUpperCase()}
                    {link.name.substring(1).toLowerCase()}
                  </Link>

                  {isExpandable && (
                    <button
                      type="button"
                      aria-label={`Toggle ${link.name} submenu`}
                      className={`cursor-pointer p-2 rounded-md transform transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                      }`}
                    >
                      <MdArrowRight size={22} fill="#0b2238" />
                    </button>
                  )}
                </div>

                {/* Collapsible submenu area */}
                {isExpandable && (
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={link.name}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <ul className="pl-4 pr-2 pb-3">
                          {submenuMap[link.name].map((s, si) => (
                            <li key={si} className="py-2">
                              <Link
                                href={s.path}
                                className="text-sm text-gray-600"
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })
        }
      </ul>
    </motion.div>
  );
};

export default ResponsiveMenu;
