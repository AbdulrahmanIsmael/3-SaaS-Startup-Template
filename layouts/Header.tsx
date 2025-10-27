'use client';
import Image from 'next/image';
import Link from 'next/link';
import { paths } from '@/lib/constants/navigation';
import { usePathname } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { MdArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Submenu from '@/components/ui/Submenu';
import { T_menuPaths, T_menuPosition } from '@/types/ui-types';
import ResponsiveMenu from '@/components/ui/ResponsiveMenu';
import { submenuMap } from '@/lib/constants/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPaths, setMenuPaths] = useState<T_menuPaths>([]);
  const [position, setPosition] = useState<T_menuPosition>({ x: 0, y: 0 });
  const hideTimeout = useRef<NodeJS.Timeout>(null);
  const isHovering = useRef(false);

  const handleShowSubmenu = (
    menuName: string,
    e?: React.MouseEvent<HTMLLIElement>
  ): void => {
    // Clear any pending hide timeouts
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    isHovering.current = true;

    // positioning the submenu based on the menu item
    if (e) {
      setPosition({ x: (e?.target as HTMLLIElement).offsetLeft - 20, y: 80 });
    }

    // Logic to show submenu based on menuName
    if (['PROJECTS', 'PAGES', 'BLOG'].includes(menuName)) {
      setMenuPaths(submenuMap[menuName]);
    } else {
      setMenuPaths([]);
    }
  };

  const handleHideSubmenu = (): void => {
    isHovering.current = false;

    // Add delay before hiding menu
    hideTimeout.current = setTimeout(() => {
      // Only hide if we're still not hovering
      if (!isHovering.current) {
        setMenuPaths([]);
        setPosition({ x: 0, y: 0 });
      }
    }, 200);
  };

  return (
    <>
      <header className="bg-white py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            {/* TEMP: Replace alt with the website name + "logo" & src with the relative or absolute URL of the logo image*/}
            <Image
              alt="Website Logo"
              src="/assets/images/logo.png"
              width={150}
              height={120}
            />
          </Link>

          <div className="flex max-[380px]:flex-col items-center gap-8 max-[380px]:gap-5">
            <ul className="hidden lg:flex lg:items-center lg:gap-10 lg:text-sm lg:font-semibold lg:text-(--secondary-color)">
              {
                /* Rendering Nav Links With Their Paths */
                paths.map((link, index) => (
                  <li
                    key={index}
                    onMouseOver={(e) => handleShowSubmenu(link.name, e)}
                    onMouseOut={() => handleHideSubmenu()}
                  >
                    <Link
                      href={link.path}
                      className={`${
                        pathname.includes(link.path) && 'text-(--primary-color)'
                      } hover:text-(--primary-color) hover:transition hover:duration-300`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>

            <button
              type="button"
              className="cursor-pointer bg-(--primary-color) text-white text-sm max-[380px]:text-xs font-medium px-10 py-5 max-[380px]:px-5 max-[380px]:py-2 hover:bg-(--secondary-color) hover:transition hover:duration-300"
            >
              GET QUOTE
            </button>
            <FiMenu
              size={30}
              color="grey"
              cursor="pointer"
              className="hidden max-lg:block"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </header>

      {/* Responsive Nav Links Component */}
      <ResponsiveMenu isMenuOpen={isMenuOpen} />

      {/* Submenu Component */}
      <Submenu
        paths={menuPaths}
        position={position}
        onMouseEnter={() => {
          if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
          }
          isHovering.current = true;
        }}
        onMouseLeave={handleHideSubmenu}
      />
    </>
  );
};

export default Header;
