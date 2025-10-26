'use client';
import Image from 'next/image';
import Link from 'next/link';
import { paths } from '@/lib/navigation';
import { usePathname } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { MdArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          <div className="flex items-center gap-8">
            <ul className="hidden lg:flex lg:items-center lg:gap-10 lg:text-sm lg:font-semibold lg:text-(--secondary-color)">
              {
                /* Rendering Nav Links With Their Paths */
                paths.map((link, index) => (
                  <li key={index}>
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
              className="cursor-pointer bg-(--primary-color) text-white text-sm font-medium px-10 py-5 hover:bg-(--secondary-color) hover:transition hover:duration-300"
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

      <motion.div
        className="container absolute top-[104px] shadow-md left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          display: isMenuOpen ? 'block' : 'none',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <ul className="bg-white px-8 py-5 flex flex-col items gap-5">
          {
            /* Rendering Nav Links With Their Paths */
            paths.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer flex items-center justify-between"
              >
                <Link
                  href={link.path}
                  className="text-lg font-medium text-(--secondary-color)"
                >
                  {link.name[0].toUpperCase()}
                  {link.name.substring(1).toLowerCase()}
                </Link>
                {['PROJECTS', 'PAGES', 'BLOG'].includes(link.name) && (
                  <MdArrowRight size={25} fill="#0b2238" />
                )}
              </li>
            ))
          }
        </ul>
      </motion.div>
    </>
  );
};

export default Header;
