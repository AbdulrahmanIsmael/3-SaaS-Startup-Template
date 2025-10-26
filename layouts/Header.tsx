'use client';
import Image from 'next/image';
import Link from 'next/link';
import { paths } from '@/lib/navigation';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
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
          <ul className="hidden lg:flex lg:items-center lg:gap-10 lg:text-sm lg:font-semibold lg:text-[#0b2238]">
            {
              /* Rendering Nav Links With Their Paths */
              paths.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`${
                      pathname.includes(link.path) && 'text-[#2550de]'
                    } hover:text-[#2550de] hover:transition hover:duration-300`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))
            }
          </ul>

          <button
            type="button"
            className="cursor-pointer bg-[#2550de] text-white text-sm font-medium px-10 py-5 hover:bg-[#0b2238] hover:transition hover:duration-300"
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
