import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-[#d8d8d8] px-4">
      <div className="container mx-auto py-20 flex flex-wrap gap-y-10 justify-between gap-x-6">
        <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-6 w-full sm:w-[45%] lg:w-[23%] leading-7">
          <Link href="/">
            {/* TEMP: Replace alt with the website name + "logo" & src with the relative or absolute URL of the logo image*/}
            <Image
              alt="Website Logo"
              src="/assets/images/logo-light.png"
              width={160}
              height={160}
            />
          </Link>
          <p>
            Building your own home is about desire, fantasy. But it&apos;s
            achievable anyone can do it.
          </p>
        </div>
        <div className="flex flex-col gap-y-2 text-[16px] font-normal items-center text-center sm:text-left sm:items-start w-full sm:w-[45%] lg:w-[10%] ml-0 lg:ml-8">
          <span className="font-bold text-lg mb-2">Company</span>
          <span>
            <Link href=".">About Us</Link>
          </span>
          <span>
            <Link href=".">Our Services</Link>
          </span>
          <span>
            <Link href=".">Clients Reviews</Link>
          </span>
          <span>
            <Link href=".">Contact Us</Link>
          </span>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center sm:text-left sm:items-start w-full sm:w-[45%] lg:w-1/4">
          <span className="font-bold text-lg mb-2">Headquaters</span>
          <span>962 Fifth Avenue, 3rd Floor New York, NY10022</span>
          <span>Hello@TeamXcel.net (+123) 456 789 101</span>
        </div>
        <div className="flex flex-col gap-y-2 items-center text-center sm:text-left sm:items-start w-full sm:w-[45%] lg:w-1/3">
          <span className="font-bold text-lg mb-2">
            Newslatter Subscription
          </span>
          <span className="w-full lg:w-2/3">
            Subscribe and get 10% off from our architecture company.
          </span>
          <span className="h-14 flex items-center w-full ">
            <label htmlFor="subscription" className="hidden">
              Subscription
            </label>
            <input
              type="email"
              name="subscription"
              id="subscription"
              placeholder="Enter Your Email Address..."
              className="h-full placeholder:text-gray-300 border border-[#333333] px-3 focus:outline-0 w-[80%] text-[#d8d8d8]"
            />
            <button
              type="button"
              className="h-full cursor-pointer bg-(--primary-color) text-white text-sm font-medium px-10 hover:bg-(--secondary-color) hover:transition hover:duration-300"
            >
              SUBSCRIBE
            </button>
          </span>
        </div>
      </div>

      <hr className="border border-[#333333]" />

      <div className="text-center text-[#d8d8d8] py-5 text-sm">
        &copy; {new Date().getFullYear()} Saasx Powered by TeamXcel
      </div>
    </footer>
  );
};

export default Footer;
